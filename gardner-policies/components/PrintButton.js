"use client";

import { Printer } from "lucide-react";

export default function PrintButton({ label = "Print or save PDF" }) {
  return (
    <button className="print-button" type="button" onClick={() => window.print()}>
      <Printer size={18} aria-hidden="true" />
      {label}
    </button>
  );
}
