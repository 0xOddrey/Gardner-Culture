import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import PolicySection from "@/components/PolicySection";
import PolicySidebar from "@/components/PolicySidebar";
import PrintButton from "@/components/PrintButton";
import SiteHeader from "@/components/SiteHeader";
import { getAdjacentPolicies, getGroupedPolicies, getPolicies, getPolicy, getPolicyGroup } from "@/lib/policies";

export function generateStaticParams() {
  return getPolicies().map((policy) => ({ slug: policy.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  return policy ? { title: policy.title, description: policy.summary } : {};
}

export default async function PolicyPage({ params }) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  const groups = getGroupedPolicies();
  const group = getPolicyGroup(policy);
  const { previous, next } = getAdjacentPolicies(policy.id);

  return (
    <>
      <SiteHeader />
      <main className="policy-page-shell">
        <PolicySidebar groups={groups} currentSlug={policy.id} />
        <article className="policy-document">
          <Link className="mobile-back" href="/"><ArrowLeft size={17} aria-hidden="true" /> Policy library</Link>
          <header className="policy-document-header">
            <div className="print-brand">
              <Image src="/gardner-logo.png" alt="Gardner Academy" width={86} height={52} />
              <span>Staff Policy</span>
            </div>
            <div className="policy-heading-row">
              <div>
                <p className="policy-overline"><span>{policy.code}</span>{group?.label}</p>
                <h1>{policy.title}</h1>
                <p className="policy-summary">{policy.summary}</p>
              </div>
              <PrintButton />
            </div>
            <dl className="policy-meta">
              <div><dt>Policy code</dt><dd>{policy.code}</dd></div>
              <div><dt>Applies to</dt><dd>Gardner Academy employees and relevant staff</dd></div>
              <div><dt>Authority</dt><dd>{policy.authority || "Gardner Academy staff standard"}</dd></div>
            </dl>
          </header>

          <div className="policy-sections">
            {policy.sections.map(([title, blocks], index) => (
              <PolicySection number={index + 1} title={title} blocks={blocks} key={title} />
            ))}
          </div>

          <nav className="policy-turn" aria-label="Adjacent policies">
            {previous ? (
              <Link href={`/policies/${previous.id}`}>
                <ArrowLeft size={18} aria-hidden="true" />
                <span><small>Previous policy</small>{previous.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/policies/${next.id}`}>
                <span><small>Next policy</small>{next.title}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ) : (
              <Link href="/"><span><small>Return to</small>Policy library</span><BookOpen size={18} aria-hidden="true" /></Link>
            )}
          </nav>
        </article>
      </main>
    </>
  );
}
