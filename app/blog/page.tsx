import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/data/blog";
import { images } from "@/data/images";

export const metadata = {
  title: "Property Insights",
  description: "Guides and notes on buying, renting and investing in Ghanaian property.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Clear Thinking on Ghanaian Property"
        text="Practical notes for buyers, tenants, owners and anyone considering land. Written to be useful, not noisy."
        image={images.aboutHero}
      />
      <section className="bg-cream py-16">
        <div className="container-procal grid gap-7 md:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="overflow-hidden rounded-[28px] bg-white">
              <div className="relative aspect-[16/9]">
                <Image src={article.image} alt={article.title} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  {article.category} · {article.date}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-procal-900">{article.title}</h2>
                <p className="mt-3 text-muted">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="mt-5 inline-flex text-sm font-semibold text-procal-800">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
