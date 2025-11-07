"use client";
import React, { useState, useEffect } from "react";
import HeaderSlider from "../components/HeaderSlider";

// Fallback data
const fallbackTeamMembers = [
  {
    id: 1,
    name: "Mr. Nabin Chandra Patra",
    title: "Chief Priest",
    role: "Puja",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.45.21_8d17664b.jpg",
    email: "nabin.patra@temple.com",
    whatsapp: "+911234567890",
  },
  {
    id: 2,
    name: "Smt. Laxmi Devi",
    title: "Assistant Priest",
    role: "Puja",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.45.54_118be9b1.jpg",
    email: "laxmi.devi@temple.com",
    whatsapp: "+911234567891",
  },
  {
    id: 3,
    name: "Sri Keshav Nath",
    title: "Operations Head",
    role: "Committee",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.46.22_0b79d41f.jpg",
    email: "keshav.nath@temple.com",
    whatsapp: "+911234567892",
  },
  {
    id: 4,
    name: "Smt. Anjali Bora",
    title: "Event Coordinator",
    role: "Committee",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.47.10_99f70ea4.jpg",
    email: "anjali.bora@temple.com",
    whatsapp: "+911234567893",
  },
  {
    id: 5,
    name: "Mr. Rajesh Kumar",
    title: "Volunteer",
    role: "Others",
    img: "../../../assets/WhatsApp Image 2025-10-21 at 16.48.00_abc123.jpg",
    email: "rajesh.kumar@temple.com",
    whatsapp: "+911234567894",
  },
  {
    id: 6,
    name: "Smt. Priya Sharma",
    title: "Treasurer",
    role: "Committee",
    img: "../../../assets/priya-sharma.jpg",
    email: "priya.sharma@temple.com",
    whatsapp: "+911234567895",
  },
  {
    id: 7,
    name: "Mr. Amit Singh",
    title: "Assistant Priest",
    role: "Puja",
    img: "../../../assets/amit-singh.jpg",
    email: "amit.singh@temple.com",
    whatsapp: "+911234567896",
  },
  {
    id: 8,
    name: "Smt. Geeta Patel",
    title: "Volunteer Coordinator",
    role: "Others",
    img: "../../../assets/geeta-patel.jpg",
    email: "geeta.patel@temple.com",
    whatsapp: "+911234567897",
  },
  {
    id: 9,
    name: "Smt. Geeta Patel",
    title: "Volunteer Coordinator",
    role: "Others",
    img: "../../../assets/geeta-patel.jpg",
    email: "geeta.patel@temple.com",
    whatsapp: "+911234567897",
  },
  {
    id: 10,
    name: "Smt. Geeta Patel",
    title: "Volunteer Coordinator",
    role: "Others",
    img: "../../../assets/geeta-patel.jpg",
    email: "geeta.patel@temple.com",
    whatsapp: "+911234567897",
  },
];

// API service
const teamMemberAPI = {
  async getTeamMembers() {
    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await fetch('/api/team-members', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error:', error);
      return fallbackTeamMembers;
    }
  }
};

export default function Administration() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 8;

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const members = await teamMemberAPI.getTeamMembers();
      setTeamMembers(members);
    } catch (err) {
      setError("Failed to load team members. Using fallback data.");
      setTeamMembers(fallbackTeamMembers);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, "_blank");
  };

  const handleWhatsAppClick = (phone) => {
    const message = "Hello, I would like to get more information about temple services.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


  const pujaMembers = teamMembers.filter(member => member.role === "Puja");
  const committeeMembers = teamMembers.filter(member => member.role === "Committee");
  const otherMembers = teamMembers.filter(member => member.role === "Others");

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "puja") return matchesSearch && member.role === "Puja";
    if (activeTab === "committee") return matchesSearch && member.role === "Committee";
    if (activeTab === "others") return matchesSearch && member.role === "Others";
    
    return matchesSearch;
  });



  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

  const tabs = [
    { id: "all", label: "All Members", count: teamMembers.length },
    { id: "puja", label: "Puja Committee", count: pujaMembers.length },
    { id: "committee", label: "Management Committee", count: committeeMembers.length },
    { id: "others", label: "Others", count: otherMembers.length },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case "Puja": return "bg-[var(--primary-color)]/10 text-[var(--primary-color)] border-[var(--primary-color)]/20";
      case "Committee": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Others": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }


    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Previous</span>
      </button>
    );


    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-2 py-2 text-gray-500">
            ...
          </span>
        );
      }
    }


    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 rounded-lg border transition-all duration-200 ${
            currentPage === i
              ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          {i}
        </button>
      );
    }


    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-2 py-2 text-gray-500">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200"
        >
          {totalPages}
        </button>
      );
    }


    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-1"
      >
        <span className="hidden sm:inline">Next</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );

    return pages;
  };

  if (loading) {
    return (
      <section className="py-8 md:py-16 bg-[var(--white-color)] text-[var(--gray-color)] container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading team members...</p>
        </div>
      </section>
    );
  }

  return (
    <>
    <HeaderSlider />
    <section className="py-8 md:py-16 bg-[var(--white-color)] text-[var(--gray-color)] container mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-xs sm:text-sm text-[var(--primary-color)] font-medium uppercase tracking-widest">
          Administration
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 px-2">
          Meet Our Temple Administration Team
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-3 max-w-xl mx-auto px-2">
          Our dedicated administration team ensures smooth temple management,
          transparency, and a seamless experience for all devotees.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-center">
          {error}
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, title, or role..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-3 pl-12 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] text-sm transition-all duration-200"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 border cursor-pointer flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)] shadow-lg transform scale-105"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:shadow-md"
              }`}
            >
              {tab.label}
              <span className={`px-2 py-1 rounded-full text-xs min-w-6 ${
                activeTab === tab.id ? "bg-white/20" : "bg-gray-100"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-600">
          Showing {paginatedMembers.length} of {filteredMembers.length} members
          {searchTerm && ` for "${searchTerm}"`}
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {paginatedMembers.map((member) => (
          <div
            key={member.id}
            className="group text-sm text-gray-500 w-full border border-gray-200 rounded-2xl bg-white shadow-sm transition-all duration-300 transform "
          >
            {/* Member Info Section */}
            <div className="flex flex-col items-center py-6 sm:py-8 px-4">
              <div className="relative">
                <img
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-[var(--primary-color)] transition-all duration-300"
                  src={member.img}
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff&size=128`;
                  }}
                />
              </div>
              <h2 className="text-base sm:text-lg text-gray-800 mt-4 font-semibold text-center leading-tight">
                {member.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-1">{member.title}</p>
              <p className={`px-3 py-1 rounded-full mt-3 text-xs font-medium border ${getRoleColor(member.role)}`}>
                {member.role}
              </p>
            </div>


            <div className="flex items-center border-t border-gray-100">
              <button
                onClick={() => handleEmailClick(member.email)}
                className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 group/email text-gray-600 hover:text-[var(--primary-color)] border-r border-gray-100"
              >
                <div className="p-2 rounded-full bg-gray-100 group-hover/email:bg-[var(--primary-color)]/10 transition-colors duration-200">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover/email:text-[var(--primary-color)] transition-colors duration-200"
                  >
                    <path
                      d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Email</span>
              </button>
              <button
                onClick={() => handleWhatsAppClick(member.whatsapp)}
                className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 group/whatsapp text-gray-600 hover:text-green-600"
              >
                <div className="p-2 rounded-full bg-gray-100 group-hover/whatsapp:bg-green-100 transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 group-hover/whatsapp:text-green-600 transition-colors duration-200"
                  >
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 .02 5.35.02 12a11.87 11.87 0 0 0 1.68 6.03L0 24l6.18-1.62A11.86 11.86 0 0 0 12 24c6.63 0 12-5.35 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.82 9.82 0 0 1-5.01-1.36l-.36-.21-3.67.97.98-3.57-.23-.37A9.85 9.85 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.03 2.91A9.9 9.9 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.48-7.73c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.25-.6-.5-.52-.67-.53H6.7c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {paginatedMembers.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No members found</h3>
          <p className="text-sm text-gray-500 mb-4">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveTab("all");
              setCurrentPage(1);
            }}
            className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]/90 transition-colors duration-200"
          >
            Clear Filters
          </button>
        </div>
      )}


      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {renderPagination()}
        </div>
      )}
    </section>
    </>
  );
}