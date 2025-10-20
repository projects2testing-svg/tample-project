export default function RecommendedTemplates() {
  return (
    <section className="container py-12">
      <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-widest text-center">
        Other Templates
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">Recommended Templates</h2>
      <p className="text-sm md:text-base text-center text-slate-500 mt-2 max-w-2xl mx-auto">
        Check out some of our most popular templates carefully crafted for your projects.
      </p>

      <div className="flex flex-col md:flex-row items-stretch gap-6 mt-10">
        {[
          {
            title: "Modern Portfolio",
            description: "A clean, modern portfolio template perfect for showcasing creative work.",
            img: "https://www.maakamakhya.org/assets/images/ma_kama.jpg"
          },
          {
            title: "Business Landing",
            description: "A professional landing page template for startups and agencies.",
            img: "https://www.maakamakhya.org/assets/images/ma_kama.jpg"
          },
          {
            title: "E-commerce Store",
            description: "An elegant e-commerce template to help you start selling online quickly.",
            img: "https://www.maakamakhya.org/assets/images/ma_kama.jpg"
          }
        ].map((item, i) => (
          <div
            key={i}
            className="relative group flex-1 min-w-[250px] h-80 md:h-96 overflow-hidden rounded-lg transition-all duration-500 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            <div
              className={`absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white transition-opacity duration-300
              md:opacity-0 md:group-hover:opacity-100 opacity-100`}
            >
              <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
