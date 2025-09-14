import React, { useState } from "react";
import ClubMap1 from "../../Assets/Maadi.png"; // فرع المعادي image
import ClubMap2 from "../../Assets/Maadi.png";  // فرع مدينة نصر image

// Custom ChevronLeft Icon Component
const ChevronLeft = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

// Custom ChevronRight Icon Component
const ChevronRight = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const branches = [
  {
    name: "فرع المعادي",
    image: ClubMap1,
    sports: [
      { icon: "🏀", color: "#7FE9C6" },
      { icon: "⚽", color: "#7FE9C6" },
      { icon: "🎾", color: "#7FE9C6" },
      { icon: "🏊", color: "#555" },
      { icon: "🎳", color: "#7FE9C6" },
    ],
  },
  {
    name: "فرع مدينة نصر",
    image: ClubMap2,
    sports: [
      { icon: "🏀", color: "#7FE9C6" },
      { icon: "⚽", color: "#7FE9C6" },
      { icon: "🎾", color: "#7FE9C6" },
    //   { icon: "🏊", color: "#7FE9C6" },
    //   { icon: "🎳", color: "#555" },
    ],
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? branches.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === branches.length - 1 ? 0 : prev + 1));
  };

  const currentBranch = branches[currentIndex];

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-white px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Image */}
        <div className="flex-1 flex justify-center">
          <img src={currentBranch.image} alt={currentBranch.name} className="max-h-[500px]" />
        </div>

        {/* Right - Details */}
        <div className="flex-1 text-center md:text-right mt-6 md:mt-0 space-y-6">
          
          {/* Title + Arrows */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <button onClick={prevSlide} className="p-2 hover:bg-buttonPorder hover:text-black rounded-full transition">
              <ChevronLeft size={28} />
            </button>
            <h2 className="text-4xl font-bold">{currentBranch.name}</h2>
            <button onClick={nextSlide} className="p-2 hover:bg-buttonPorder hover:text-black rounded-full transition">
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Sports Icons */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            {currentBranch.sports.map((sport, i) => (
              <span key={i} style={{ color: sport.color }} className="text-3xl">
                {sport.icon}
              </span>
            ))}
          </div>

          {/* Button */}
          <button className="border-2 border-buttonPorder px-8 py-3 rounded-lg hover:bg-[#2ecc71] hover:text-black transition text-xl">
            استكشف النادي
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
