import { FaHandHoldingHeart, FaBookOpen } from "react-icons/fa";

export default function BorbhetiSection() {
  return (
    <div className="container">
      <section className="flex flex-col md:flex-row items-stretch justify-center gap-10 max-md:px-4 py-16 relative">
        {/* Left Image Section */}
        <div className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl shadow-[var(--primary-color)]/40">
          <img
            className="w-full h-full object-cover"
            src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
            alt="Borbheti Temple"
          />
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
                alt="devotee"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
                alt="devotee"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
                alt="devotee"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-[var(--primary-color)] hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">Join our puja</p>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 text-sm text-[var(--gray-color)] flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--primary-color)] mb-2">Borbheti</h1>
            <p className="mt-6 text-[15px] leading-relaxed">
              Established in 1768 by <strong>Sri Sri Astabhuj Dev</strong>, <strong>Borbheti</strong> is a revered pilgrimage site in
              Jorhat, Assam — known for its spiritual heritage and attracting thousands of devotees each year.
            </p>

            <p className="mt-4 text-[15px]">
              The annual <strong>Na-Laguwa Utsav</strong> celebrates faith, unity, and culture through music, devotion, and vibrant rituals.
            </p>

            <p className="mt-4 text-[15px]">
              Managed by the <strong>Borbheti Sangrakhyan & Unnayan Samiti</strong>, it preserves Assamese heritage and hospitality — every guest is welcomed as divine.
            </p>
          </div>

          <div>
            <h2 className="mt-6 text-lg font-semibold text-[var(--primary-color)]">Activities</h2>
            <ul className="list-disc ml-5 mt-3 space-y-2">
              <li>Preparation of <em>‘Pithagurir Laru’</em> from the first harvest rice.</li>
              <li><strong>Gayan-Bayan</strong> – devotional music and dance by Sankardev’s disciples.</li>
            </ul>

            <h2 className="mt-6 text-lg font-semibold text-[var(--primary-color)]">How to Reach</h2>
            <ul className="mt-2 space-y-1">
              <li><strong>Jorhat Airport</strong> – 15 km</li>
              <li><strong>Jorhat Railway Station</strong> – 13 km</li>
              <li><strong>Jorhat City</strong> – 13 km</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
