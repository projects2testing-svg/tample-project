"use client";
import React from "react";

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Temple Morning Rituals",
      thumbnail:
        "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      id: 2,
      title: "Traditional Ceremony Highlights",
      thumbnail:
        "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
    {
      id: 3,
      title: "Sacred Chanting Moments",
      thumbnail:
        "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://www.youtube.com/embed/jfKfPfyJRdk",
    },
    {
      id: 4,
      title: "Festival Celebration 2025",
      thumbnail:
        "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
      id: 5,
      title: "Festival Celebration 2025",
      thumbnail:
        "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
      id: 6,
      title: "Festival Celebration 2025",
      thumbnail:
        "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="py-16 bg-[var(--white-color)] text-[var(--gray-color)]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          {/* Header */}
          <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-wide">
            Video Gallery
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Experience Our Moments
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-4 max-w-xl mx-auto">
            Watch highlights of our events, rituals, and creative performances captured beautifully.
          </p>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button
                      onClick={() =>
                        window.open(video.url, "_blank", "noopener,noreferrer")
                      }
                      className="bg-white text-gray-900 rounded-full p-4 hover:scale-110 transition-transform"
                    >
                      ▶
                    </button>
                  </div>
                </div>

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <h2 className="text-lg font-semibold">{video.title}</h2>
                  <a
                    href={video.url}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-white/80 mt-2 hover:text-white transition-colors"
                  >
                    Watch Now
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
