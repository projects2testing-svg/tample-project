"use client";
import React from "react";

const teamMembers = [
  {
    name: "Purna kanta bora",
    title: "Chief Administrator",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.45.21_8d17664b.jpg",
    email: "nabin.patra@temple.com",
    whatsapp: "+911234567890"
  },
  {
    name: "Ajay nath",
    title: "Finance Manager",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.45.54_118be9b1.jpg",
    email: "laxmi.devi@temple.com",
    whatsapp: "+911234567891"
  },
  {
    name: "Nabin patra",
    title: "Operations Head",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.46.22_0b79d41f.jpg",
    email: "keshav.nath@temple.com",
    whatsapp: "+911234567892"
  },
  {
    name: "Surendra nath",
    title: "Event Coordinator",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.47.10_99f70ea4.jpg",
    email: "anjali.bora@temple.com",
    whatsapp: "+911234567893"
  },
];

export default function Administration() {
    const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, "_blank");
  };

  const handleWhatsAppClick = (phone) => {
    const message =
      "Hello, I would like to get more information about temple services.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


  return (
    <section className="py-8 md:py-16 bg-[var(--white-color)] text-[var(--gray-color)] container mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-xs sm:text-sm text-[var(--primary-color)] font-medium uppercase tracking-widest">
          Administration
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 px-2">
          Meet Our Temple Administration Team
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-3 max-w-xl mx-auto px-2">
          Our dedicated administration team ensures smooth temple management,
          transparency, and a seamless experience for all devotees.
        </p>
      </div>

      {/* ===== Team Cards ===== */}
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center justify-center">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="text-sm text-gray-500 w-full divide-y divide-gray-300 border border-gray-200 rounded-xl bg-[var(--white-color)] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-center py-6 sm:py-8 px-2">
              <img
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
                src={member.img}
                alt={member.name}
              />
              <h2 className="text-base sm:text-lg text-gray-800 mt-3 font-semibold text-center px-2">
                {member.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-1">{member.title}</p>
              <p className="bg-[var(--primary-color)]/10 px-2 py-0.5 rounded-full mt-2 text-xs text-[var(--primary-color)] border border-[var(--primary-color)]/20">
                {member.role}
              </p>
            </div>
            <div className="flex items-center divide-x divide-gray-200">
              <button
                onClick={() => handleEmailClick(member.email)}
                type="button"
                className="flex items-center justify-center gap-1 sm:gap-2 w-1/2 py-2 sm:py-3 hover:text-[var(--primary-color)] cursor-pointer transition-colors text-xs sm:text-sm"
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Email
              </button>
              <button
                onClick={() => handleWhatsAppClick(member.whatsapp)}
                type="button"
                className="flex items-center justify-center gap-1 sm:gap-2 w-1/2 py-2 sm:py-3 hover:text-[var(--primary-color)] cursor-pointer transition-colors text-xs sm:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 .02 5.35.02 12a11.87 11.87 0 0 0 1.68 6.03L0 24l6.18-1.62A11.86 11.86 0 0 0 12 24c6.63 0 12-5.35 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.82 9.82 0 0 1-5.01-1.36l-.36-.21-3.67.97.98-3.57-.23-.37A9.85 9.85 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.03 2.91A9.9 9.9 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.48-7.73c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.25-.6-.5-.52-.67-.53H6.7c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
                </svg>
                WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}