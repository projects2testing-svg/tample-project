"use client";
import Link from "next/link";
import React from "react";
import { FaCalendarCheck, FaHeart } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <Link href="/donation"
        className="flex items-center gap-2 px-5 py-3 rounded-full shadow-md text-[var(--white-color)] font-semibold hover:opacity-90 transition-all duration-300"
        style={{ backgroundColor: "var(--gray-color)" }}
      >
        <FaHeart className="text-lg" />
        <span>Donate</span>
      </Link>
    </div>
  );
}
