import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, Library } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="Gardner Academy staff policies home">
          <Image src="/gardner-logo.png" alt="Gardner Academy" width={100} height={60} priority />
          <span>
            <strong>Staff Policies</strong>
            <small>Gardner Academy</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/"><Library size={18} aria-hidden="true" /> Policy library</Link>
          <Link href="/review-checklist"><ClipboardCheck size={18} aria-hidden="true" /> Review checklist</Link>
        </nav>
      </div>
    </header>
  );
}
