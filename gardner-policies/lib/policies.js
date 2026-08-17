import policies from "@/data/policies.json";

export const policyGroups = [
  {
    id: "people-work",
    label: "People & work",
    description: "Attendance, conduct, benefits, communication, and employment procedures.",
    prefixes: ["GA-HR"],
  },
  {
    id: "learning-students",
    label: "Learning & students",
    description: "Teaching, discipline, supervision, and student-centred practice.",
    prefixes: ["GA-ED", "GA-ST"],
  },
  {
    id: "operations-community",
    label: "Operations & community",
    description: "Daily operations, resources, confidentiality, and family relationships.",
    prefixes: ["GA-OP", "GA-CM"],
  },
];

export function getPolicies() {
  return policies;
}

export function getPolicy(slug) {
  return policies.find((policy) => policy.id === slug);
}

export function getPolicyGroup(policy) {
  return policyGroups.find((group) => group.prefixes.some((prefix) => policy.code.startsWith(prefix)));
}

export function getGroupedPolicies() {
  return policyGroups.map((group) => ({
    ...group,
    policies: policies.filter((policy) => group.prefixes.some((prefix) => policy.code.startsWith(prefix))),
  }));
}

export function getAdjacentPolicies(slug) {
  const index = policies.findIndex((policy) => policy.id === slug);
  return {
    previous: index > 0 ? policies[index - 1] : null,
    next: index >= 0 && index < policies.length - 1 ? policies[index + 1] : null,
  };
}
