import { ClipboardCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import PolicyDirectory from "@/components/PolicyDirectory";
import SiteHeader from "@/components/SiteHeader";
import { getGroupedPolicies, getPolicies } from "@/lib/policies";

export default function HomePage() {
  const policies = getPolicies();
  const groups = getGroupedPolicies();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="library-intro">
          <div>
            <p className="eyebrow">Gardner Academy</p>
            <h1>Staff policy library</h1>
            <p>Clear, formal expectations for safe, professional, and responsible practice.</p>
          </div>
          <div className="intro-actions">
            <div><ShieldCheck size={21} aria-hidden="true" /><span><strong>{policies.length} policies</strong> in one current library</span></div>
            <Link href="/review-checklist"><ClipboardCheck size={19} aria-hidden="true" /> Open review checklist</Link>
          </div>
        </section>
        <PolicyDirectory groups={groups} />
      </main>
      <footer className="site-footer"><p>Gardner Academy staff policies</p><span>Use the current online version when reviewing a policy.</span></footer>
    </>
  );
}
