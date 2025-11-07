"use client";
import React, { useState, useEffect } from "react";
import { GoVideo } from "react-icons/go";
import HeaderSlider from "../components/HeaderSlider";

export default function HighlightsPage() {
  const [currentImagePage, setCurrentImagePage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const itemsPerPage = 6;

  const imageData = [
    { id: 1, src: "https://res.cloudinary.com/dnkgyxlde/image/upload/v1762187294/borbheti/sm5ufo69atqtkkcqzrap.png", title: "Peaceful Morning Vibes" },
    { id: 2, src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", title: "Temple Interior Glow" },
    { id: 3, src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", title: "Divine Architecture" },
    { id: 4, src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", title: "Evening Rituals" },
    { id: 5, src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", title: "Sacred Lamps" },
    { id: 6, src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", title: "Traditional Ceremony" },
    { id: 7, src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", title: "Festival Celebration" },
    { id: 8, src: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", title: "Spiritual Gathering" },
  ];

  const videoData = [
    { id: 1, title: "Temple Morning Rituals", thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", url: "https://static.vecteezy.com/system/resources/previews/014/927/511/mp4/soap-bubbles-floating-in-the-air-with-natural-green-blurred-bokeh-background-for-children-and-kids-in-the-park-free-video.mp4" },
    { id: 2, title: "Traditional Ceremony Highlights", thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", url: "https://static.vecteezy.com/system/resources/previews/014/927/511/mp4/soap-bubbles-floating-in-the-air-with-natural-green-blurred-bokeh-background-for-children-and-kids-in-the-park-free-video.mp4" },
    { id: 3, title: "Sacred Chanting Moments", thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", url: "https://static.vecteezy.com/system/resources/previews/014/927/511/mp4/soap-bubbles-floating-in-the-air-with-natural-green-blurred-bokeh-background-for-children-and-kids-in-the-park-free-video.mp4" },
    { id: 4, title: "Festival Celebration 2025", thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", url: "https://www.youtube.com/watch?v=CkqVlK2UqfQ" },
    { id: 5, title: "Cultural Performance", thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", url: "https://youtu.be/CkqVlK2UqfQ" },
    { id: 6, title: "Devotional Songs", thumbnail: "https://www.maakamakhya.org/assets/images/ma_kama.jpg", url: "https://www.youtube.com/embed/CkqVlK2UqfQ" },
  ];

  const getYouTubeID = (url) => {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const paginate = (data, page) => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  };

  const totalImagePages = Math.ceil(imageData.length / itemsPerPage);
  const totalVideoPages = Math.ceil(videoData.length / itemsPerPage);

  return (
    <>
      <HeaderSlider />

      {/* Image Section */}
      <section className="py-16 bg-white text-gray-700">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-wide">Gallery</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Our Images</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {paginate(imageData, currentImagePage).map(img => (
              <div key={img.id} className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 text-white">
                  <h2 className="text-lg font-semibold">{img.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Image Pagination */}
          {totalImagePages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              {Array.from({ length: totalImagePages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentImagePage(page)}
                  className={`px-4 py-2 text-sm font-medium border rounded-lg ${
                    currentImagePage === page
                      ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
                      : "text-gray-500 bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 text-gray-700">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-wide">Videos</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Our Videos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {paginate(videoData, currentVideoPage).map(video => (
              <div key={video.id} className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                {getYouTubeID(video.url) ? (
                  <iframe
                    width="100%"
                    height="256"
                    src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-64 rounded-lg"
                  />
                ) : (
                  <video src={video.url} controls className="w-full h-64 rounded-lg object-cover" poster={video.thumbnail} />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Video Pagination */}
          {totalVideoPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              {Array.from({ length: totalVideoPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentVideoPage(page)}
                  className={`px-4 py-2 text-sm font-medium border rounded-lg ${
                    currentVideoPage === page
                      ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
                      : "text-gray-500 bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
