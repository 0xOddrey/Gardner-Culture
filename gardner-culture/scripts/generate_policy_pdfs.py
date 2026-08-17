#!/usr/bin/env python3

import json
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[2]
POLICIES_PATH = ROOT / "gardner-policies" / "data" / "policies.json"
OUTPUT_DIR = ROOT / "gardner-culture" / "pdfs"
LOGO_PATH = ROOT / "gardner-culture" / "assets" / "gardner-logo.png"

NAVY = colors.HexColor("#17265E")
GREEN = colors.HexColor("#4D916B")
ORANGE = colors.HexColor("#FF5A27")
LIGHT = colors.HexColor("#F4F6F8")
LINE = colors.HexColor("#D8DDE5")
TEXT = colors.HexColor("#232B42")
MUTED = colors.HexColor("#5E687E")


def clean(value):
    return str(value).replace("\u2011", "-").replace("\u2013", "-").replace("\u2014", "-")


def footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(LINE)
    canvas.line(doc.leftMargin, 12 * mm, width - doc.rightMargin, 12 * mm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 7.5 * mm, "Gardner Academy Staff Policy")
    canvas.drawRightString(width - doc.rightMargin, 7.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def make_list(items, styles, level=0):
    entries = []
    for item in items:
        if isinstance(item, list):
            entries.append(ListItem(make_list(item, styles, level + 1), leftIndent=5 * mm))
        else:
            entries.append(ListItem(Paragraph(clean(item), styles["body"]), leftIndent=4 * mm))
    return ListFlowable(
        entries,
        bulletType="bullet",
        start="circle",
        bulletColor=ORANGE,
        bulletFontSize=7,
        leftIndent=(5 + level * 3) * mm,
        bulletOffsetY=1,
        spaceAfter=3 * mm,
    )


def build_policy(policy, styles):
    output = OUTPUT_DIR / f"{policy['id']}.pdf"
    doc = SimpleDocTemplate(
        str(output),
        pagesize=A4,
        rightMargin=17 * mm,
        leftMargin=17 * mm,
        topMargin=15 * mm,
        bottomMargin=18 * mm,
        title=clean(policy["title"]),
        author="Gardner Academy",
        subject="Staff Policy",
    )

    story = []
    logo = Image(str(LOGO_PATH), width=32 * mm, height=19 * mm)
    brand = Table(
        [[logo, Paragraph("<b>GARDNER ACADEMY</b><br/><font size='11'>STAFF POLICY</font>", styles["brand"]) ]],
        colWidths=[40 * mm, 130 * mm],
    )
    brand.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
        ("LINEBELOW", (0, 0), (-1, -1), 3, NAVY),
    ]))
    story.extend([
        brand,
        Spacer(1, 8 * mm),
        Paragraph(clean(policy["code"]), styles["code"]),
        Paragraph(clean(policy["title"]), styles["title"]),
        Paragraph(clean(policy["summary"]), styles["summary"]),
        Spacer(1, 6 * mm),
    ])

    metadata = Table([
        [Paragraph("<b>APPLIES TO</b><br/>Gardner Academy employees and relevant staff", styles["meta"]),
         Paragraph(f"<b>AUTHORITY</b><br/>{clean(policy.get('authority') or 'Gardner Academy staff standard')}", styles["meta"])],
    ], colWidths=[62 * mm, 108 * mm])
    metadata.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.7, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 3.5 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5 * mm),
    ]))
    story.extend([metadata, Spacer(1, 8 * mm)])

    for index, (title, blocks) in enumerate(policy["sections"], start=1):
        heading = Table([
            [Paragraph(f"{index:02d}", styles["number"]), Paragraph(clean(title), styles["section_title"])],
        ], colWidths=[12 * mm, 158 * mm])
        heading.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2 * mm),
        ]))
        section = [heading]
        for block in blocks:
            if isinstance(block, list):
                section.append(make_list(block, styles))
            else:
                section.append(Paragraph(clean(block), styles["body"]))
                section.append(Spacer(1, 2.5 * mm))
        section.append(Spacer(1, 4 * mm))
        story.append(KeepTogether(section))

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    return output


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    policies = json.loads(POLICIES_PATH.read_text(encoding="utf-8"))
    requested_ids = set(sys.argv[1:])
    if requested_ids:
        policies = [policy for policy in policies if policy["id"] in requested_ids]
        found_ids = {policy["id"] for policy in policies}
        missing_ids = requested_ids - found_ids
        if missing_ids:
            raise SystemExit(f"Unknown policy IDs: {', '.join(sorted(missing_ids))}")
    base = getSampleStyleSheet()
    styles = {
        "brand": ParagraphStyle("Brand", parent=base["Normal"], fontName="Helvetica", fontSize=9, leading=14, textColor=NAVY),
        "code": ParagraphStyle("Code", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=GREEN, spaceAfter=3 * mm),
        "title": ParagraphStyle("Title", parent=base["Title"], fontName="Helvetica-Bold", fontSize=25, leading=29, textColor=NAVY, alignment=0, spaceAfter=3 * mm),
        "summary": ParagraphStyle("Summary", parent=base["Normal"], fontName="Helvetica", fontSize=11.5, leading=17, textColor=MUTED),
        "meta": ParagraphStyle("Meta", parent=base["Normal"], fontName="Helvetica", fontSize=8.5, leading=12, textColor=TEXT),
        "number": ParagraphStyle("Number", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=16, textColor=colors.white, backColor=NAVY, alignment=TA_CENTER, borderPadding=2),
        "section_title": ParagraphStyle("SectionTitle", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=15, leading=19, textColor=NAVY),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName="Helvetica", fontSize=10, leading=15, textColor=TEXT, spaceAfter=1.5 * mm),
    }

    outputs = [build_policy(policy, styles) for policy in policies]
    print(f"Generated {len(outputs)} policy PDF{'s' if len(outputs) != 1 else ''} in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
