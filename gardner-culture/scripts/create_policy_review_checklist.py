from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Flowable,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "gardner-policy-review-checklist.pdf"
LOGO = ROOT / "assets" / "gardner-logo.png"

NAVY = colors.HexColor("#182252")
GREEN = colors.HexColor("#66A279")
CORAL = colors.HexColor("#F85F24")
PALE_GREEN = colors.HexColor("#EEF6F0")
PALE_GRAY = colors.HexColor("#F3F4F7")
MID_GRAY = colors.HexColor("#687083")
LINE = colors.HexColor("#C9CED8")

POLICIES = [
    ("GA-HR-01", "Attendance & Reliability"),
    ("GA-HR-02", "Working Hours, School Functions & Time Off in Lieu"),
    ("GA-HR-03", "Sick Leave & Prevention of Abuse"),
    ("GA-HR-04", "Staff Dress Code"),
    ("GA-ED-01", "Engaged Teaching, Differentiation & Cognitive Challenge"),
    ("GA-ST-01", "Positive Discipline & Prohibition of Corporal Punishment"),
    ("GA-ST-02", "Safeguarding & Active Supervision"),
    ("GA-OP-02", "Late Pick-Up & After-Hours Care"),
    ("GA-OP-01", "Privacy & Confidentiality"),
    ("GA-HR-05", "Fit for Duty & Substance-Free Workplace"),
    ("GA-HR-08", "Staff Benefits: Child Placement, Meals & Shared Resources"),
    ("GA-CM-01", "Family Communication & Professional Representation"),
    ("GA-CM-02", "Gifts & Hospitality from Families"),
    ("GA-HR-09", "Workplace Conflict Resolution & Respectful Communication"),
    ("GA-HR-11", "HR Investigations & Employee Cooperation"),
    ("GA-HR-10", "Theft, Suspected Theft & Protection of Property"),
    ("GA-OP-03", "Safeguarding of Resources & Equipment"),
    ("GA-HR-06", "Employee Grievance Procedure"),
    ("GA-HR-07", "Disciplinary Code & Procedure"),
]


class Checkbox(Flowable):
    def __init__(self, size=8):
        super().__init__()
        self.size = size
        self.width = size
        self.height = size

    def draw(self):
        self.canv.setStrokeColor(NAVY)
        self.canv.setLineWidth(0.9)
        self.canv.rect(0, 0, self.size, self.size, stroke=1, fill=0)


styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    "Title",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=23,
    leading=27,
    textColor=NAVY,
    alignment=TA_LEFT,
    spaceAfter=3 * mm,
)
subtitle_style = ParagraphStyle(
    "Subtitle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9.5,
    leading=13,
    textColor=MID_GRAY,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=14,
    textColor=NAVY,
    spaceAfter=3 * mm,
)
label_style = ParagraphStyle(
    "Label",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=7.2,
    leading=9,
    textColor=MID_GRAY,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.7,
    leading=12,
    textColor=colors.HexColor("#202638"),
)
policy_style = ParagraphStyle(
    "Policy",
    parent=body_style,
    fontName="Helvetica-Bold",
    fontSize=8.5,
    leading=10.5,
    textColor=NAVY,
)
code_style = ParagraphStyle(
    "Code",
    parent=body_style,
    fontName="Helvetica-Bold",
    fontSize=7.8,
    leading=10,
    textColor=CORAL,
)
header_style = ParagraphStyle(
    "Header",
    parent=body_style,
    fontName="Helvetica-Bold",
    fontSize=7.3,
    leading=8.5,
    textColor=colors.white,
    alignment=TA_CENTER,
)
small_style = ParagraphStyle(
    "Small",
    parent=body_style,
    fontSize=7.8,
    leading=10.5,
    textColor=MID_GRAY,
)


def footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    y = 9 * mm
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(15 * mm, y + 4 * mm, width - 15 * mm, y + 4 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MID_GRAY)
    canvas.drawString(15 * mm, y, "GA-HR-F01  |  Staff Policy Review Checklist  |  File in employee HR record")
    canvas.drawRightString(width - 15 * mm, y, f"Page {doc.page} of 2")
    canvas.restoreState()


def field_box(label, width, height=14 * mm):
    return Table(
        [[Paragraph(label.upper(), label_style)], [""]],
        colWidths=[width],
        rowHeights=[5 * mm, height - 5 * mm],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PALE_GRAY),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("LINEBELOW", (0, 0), (-1, 0), 0.4, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, 0), 1.3 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, 0), 1 * mm),
            ]
        ),
    )


def policy_table(items):
    header = [
        Paragraph("TICK", header_style),
        Paragraph("CODE", header_style),
        Paragraph("POLICY", header_style),
        Paragraph("DATE", header_style),
        Paragraph("REVIEWED WITH", header_style),
    ]
    rows = [header]
    for code, title in items:
        rows.append(
            [
                Checkbox(8),
                Paragraph(code, code_style),
                Paragraph(title, policy_style),
                "",
                "",
            ]
        )
    table = Table(
        rows,
        colWidths=[16 * mm, 23 * mm, 69 * mm, 27 * mm, 45 * mm],
        rowHeights=[9 * mm] + [15 * mm] * len(items),
        repeatRows=1,
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NAVY),
                ("GRID", (0, 0), (-1, -1), 0.55, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("ALIGN", (0, 1), (0, -1), "CENTER"),
                ("LEFTPADDING", (0, 1), (-1, -1), 2.5 * mm),
                ("RIGHTPADDING", (0, 1), (-1, -1), 2.5 * mm),
                ("TOPPADDING", (0, 1), (-1, -1), 2 * mm),
                ("BOTTOMPADDING", (0, 1), (-1, -1), 2 * mm),
                ("BACKGROUND", (0, 2), (-1, 2), colors.HexColor("#FAFBFC")),
                ("BACKGROUND", (0, 4), (-1, 4), colors.HexColor("#FAFBFC")),
                ("BACKGROUND", (0, 6), (-1, 6), colors.HexColor("#FAFBFC")),
                ("BACKGROUND", (0, 8), (-1, 8), colors.HexColor("#FAFBFC")),
            ]
        )
    )
    return table


def signature_line(label, width):
    return Table(
        [[""], [Paragraph(label.upper(), label_style)]],
        colWidths=[width],
        rowHeights=[8 * mm, 5 * mm],
        style=TableStyle(
            [
                ("LINEBELOW", (0, 0), (0, 0), 0.7, NAVY),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1 * mm),
            ]
        ),
    )


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=14 * mm,
        bottomMargin=18 * mm,
        title="Gardner Academy Staff Policy Review Checklist",
        author="Gardner Academy",
        subject="Employee HR policy review record",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([PageTemplate(id="checklist", frames=[frame], onPage=footer)])

    story = []
    brand = Table(
        [[str(LOGO), Paragraph("<b>GARDNER ACADEMY</b><br/><font size='9' color='#687083'>STAFF POLICY REVIEW RECORD</font>", body_style)]],
        colWidths=[40 * mm, 140 * mm],
        rowHeights=[18 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("LINEBELOW", (0, 0), (-1, -1), 2.2, NAVY),
                ("IMAGE", (0, 0), (0, 0), str(LOGO)),
            ]
        ),
    )
    # Replace the logo path with a scaled image after the table is created.
    from reportlab.platypus import Image

    logo = Image(str(LOGO), width=32 * mm, height=17 * mm)
    brand._cellvalues[0][0] = logo
    story.extend(
        [
            brand,
            Spacer(1, 7 * mm),
            Paragraph("Staff Policy Review Checklist", title_style),
            Paragraph("Use this form to record the individual review of each current staff policy. Retain the completed form in the employee's HR file.", subtitle_style),
            Spacer(1, 3 * mm),
        ]
    )

    employee_fields = Table(
        [
            [field_box("Employee full name", 105 * mm), field_box("Employee number", 75 * mm)],
            [field_box("Job title / department", 105 * mm), field_box("Review period", 75 * mm)],
        ],
        colWidths=[105 * mm, 75 * mm],
        rowHeights=[14 * mm, 14 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )
    story.extend(
        [
            employee_fields,
            Spacer(1, 5 * mm),
            Paragraph("POLICY REVIEW RECORD", section_style),
            Paragraph("Tick each policy after it has been reviewed with the employee. Enter the review date and the full name of the staff member who led or confirmed the review.", small_style),
            Spacer(1, 3 * mm),
            policy_table(POLICIES[:9]),
            PageBreak(),
            Paragraph("Policy Review Record - Continued", title_style),
            Paragraph("Employee full name: __________________________________________________________________________________", subtitle_style),
            Spacer(1, 5 * mm),
            policy_table(POLICIES[9:]),
            Spacer(1, 6 * mm),
        ]
    )

    acknowledgment = Table(
        [[Paragraph("EMPLOYEE ACKNOWLEDGMENT", header_style)], [Paragraph("I confirm that the policies listed above have been reviewed with me and that I had an opportunity to ask questions. I understand where to access the current approved policies and my responsibility to follow them. Signing this record confirms review and receipt; it does not remove any right provided by law or the applicable employment process.", body_style)]],
        colWidths=[180 * mm],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, 0), NAVY),
                ("BACKGROUND", (0, 1), (0, 1), PALE_GREEN),
                ("BOX", (0, 0), (-1, -1), 0.7, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 2.5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5 * mm),
            ]
        ),
    )
    signatures = Table(
        [
            [signature_line("Employee signature", 82 * mm), signature_line("Date", 42 * mm), signature_line("Employee name", 50 * mm)],
            [signature_line("Reviewer / manager signature", 82 * mm), signature_line("Date", 42 * mm), signature_line("Reviewer name", 50 * mm)],
            [signature_line("HR received by", 82 * mm), signature_line("Date filed", 42 * mm), signature_line("HR file reference", 50 * mm)],
        ],
        colWidths=[86 * mm, 46 * mm, 48 * mm],
        rowHeights=[12 * mm, 12 * mm, 12 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )
    story.append(KeepTogether([acknowledgment, Spacer(1, 3 * mm), signatures]))
    doc.build(story)


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT)
