import React, { useEffect, useState, useRef } from "react";
import "./CategoryCards.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CategoryCards() {
  const categories = [
    "National",
    "International",
    "Sports",
    "Technology",
    "Business",
    "Health",
    "Politics",
    "Entertainment",
    "Lifestyle",
    "Environment",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  // Calculate 5 visible cards
  const visibleCards = [];
  for (let i = 0; i < 5; i++) {
    visibleCards.push(categories[(startIndex + i) % categories.length]);
  }

  return (
    <div
      className="category-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="nav-btn left" onClick={handlePrev}>
        <ChevronLeft />
      </button>

      <div className="slider-track">
        {visibleCards.map((cat, i) => (
          <div key={i} className="category-card">
            <h3>{cat}</h3>
            <p>Latest {cat.toLowerCase()} news and stories. Read More...</p>
          </div>
        ))}
      </div>

      <button className="nav-btn right" onClick={handleNext}>
        <ChevronRight />
      </button>
    </div>
  );
}

export default CategoryCards;

