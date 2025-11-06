import React, { useState, useEffect, useRef, useCallback } from "react";
import "./CategoryCards.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryCards() {
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

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // ✅ Wrap handleNext in useCallback (Fixes warning)
  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % categories.length);
  }, [categories.length]);

  const handlePrev = useCallback(() => {
    setIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  }, [categories.length]);

  // ✅ Auto-slide logic (no warning now)
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, handleNext]);

  // ✅ Duplicate cards for smooth infinite looping
  const extendedCategories = [...categories, ...categories.slice(0, 4)];

  return (
    <div
      className="category-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="nav-btn left" onClick={handlePrev}>
        <ChevronLeft />
      </button>

      <div
        className="slider-track smooth"
        style={{
          transform: `translateX(-${index * 25}%)`,
        }}
      >
        {extendedCategories.map((cat, i) => (
          <Link
            key={i}
            to={`/${cat.toLowerCase()}`}
            className="card"
          >
            <h3>{cat}</h3>
            <p>Latest {cat.toLowerCase()} news and stories. Read More...</p>
          </Link>
        ))}
      </div>

      <button className="nav-btn right" onClick={handleNext}>
        <ChevronRight />
      </button>
    </div>
  );
}
