import { ClipboardCheck } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import SiteHeader from "@/components/SiteHeader";
import { getGroupedPolicies } from "@/lib/policies";

export const metadata = {
  title: "Policy Review Checklist",
  description: "Printable Gardner Academy employee policy review record.",
};

export default function ReviewChecklistPage() {
  const groups = getGroupedPolicies();

  return (
    <>
      <SiteHeader />
      <main className="checklist-page">
        <header className="checklist-header">
          <div>
            <p className="eyebrow">HR file record</p>
            <h1>Policy review checklist</h1>
            <p>Record each policy reviewed with the employee and retain the completed checklist in the employee's HR file.</p>
          </div>
          <PrintButton label="Print checklist" />
        </header>

        <section className="employee-fields" aria-label="Employee details">
          <label>Employee name <span /></label>
          <label>Position / department <span /></label>
          <label>Reviewer name <span /></label>
          <label>Review period <span /></label>
        </section>

        <div className="checklist-groups">
          {groups.map((group) => (
            <section className={`checklist-group group-${group.id}`} key={group.id}>
              <h2>{group.label}</h2>
              <div className="checklist-table" role="table" aria-label={`${group.label} policy checklist`}>
                <div className="checklist-row checklist-columns" role="row">
                  <span role="columnheader">Reviewed</span>
                  <span role="columnheader">Policy</span>
                  <span role="columnheader">Date</span>
                  <span role="columnheader">Reviewed by</span>
                </div>
                {group.policies.map((policy) => (
                  <div className="checklist-row" role="row" key={policy.id}>
                    <span role="cell" aria-label="Reviewed checkbox"><i /></span>
                    <span role="cell"><strong>{policy.code}</strong>{policy.title}</span>
                    <span role="cell" />
                    <span role="cell" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="acknowledgement">
          <ClipboardCheck size={26} aria-hidden="true" />
          <div>
            <h2>Review acknowledgement</h2>
            <p>I confirm that the policies marked above were reviewed with me and that I had an opportunity to ask questions. This record confirms review; it does not replace the policies or the employee's obligations under them.</p>
          </div>
          <label>Employee signature <span /></label>
          <label>Date <span /></label>
          <label>Reviewer signature <span /></label>
          <label>Date <span /></label>
        </section>
      </main>
    </>
  );
}
