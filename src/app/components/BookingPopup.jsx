"use client";
import React, { useState } from 'react';

const pujaItems = [
  {
    item: "Kumkum (red vermilion powder)",
    suggestedQty: "25–50 gms",
    approxPrice: "₹30–110",
    notes: "Use for tilak, checks for purity (no grit)."
  },
  {
    item: "Halaï / Tummér powder",
    suggestedQty: "50–100 gms",
    approxPrice: "₹40–120",
    notes: "Use fresh, non-adulterated."
  },
  {
    item: "Chandan (sandal) powder / paste",
    suggestedQty: "10–25 gms",
    approxPrice: "₹50–150",
    notes: "Good for fragrance and cooling effect."
  },
  {
    item: "Campion (nappocam)",
    suggestedQty: "10–25 gms",
    approxPrice: "₹20–100",
    notes: "Pure camphor burns clean."
  },
  {
    item: "Incense sticks (agarbath)",
    suggestedQty: "1 packet (20–50 sticks)",
    approxPrice: "₹20–80",
    notes: "Choose natural fragrance, minimal smoke."
  },
  {
    item: "Ghee / clarified butter",
    suggestedQty: "100–250 ml",
    approxPrice: "₹50–200",
    notes: "Keep extra. Light the lamp (diya) with piece."
  },
  {
    item: "Rice (white raw)",
    suggestedQty: "100–250 gms",
    approxPrice: "₹10–30",
    notes: "Use as offering or 'akshata' (mixed rice)."
  },
  {
    item: "Akshata (rice mixed with turmeric)",
    suggestedQty: "50–100 gms",
    approxPrice: "₹20–50",
    notes: "Used for blessings."
  },
  {
    item: "Betel nuts (supari)",
    suggestedQty: "10–25 gms",
    approxPrice: "₹15–40",
    notes: "Common offering."
  },
  {
    item: "Dry coconut / copra",
    suggestedQty: "1–2 pieces",
    approxPrice: "₹20–50",
    notes: "Use in many ritual offerings."
  },
  {
    item: "Sugar or mishri (rock candy)",
    suggestedQty: "50–100 gms",
    approxPrice: "₹15–35",
    notes: "As prasadam / offering."
  },
  {
    item: "Cotton threads / mol (colored thread)",
    suggestedQty: "1–2 rolls",
    approxPrice: "₹10–30",
    notes: "For tying symbolic threads."
  },
  {
    item: "Ganga jal / holy water",
    suggestedQty: "100–200 ml",
    approxPrice: "₹20–60",
    notes: "Use in ritual sprinkling."
  },
  {
    item: "Small clay diyas or lamps",
    suggestedQty: "5–10 pieces",
    approxPrice: "₹15–45",
    notes: "Use during aarti, offerings."
  },
  {
    item: "Haldi roots / dried turmeric",
    suggestedQty: "50–100 gms",
    approxPrice: "₹30–80",
    notes: "For rituals / homam."
  },
  {
    item: "Cow dung / dung cakes / hawan wood",
    suggestedQty: "500 gms – 1 kg",
    approxPrice: "₹40–100",
    notes: "For home / fire rituals."
  },
  {
    item: "Hawan samagri mix (mixed herbs & woods)",
    suggestedQty: "100–250 gms",
    approxPrice: "₹50–120",
    notes: "Ready mix for the offerings."
  },
  {
    item: "Attar / herbal perfumed powders",
    suggestedQty: "10–25 ml",
    approxPrice: "₹100–250",
    notes: "Used as fragrance."
  },
  {
    item: "Gulal / colored powders",
    suggestedQty: "50–100 gms",
    approxPrice: "₹30–90",
    notes: "For festivals / decorative rituals."
  }
];

const BookingPopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("accommodation");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "standard",
    pujaType: "",
    pujaDate: "",
    specialRequests: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "1",
      roomType: "standard", pujaType: "", pujaDate: "", specialRequests: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Temple Services Booking</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
        </div>

        <div className="flex border-b border-gray-200">
          <button onClick={() => setActiveTab("accommodation")} 
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === "accommodation" ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]" : "text-gray-500"
            }`}>
            Book Accommodation
          </button>
          <button onClick={() => setActiveTab("puja")}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === "puja" ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]" : "text-gray-500"
            }`}>
            Book Puja
          </button>
        </div>


        <form onSubmit={handleSubmit} className="p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)]" />
            </div>
          </div>

          {activeTab === "accommodation" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div><label>Check-in Date *</label><input type="date" name="checkIn" value={formData.checkIn} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label>Check-out Date *</label><input type="date" name="checkOut" value={formData.checkOut} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label>Number of Guests *</label>
                <select name="guests" value={formData.guests} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <div><label>Room Type *</label>
                <select name="roomType" value={formData.roomType} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="premium">Premium Room</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "puja" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div><label>Puja Type *</label>
                <select name="pujaType" value={formData.pujaType} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option value="">Select Puja Type</option>
                  <option value="ganesh">Ganesh Puja</option>
                  <option value="laxmi">Laxmi Puja</option>
                  <option value="satyanaarayan">Satyanaarayan Katha</option>
                </select>
              </div>
              <div><label>Preferred Date *</label><input type="date" name="pujaDate" value={formData.pujaDate} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
            <textarea name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} rows="3" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--primary-color)]/90">
              Submit Booking Request
            </button>
          </div>
        </form>

   
        {activeTab === "puja" && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Puja Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-60 overflow-y-auto">
              {pujaItems.map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 text-sm">
                  <h4 className="font-medium text-gray-800 mb-1">{item.item}</h4>
                  <p className="text-xs text-gray-600"><strong>Qty:</strong> {item.suggestedQty}</p>
                  <p className="text-xs text-gray-600"><strong>Price:</strong> {item.approxPrice}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-xl max-w-md w-full p-6 mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Request Submitted!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your {activeTab} booking request. We will contact you shortly.
              </p>
              <button onClick={closeSuccessPopup} className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg font-medium">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPopup;