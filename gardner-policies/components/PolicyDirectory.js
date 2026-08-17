"use client";

import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

export default function PolicyDirectory({ groups }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => groups.map((group) => ({
    ...group,
    policies: group.policies.filter((policy) => {
      if (!normalizedQuery) return true;
      return [policy.code, policy.title, policy.summary]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    }),
  })).filter((group) => group.policies.length > 0), [groups, normalizedQuery]);

  const resultCount = filteredGroups.reduce((count, group) => count + group.policies.length, 0);

  return (
    <div className="directory-area">
      <div className="search-row">
        <label className="search-field">
          <Search size={20} aria-hidden="true" />
          <span className="sr-only">Search staff policies</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, code, or topic"
          />
          {query ? (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={18} aria-hidden="true" />
            </button>
          ) : null}
        </label>
        <p>{resultCount} {resultCount === 1 ? "policy" : "policies"}</p>
      </div>

      {filteredGroups.length ? filteredGroups.map((group) => (
        <section className={`policy-group group-${group.id}`} key={group.id}>
          <header>
            <p>{group.label}</p>
            <span>{group.description}</span>
          </header>
          <div className="policy-grid">
            {group.policies.map((policy) => (
              <Link className="policy-card" href={`/policies/${policy.id}`} key={policy.id}>
                <span className="policy-code">{policy.code}</span>
                <h2>{policy.title}</h2>
                <p>{policy.summary}</p>
                <strong>Read policy <ArrowRight size={17} aria-hidden="true" /></strong>
              </Link>
            ))}
          </div>
        </section>
      )) : (
        <div className="empty-state">
          <Search size={28} aria-hidden="true" />
          <h2>No matching policies</h2>
          <p>Try a policy code or a broader topic.</p>
          <button type="button" onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}
    </div>
  );
}
