"use client";
import React from "react";

export default function ImageGallery() {

  // call api /api/highlights/image
  
  const galleryItems = [
    {
      src: "https://res.cloudinary.com/dnkgyxlde/image/upload/v1762187294/borbheti/sm5ufo69atqtkkcqzrap.png",
      title: "Peaceful Morning Vibes",
    },
    {
      src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      title: "Temple Interior Glow",
    },
    {
      src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      title: "Divine Architecture",
    },
    {
      src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      title: "Evening Rituals",
    },
    {
      src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      title: "Sacred Lamps",
    },
    {
      src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      title: "Traditional Ceremony",
    },
  ];

  return (
    <>
      <section className="py-16 bg-[var(--white-color)] text-[var(--gray-color)]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          {/* Section Header */}
          <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-wide">
            Gallery
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Our Latest Creations
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-4 max-w-xl mx-auto">
            Explore our latest moments and artistic captures that reflect
            devotion, culture, and creativity.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 text-white">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-white/80 mt-2 hover:text-white transition-colors"
                  >
                    View More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.125 1.625H11.375V4.875"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.41602 7.58333L11.3743 1.625"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
