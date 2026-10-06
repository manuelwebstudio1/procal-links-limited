export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-procal-950 pt-32 pb-20 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-procal-950 via-procal-950/85 to-procal-950/40" />
      <div className="container-procal relative z-10 max-w-3xl">
        <p className="eyebrow text-gold-light">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-white/75">{text}</p>
      </div>
    </section>
  );
}
