'use client';
import React from 'react';

const programData = {
  MORNING: [
    { time: "5:30 AM", activity: "Snana of the Pithasthana." },
    { time: "6:00 AM", activity: "Nitya puja." },
    { time: "8:00 AM", activity: "Temple door open for devotees." },
  ],
  EVENING: [
    { time: "1:00 PM", activity: "Temple door closed for cooked offerings to the goddess followed by distribution among the devotees." },
    { time: "2:30 PM", activity: "Temple door reopens for the devotees." },
    { time: "5:15 PM", activity: "Closing of the temple door for the night." },
    { time: "7:30 PM", activity: "Aarati of Goddess." },
  ],
  SPECIAL: [
    { time: "5:30 AM", activity: "Snana of the Pithasthana." },
    { time: "6:00 AM", activity: "Nitya puja & Saradiya Durga Puja." },
    { time: "9:00 AM", activity: "Temple door open for devotees." },
    { time: "1:00 PM", activity: "Temple door closed for cooked offerings to the goddess followed by distribution among the devotees. Closing of the temple door at sunset." },
    { time: "7:30 PM", activity: "Aarati of Goddess." },
  ]
};

const ProgramSchedule = () => {
  return (
    <section className="py-16 bg-white text-gray-800 container mx-auto px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Our Program Schedule</h2>
        <p className="mt-2 text-gray-600">Daily temple timings and special events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Morning */}
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4 text-center">Morning</h3>
          <ul className="space-y-3">
            {programData.MORNING.map((item, i) => (
              <li key={i} className="flex justify-between border-b pb-2 gap-4 last:border-b-0">
                <span className="font-medium">{item.time}</span>
                <span className="text-gray-600">{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Evening */}
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4 text-center">Evening</h3>
          <ul className="space-y-3">
            {programData.EVENING.map((item, i) => (
              <li key={i} className="flex justify-between border-b pb-2 last:border-b-0 gap-4">
                <span className="font-medium">{item.time}</span>
                <span className="text-gray-600">{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Special */}
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4 text-center">Special</h3>
          <ul className="space-y-3">
            {programData.SPECIAL.map((item, i) => (
              <li key={i} className="flex flex-col md:flex-row justify-between border-b pb-2 last:border-b-0 gap-4">
                <span className="font-medium">{item.time}</span>
                <span className="text-gray-600">{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
