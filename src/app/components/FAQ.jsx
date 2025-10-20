"use client";
import React from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqsData = [
    {
      question: "How can I book a puja or temple visit?",
      answer:
        "You can easily book a puja, donation, or temple visit through our online booking system. Just click on the 'Book Now' button at the top of the page.",
    },
    {
      question: "Is online donation safe and secure?",
      answer:
        "Yes, all donations made through our website are fully secured and encrypted. We never store your payment details.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can contact our administration team for any booking changes or cancellations. We will do our best to assist you promptly.",
    },
    {
      question: "How can I reach Borbheti Temple?",
      answer:
        "The temple is located at Borbheta, Jorhat. You can find us on Google Maps or use our location link in the header section for easy navigation.",
    },
    {
      question: "Is there any accommodation available near the temple?",
      answer:
        "Yes, there are nearby guest houses and dharamshalas available for devotees. You can contact our support team for more details.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-[var(--white-color)] text-[var(--gray-color)]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* -------- LEFT SIDE CONTENT -------- */}
          <div className="flex flex-col items-start text-left">
            <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-wide">
              Have Questions?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 leading-snug">
              We're Here to Help You
            </h2>
            <p className="text-gray-500 mt-4 max-w-md">
              Whether you want to book a puja, make a donation, or learn more
              about Borbheti Temple, here are some common questions our visitors
              often ask.
            </p>


            <img
              src="https://www.maakamakhya.org/assets/images/ma_kama.jpg"
              alt="Temple View"
              className="rounded-2xl mt-6 shadow-lg w-full object-cover max-h-[280px]"
            />
          </div>

          {/* -------- RIGHT SIDE FAQ -------- */}
          <div className="flex flex-col items-start text-left">
            <p className="text-sm text-[var(--primary-color)] font-medium uppercase tracking-wide">
              FAQ
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-sm md:text-base text-gray-500 mt-4 max-w-md">
              Get all your questions answered about bookings, donations, and
              temple services.
            </p>

            {/* FAQ Items */}
            <div className="w-full mt-8 flex flex-col gap-4">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border border-[var(--primary-color-op-b)] bg-[var(--white-color)] shadow-sm hover:shadow-md rounded-lg transition-all"
                >
                  <div
                    className="flex items-center justify-between w-full cursor-pointer p-4"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <h2 className="text-[17px] font-medium text-gray-800">
                      {faq.question}
                    </h2>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openIndex === index ? "rotate-180" : ""
                      } transition-transform duration-500 ease-in-out`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="#1D293D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[15px] text-gray-600 px-4 pb-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;