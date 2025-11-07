import { FaBookOpen, FaHistory, FaUsers, FaLandmark, FaCalendarAlt } from "react-icons/fa";
import HeaderSlider from "../components/HeaderSlider";

const festivalData = [
  { month: "April", events: ["Sri Sri Manasha Devi Puthi Opening Ceremony", "Chaitra Sangkranti", "Bohag Bihu and Halkhata (Assamese new year day)"] },
  { month: "May", events: ["Puja of Sri Sri Grammya Devata"] },
  { month: "June", events: ["Satha Brata", "Ambubachi Mela"] },
  { month: "July", events: ["Daksinayan Sangkranti and Puja of Sri Sri Dakshina Kali Devi"] },
  { month: "August", events: ["Sri Sri Manasha Devi Puja and Debaddhani Festival", "Lalita Saptami and Puja of Sri Sri Latitakanta Devi", "Puja of Sri Sri Joyadurga Devi"] },
  { month: "Aug/Sept", events: ["Janam Astami (Birth day of Lord Krishna)", "Pitri Tarpan"] },
  { month: "September", events: ["Sri Sri Manasha Devi Puthi Closing Ceremony", "Sri Sri Biswakarma Puja"] },
  { month: "Sept/Oct", events: ["Nabamyadi Kalparambha", "Sharadiya Sri Sri Durga Puja from Krishna Navami to Shukla Navami"] },
  { month: "October", events: ["Sri Sri Lakshmi Devi Puja"] },
  { month: "November", events: ["Sri Sri Kartik Puja"] },
  { month: "Nov/Dec", events: ["Dhannya Sedan", "Navanna"] },
  { month: "Dec/Jan", events: ["Puhan Biya (Marriage Day of Devi Kamakhya)"] },
  { month: "January", events: ["Pousha Sangkranti (Makara Sangkranti)", "Sri Sri Ratanti Kali Puja"] },
  { month: "Jan/Feb", events: ["Sri Sri Ganesh Puja", "Sri Sri Saraswati Puja"] },
  { month: "Feb/Mar", events: ["Maha Shiva Ratri", "Gopal Doul (Holi Utsav)"] },
  { month: "Mar/Apr", events: ["Shiva Doul", "Durga Doul", "Sri Sri Basanti Puja", "Sri Sri Raj-Rajaswari Puja (from Chaitra Amavashya to Purnima)"] },
];

export default function AboutPujaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSlider />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-8 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 mb-6">
          <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
          <span className="text-sm font-medium text-gray-600">Celebrating Tradition & Devotion</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Borbheti Temple & Puja Festival
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Discover the spiritual heritage of Borbheti Temple and experience Assam's vibrant festivals through devotion, rituals, and culture.
        </p>
      </section>

      {/* Temple Introduction Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden ">
              <img
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
                alt="Borbheti Temple"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4  border border-gray-200 hidden md:block">
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

          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[var(--primary-color)] rounded-xl">
                <FaBookOpen className="text-xl text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Temple Overview</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Established in <span className="font-semibold text-[var(--primary-color)]">1768 by Sri Sri Astabhuj Dev</span>, Borbheti Temple represents a remarkable feat of communal devotion.
              </p>
              <p>
                Built through the collective effort of eight lakh devotees, the temple continues to inspire faith, leadership, and peaceful coexistence.
              </p>
            </div>
            {/* Mobile-only stats */}
            <div className="flex items-center justify-center gap-6 py-4 bg-gray-100 rounded-lg md:hidden">
              <div className="text-center">
                <p className="font-bold text-2xl text-[var(--primary-color)]">800,000+</p>
                <p className="text-sm text-gray-600">Founding Devotees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Timeline Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-center gap-3">
            <FaCalendarAlt className="text-[var(--primary-color)] text-3xl mb-2 md:mb-0" /> 
            <span>Complete Festival Calendar</span>
          </h2>
          
          {/* Mobile Timeline */}
          <div className="block md:hidden">
            <div className="space-y-6">
              {festivalData.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">{item.month}</h3>
                      <ul className="space-y-2">
                        {item.events.map((event, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0"></span>
                            <span>{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[var(--primary-color)] opacity-60"></div>
            
            {festivalData.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`mb-12 flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="w-5/12"></div>
                  <div className="z-10 w-10 h-10 rounded-full bg-[var(--primary-color)] border-4 border-white flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className={`w-5/12 bg-white rounded-xl border border-gray-200 p-6 relative transition-all duration-300 hover:scale-105 ${
                    isLeft ? "text-right" : "text-left"
                  }`}>
                    <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3">{item.month}</h3>
                    <ul className="space-y-2">
                      {item.events.map((event, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed">{event}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto rounded-2xl  p-8 md:p-12">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="p-3 bg-[var(--primary-color)] rounded-xl">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Organizers & Management</h2>
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            Managed by dedicated community committees and spiritual leaders, ensuring every ritual, procession, and performance is conducted perfectly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {[
              "Daily rituals & ceremonies",
              "Coordinate performances & processions", 
              "Ensure participant safety & logistics",
              "Promote cultural awareness & heritage"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}