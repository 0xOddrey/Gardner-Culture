import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PolicySidebar({ groups, currentSlug }) {
  return (
    <aside className="policy-sidebar" aria-label="Policy navigation">
      <Link className="sidebar-back" href="/"><ArrowLeft size={17} aria-hidden="true" /> All policies</Link>
      {groups.map((group) => (
        <div className="sidebar-group" key={group.id}>
          <p>{group.label}</p>
          {group.policies.map((policy) => (
            <Link
              className={policy.id === currentSlug ? "active" : undefined}
              href={`/policies/${policy.id}`}
              aria-current={policy.id === currentSlug ? "page" : undefined}
              key={policy.id}
            >
              <span>{policy.code}</span>
              {policy.title}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
