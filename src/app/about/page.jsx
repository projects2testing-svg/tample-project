import { FaBookOpen, FaHistory, FaLandmark, FaUsers, FaWater, FaMountain, FaMonument } from "react-icons/fa";
import HeaderSlider from "../components/HeaderSlider";

export default function AboutTemple() {
  return (
    <div className="min-h-screen bg-white">
       <HeaderSlider />
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 mb-6">
            <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Sacred Heritage Site Since 1768</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Borbheti Temple
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover the divine legacy, ancient legends, and architectural marvel of one of Assam's most revered spiritual destinations
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-80 object-cover"
                src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
                alt="Borbheti Temple"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">800,000+</p>
                  <p className="text-xs text-gray-600">Founding Devotees</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[var(--primary-color)] rounded-lg">
                <FaBookOpen className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Established in <span className="font-semibold text-[var(--primary-color)]">1768 by Sri Sri Astabhuj Dev</span>, 
                Borbheti Temple represents one of the most remarkable feats of communal devotion in Assamese history.
              </p>
              <p>
                What began as a sacred relocation from Sutiapata evolved into a monumental spiritual center, 
                built through the collective effort of eight lakh devotees united in faith and purpose.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-lg font-bold text-[var(--primary-color)]">360×120</p>
                <p className="text-xs text-gray-600">Square Feet Platform</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-lg font-bold text-[var(--primary-color)]">90 ft</p>
                <p className="text-xs text-gray-600">Platform Height</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Legend Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[var(--primary-color)] rounded-lg">
              <FaHistory className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Temple Legend</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">The Divine Revelation</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  According to ancient lore, the temple's location was revealed to Sri Sri Astabhuj Dev in a divine vision. 
                  The deity appeared in his dreams, guiding him to establish a sacred space where devotees could attain spiritual enlightenment.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The name "Borbheti" itself carries profound meaning, derived from local dialect words that signify "great revelation" and "divine manifestation."
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">Miraculous Beginnings</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Legends speak of miraculous events during the temple's construction - celestial signs, spontaneous flowering 
                  of trees out of season, and the discovery of sacred artifacts that confirmed this was indeed a blessed location chosen by the divine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[var(--primary-color)] rounded-lg">
              <FaHistory className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Sacred History</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                In the year 1768, the ninth Mayamora Vaishnavite Guru and the Satradhikar of the erstwhile Sutiapata Satra, 
                Sri Sri Astabhuj Dev, decided to relocate the monastery from Sutiapata to a safer place, less threatened by 
                the shifting currents of the Brahmaputra River. The new site, known today as Borbheti, is situated at the heart of Malow Pathar.
              </p>
              <p className="mb-4">
                Fulfilling the Guru's wish, a water body—the deepest in the locality, measuring nearly 36 feet deep during summer—was 
                chosen as the sacred site. In the autumn of 1768, about eight lakh disciples of the Mayamora Vaishnavite sect from 
                across Assam were invited to build a raised earthen platform (bheti) for a Namghar within this deep water body.
              </p>
              <p className="mb-4">
                Following ceremonial prayers, Sri Sri Astabhuj Dev placed the first piece of earth into the water while chanting "Ram." 
                Each of his eight lakh followers then followed his example, offering one piece of earth carried in their turban (paguri) 
                while chanting the same divine name. Within six months, a magnificent raised earthen bed measuring 360 x 120 square feet 
                and 90 feet high was created. This monumental foundation came to be known as Borbheti, also revered as Maha Bheti and Ratna Giriri.
              </p>
            </div>
          </div>

          {/* Historical Facts Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-[var(--primary-color)] mb-2">1768</div>
              <h4 className="font-semibold text-gray-800 mb-2">Foundation Year</h4>
              <p className="text-sm text-gray-600">Temple established by Sri Sri Astabhuj Dev</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-[var(--primary-color)] mb-2">800,000</div>
              <h4 className="font-semibold text-gray-800 mb-2">Devotees</h4>
              <p className="text-sm text-gray-600">Participated in construction</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-[var(--primary-color)] mb-2">6 Months</div>
              <h4 className="font-semibold text-gray-800 mb-2">Construction</h4>
              <p className="text-sm text-gray-600">To complete the monumental platform</p>
            </div>
          </div>

          {/* Modern History */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">Present Day Borbheti</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Today, Borbheti lies under Sarucharai Mouza of Jorhat district, covering an area of 6 bigha, 3 katha, and 3 locha. 
                  It is presently managed by the Borbheti Sangrakshan and Unnayan Samiti, a registered organization under the Government of Assam.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The committee has developed the site with a permanent Namghar, Satraghar, Office-cum-Cultural Centre, boundary wall, 
                  and other essential facilities. A guest house is currently under construction with support from the local MLA's development fund.
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Additionally, the Department of Archaeology, Government of Assam, is building a protective boulder wall around the 
                  Borbheti to prevent erosion—about one-third of which has already been completed.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  Today, Borbheti stands as a powerful symbol of unity, integrity, and universal brotherhood—a sacred place that 
                  inspires all who visit to learn lessons of leadership, devotion, and peaceful coexistence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[var(--primary-color)] rounded-lg">
              <FaLandmark className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Architecture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">Traditional Assamese Style</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Borbheti Temple showcases exquisite traditional Assamese temple architecture, characterized by its distinctive 
                  roof design, intricate wood carvings, and harmonious integration with the natural surroundings.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">Sacred Geometry</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The temple's layout follows ancient Vastu Shastra principles, with precise geometric proportions that create 
                  a spiritually charged atmosphere conducive to meditation and worship.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-64 object-cover"
                src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
                alt="Temple Architecture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Shebaits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[var(--primary-color)] rounded-lg">
              <FaUsers className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">The Shebaits</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">Guardians of Tradition</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  The Shebaits of Borbheti Temple are the dedicated custodians who have preserved the temple's rituals and 
                  traditions across generations. Their lineage traces back to the temple's founding era.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  These spiritual guardians ensure that ancient practices are maintained while adapting to contemporary needs, 
                  creating a bridge between timeless traditions and modern devotees.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">Responsibilities</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full"></div>
                    Daily rituals and worship ceremonies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full"></div>
                    Preservation of sacred texts and traditions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full"></div>
                    Guidance to devotees and spiritual seekers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full"></div>
                    Organization of festivals and special events
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}