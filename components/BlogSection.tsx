import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { articles } from "@/data/blog";

export function BlogSection() {
  return (
    <section className="bg-cream py-20">
      <div className="container-procal">
        <FadeIn className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="mt-3 font-serif text-4xl text-procal-900 sm:text-5xl">Property Notes Worth Reading</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-procal-800">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {articles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.05}>
              <article className="group h-full overflow-hidden rounded-3xl border border-line bg-white">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    {article.category} · {article.date}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-procal-900">{article.title}</h3>
                  <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-procal-800">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
