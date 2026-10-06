import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/blog";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const others = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <article className="bg-cream pb-20 pt-28">
      <div className="container-procal max-w-3xl">
        <p className="text-sm text-muted">
          <Link href="/blog" className="hover:text-procal-800">
            Insights
          </Link>
          <span className="px-2">/</span>
          {article.category}
        </p>
        <h1 className="mt-4 font-serif text-4xl text-procal-900 sm:text-5xl">{article.title}</h1>
        <p className="mt-3 text-sm text-gold-dark">
          {article.category} · {article.date}
        </p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[28px]">
          <Image src={article.image} alt={article.title} fill className="object-cover" priority sizes="800px" />
        </div>
        <div className="mt-10 space-y-5 text-[1.05rem] leading-8 text-ink">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 rounded-[28px] bg-procal-900 p-8 text-white">
          <h2 className="font-serif text-3xl">Ready to look at actual properties?</h2>
          <p className="mt-3 text-white/75">Browse current listings or speak with a Procal agent.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/properties" className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-procal-950">
              Explore Properties
            </Link>
            <Link href="/contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
              Talk to an Agent
            </Link>
          </div>
        </div>
        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-procal-900">More from Procal</h2>
            <ul className="mt-4 space-y-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="text-procal-800 hover:text-gold-dark">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
