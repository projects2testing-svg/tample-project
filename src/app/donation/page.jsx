"use client";
import React, { useState } from "react";
import { FaHeart } from "../../../public/assets/image.png";

const donationOptions = [
  { meals: "10", amount: "500", type: "Kartavya Seva" },
  { meals: "20", amount: "1000", type: "Kartavya Seva" },
  { meals: "30", amount: "1500", type: "Kartavya Seva" },
  { meals: "40", amount: "2000", type: "Kartavya Seva" },
  { meals: "60", amount: "3000", type: "Kartavya Seva" },
  { meals: "80", amount: "4000", type: "Kartavya Seva" },
];

// Bank account details
const bankDetails = {
  bankName: "State Bank of India",
  accountName: "Shree Temple Trust",
  accountNumber: "12345678901",
  ifscCode: "SBIN0001234",
  branch: "Main Branch, City Name"
};

// UPI details
const upiDetails = {
  upiId: "templetrust@oksbi",
  qrCode: "../../../assets/image.png"
};

export default function DonationPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    anonymous: false
  });

  const handleDonationClick = (donation) => {
    setSelectedDonation(donation);
    setShowPopup(true);
    setSelectedPayment("");
    setShowPaymentDetails(false);
  };

  const handleCustomDonation = () => {
    if (!customAmount || customAmount < 10) {
      alert("Please enter a valid amount (minimum ₹10)");
      return;
    }
    handleDonationClick({
      meals: "Custom Meals",
      amount: customAmount,
      type: "Kartavya Seva"
    });
    setCustomAmount("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    
    const successMessage = `✅ Thank you ${donorInfo.anonymous ? "Anonymous Donor" : donorInfo.name || "Donor"}! Your ₹${selectedDonation.amount} donation has been recorded. We'll contact you soon.`;
    
    alert(successMessage);
    setShowPopup(false);
    setSelectedDonation(null);
    setDonorInfo({ name: "", email: "", phone: "", message: "", anonymous: false });
    setSelectedPayment("");
    setShowPaymentDetails(false);
  };

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI Payment",
      icon: "",
      desc: "Instant payment using UPI apps",
      details: upiDetails
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: "",
      desc: "Direct transfer to temple account",
      details: bankDetails
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-8 md:py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[var(--primary-color)] uppercase tracking-widest font-semibold text-xs md:text-sm mb-2">
            🙏 Support Our Mission
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Donate Meals, Spread Blessings
          </h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Each meal you donate brings comfort and hope. Join our{" "}
            <span className="font-semibold text-[var(--primary-color)]">
              Kartavya Seva
            </span>{" "}
            to make a difference today.
          </p>
        </div>


                {/* Custom Amount & Additional Features */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
              💫 Custom Donation
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Enter amount in ₹"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  min="10"
                />
                <button
                  onClick={handleCustomDonation}
                  className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-color)]/90 transition-colors whitespace-nowrap"
                >
                  Donate
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Minimum donation: ₹10
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
              ⚡ Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => handleDonationClick({ meals: "Monthly Donation", amount: "1000", type: "Recurring Seva" })}
                className="p-3 border-2 border-[var(--primary-color)]/20 rounded-lg text-center hover:bg-[var(--primary-color)]/5 transition-colors"
              >
                <div className="text-xl font-medium text-gray-700">Monthly</div>
                <div className="text-[var(--primary-color)] font-bold">₹1000</div>
              </button>
              <button 
                onClick={() => handleDonationClick({ meals: "Special Occasion", amount: "5100", type: "Festival Seva" })}
                className="p-3 border-2 border-[var(--primary-color)]/20 rounded-lg text-center hover:bg-[var(--primary-color)]/5 transition-colors"
              >
                <div className="text-xl font-medium text-gray-700">Festival</div>
                <div className="text-[var(--primary-color)] font-bold">₹5100</div>
              </button>
            </div>
          </div>
        </div>



        {/* Donation Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          {/* Table Header */}
          <div className="bg-[var(--primary-color)] text-white p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-center">
              🍛 Meal Donation Options
            </h2>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {donationOptions.map((donation, index) => (
              <div 
                key={index}
                className="p-4 md:p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleDonationClick(donation)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🍛</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                          Donate {donation.meals} Meals
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></span>
                          {donation.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg md:text-2xl font-bold text-[var(--primary-color)]">
                        ₹{donation.amount}
                      </p>
                    </div>
                    <button className="bg-[var(--primary-color)] text-white px-4 cursor-pointer md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[var(--primary-color)]/90 transition-all text-sm md:text-base whitespace-nowrap">
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-[var(--primary-color)] text-white p-6 text-center top-0">
              <h2 className="text-xl md:text-2xl font-bold">Complete Your Donation</h2>
              {selectedDonation && (
                <div className="mt-2">
                  <p className="text-base md:text-lg">{selectedDonation.meals}</p>
                  <p className="text-xl md:text-2xl font-bold">
                    ₹{selectedDonation.amount}
                  </p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Donor Information */}
              <div>
                <div className="space-y-4">
                 <div className="bg-white border-2 border-gray-200 rounded-xl p-5 transition-all duration-200 hover:border-[var(--primary-color)]/50">
                    <label className="flex items-center space-x-4 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="anonymous"
                          name="anonymous"
                          checked={donorInfo.anonymous}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-12 h-6 rounded-full transition-all duration-300 ${
                          donorInfo.anonymous 
                            ? 'bg-[var(--primary-color)]' 
                            : 'bg-gray-300 group-hover:bg-gray-400'
                        }`}>
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                            donorInfo.anonymous ? 'left-7' : 'left-1'
                          }`} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">👤</span>
                          <div>
                            <span className={`font-semibold transition-colors duration-200 ${
                              donorInfo.anonymous ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              Anonymous Donation
                            </span>
                            <p className="text-sm text-gray-500 mt-0.5">
                              {donorInfo.anonymous ? 'Your identity will be hidden' : 'Your name will be visible'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                  {!donorInfo.anonymous && (
                    <>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={donorInfo.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                        required={!donorInfo.anonymous}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={donorInfo.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                        required={!donorInfo.anonymous}
                      />
                    </>
                  )}
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={donorInfo.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Blessings or special instructions (optional)"
                    value={donorInfo.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Choose Payment Method
                </h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div key={method.id}>
                      <label
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedPayment === method.id
                            ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={(e) => {
                            setSelectedPayment(e.target.value);
                            setShowPaymentDetails(true);
                          }}
                          className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                          required
                        />
                        <span className="ml-3 text-2xl">{method.icon}</span>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-900">{method.name}</p>
                          <p className="text-sm text-gray-500">{method.desc}</p>
                        </div>
                      </label>

                      {/* Payment Details */}
                      {selectedPayment === method.id && showPaymentDetails && (
                        <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fadeIn">
                          {method.id === "upi" && (
                            <div className="text-center">
                              <p className="font-semibold mb-2">Scan QR Code or Use UPI ID</p>
                              <div className="bg-white p-4 rounded-lg border-2 border-dashed border-[var(--primary-color)]/30 mb-3">
                                {/* Replace with your actual QR code */}
                                <div className="w-48 h-48 mx-auto bg-gray-200 flex items-center justify-center mb-3">
                                  <img src={method.details.qrCode} alt="" srcset="" />
                                </div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                  <span className="font-mono bg-[var(--primary-color)] px-3 py-1 rounded border text-white">
                                    {method.details.upiId}
                                  </span>
                                  <button 
                                    onClick={() => copyToClipboard(method.details.upiId)}
                                    className="bg-[var(--primary-color)] text-white px-3 py-1 rounded text-sm cursor-pointer"
                                  >
                                    Copy
                                  </button>
                                </div>
                              </div>
                              <p className="text-xs text-gray-600">
                                Use any UPI app to scan and pay
                              </p>
                            </div>
                          )}

                          {method.id === "bank" && (
                            <div className="space-y-3">
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="font-semibold">Bank:</div>
                                <div>{method.details.bankName}</div>
                                
                                <div className="font-semibold">Account Name:</div>
                                <div>{method.details.accountName}</div>
                                
                                <div className="font-semibold">Account Number:</div>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono">{method.details.accountNumber}</span>
                                  <button 
                                    onClick={() => copyToClipboard(method.details.accountNumber)}
                                    className="text-[var(--primary-color)] text-xs cursor-pointer"
                                  >
                                    Copy
                                  </button>
                                </div>
                                
                                <div className="font-semibold">IFSC Code:</div>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono">{method.details.ifscCode}</span>
                                  <button 
                                    onClick={() => copyToClipboard(method.details.ifscCode)}
                                    className="text-[var(--primary-color)] text-xs cursor-pointer"
                                  >
                                    Copy
                                  </button>
                                </div>
                                
                                <div className="font-semibold">Branch:</div>
                                <div>{method.details.branch}</div>
                              </div>
                              <p className="text-xs text-gray-600 mt-2">
                                After transfer, please share screenshot for confirmation
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 py-3 border rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[var(--primary-color)] text-white rounded-lg font-semibold hover:bg-[var(--primary-color)]/90 transition-all"
                >
                  Confirm Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}