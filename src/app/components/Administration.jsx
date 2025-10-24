"use client";
import React from "react";

const teamMembers = [
  {
    name: "Mr. Nabin Chandra Patra",
    title: "Chief Administrator",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.45.21_8d17664b.jpg",
  },
  {
    name: "Smt. Laxmi Devi",
    title: "Finance Manager",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.45.54_118be9b1.jpg",
  },
  {
    name: "Sri Keshav Nath",
    title: "Operations Head",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.46.22_0b79d41f.jpg",
  },
  {
    name: "Smt. Anjali Bora",
    title: "Event Coordinator",
    role: "Admin",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.47.10_99f70ea4.jpg",
  },
];

export default function Administration() {
  return (
    <section className="py-16 bg-[var(--white-color)] text-[var(--gray-color)] container">
      <div className="text-center mb-12 px-4">
        <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-widest">
          Administration
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Meet Our Temple Administration Team
        </h1>
        <p className="text-sm md:text-base text-gray-500 mt-3 max-w-xl mx-auto">
          Our dedicated administration team ensures smooth temple management,
          transparency, and a seamless experience for all devotees.
        </p>
      </div>

      {/* ===== Team Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 !px-6 items-center justify-center">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="text-sm text-gray-500 w-full divide-y divide-gray-300 border border-gray-200 rounded-xl bg-[var(--white-color)] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-center py-8">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src={member.img}
                alt={member.name}
              />
              <h2 className="text-lg text-gray-800 mt-3 font-semibold">
                {member.name}
              </h2>
              <p className="text-gray-500">{member.title}</p>
              <p className="bg-[var(--primary-color)]/10 px-2 py-0.5 rounded-full mt-2 text-xs text-[var(--primary-color)] border border-[var(--primary-color)]/20">
                {member.role}
              </p>
            </div>
            <div className="flex items-center divide-x divide-gray-200">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-1/2 py-3 hover:text-[var(--primary-color)] cursor-pointer transition-colors"
              >
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                type="button"
                className="flex items-center justify-center gap-2 w-1/2 py-3 hover:text-[var(--primary-color)] cursor-pointer transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
