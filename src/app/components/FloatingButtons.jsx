"use client";
import React from "react";
import { FaCalendarCheck, FaHeart } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Book Now */}
      <button
        className="flex items-center gap-2 px-5 py-3 rounded-full shadow-md text-[var(--white-color)] font-semibold hover:opacity-90 transition-all duration-300"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <FaCalendarCheck className="text-lg" />
        <span>Book Now</span>
      </button>

      {/* Donate Now */}
      <button
        className="flex items-center gap-2 px-5 py-3 rounded-full shadow-md text-[var(--white-color)] font-semibold hover:opacity-90 transition-all duration-300"
        style={{ backgroundColor: "var(--gray-color)" }}
      >
        <FaHeart className="text-lg" />
        <span>Donate Now</span>
      </button>
    </div>
  );
}
