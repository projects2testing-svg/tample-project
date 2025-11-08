"use client";
import React, { useState, useEffect } from "react";
import { GoVideo } from "react-icons/go";

export default function VideoGallery() {

  const videos =[
    {
      id: 1,
      title: "Temple Morning Rituals",
      thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://youtu.be/1jKvMQYd3XM?si=8wLV41YLKhcxbnxd",
    },
    {
      id: 2,
      title: "Traditional Ceremony Highlights",
      thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://youtu.be/Eoxb5qM-pVI?si=Dy2XuvGEEkuFvukr",
    },
    {
      id: 3,
      title: "Sacred Chanting Moments",
      thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://youtu.be/hYCenRaD0qE?si=7g2DKKzXA7CVASBD",
    },
    {
      id: 4,
      title: "Festival Celebration 2025",
      thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://youtu.be/voL5OcB7e1w?si=wglhbXdfa-AcYr24",
    },
    {
      id: 5,
      title: "Festival Celebration 2025",
      thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://youtu.be/Ay0h5Cbouj8?si=dCgIPoYjX4BJLuH1",
    },
    {
      id: 6,
      title: "Festival Celebration 2025",
      thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg",
      url: "https://youtu.be/_aARY2ND_Gc?si=2Dn4rbbyUTM7d4Cr",
    },
  ];


  const getYouTubeID = (url) => {
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  return (
    <section className="py-16 bg-[var(--white-color)] text-[var(--gray-color)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-wide">
          Video Gallery
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Experience Our Moments
        </h1>
        <p className="text-sm md:text-base text-gray-500 mt-4 max-w-xl mx-auto">
          Watch highlights of our events, rituals, and creative performances
          captured beautifully.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {videos.map((video) => {
            const youtubeID = getYouTubeID(video.url);
            const src = youtubeID
              ? `https://www.youtube.com/embed/${youtubeID}`
              : video.url;

            return (
              <div
                key={video.id}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {youtubeID ? (
                  <iframe
                    width="560"
                    height="315"
                    src={src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-64 md:h-72 lg:h-80 rounded-lg"
                  />
                ) : (
                  <video
                    src={src}
                    controls
                    className="w-full h-64 md:h-72 lg:h-80 rounded-lg"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
