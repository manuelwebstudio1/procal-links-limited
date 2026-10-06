import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream px-6 pb-24 pt-36 text-center">
      <h1 className="font-serif text-5xl text-procal-900">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        That page is not part of the Procal Links Limited website. Let&apos;s get you back to the listings.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-procal-950">
        Back to Home
      </Link>
    </section>
  );
}
