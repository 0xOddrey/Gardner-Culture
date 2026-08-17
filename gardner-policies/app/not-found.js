import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <p className="eyebrow">Policy not found</p>
        <h1>This policy is not in the current library.</h1>
        <Link href="/">Return to all policies</Link>
      </main>
    </>
  );
}
