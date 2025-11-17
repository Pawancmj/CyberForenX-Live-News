import React, { useState, useEffect, useRef } from "react";
import "./CategoryCards.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Icons import
import {
  Newspaper,
  Globe,
  Trophy,
  Monitor,
  Briefcase,
  HeartPulse,
  Landmark,
  Clapperboard,
  Palette,
  Leaf,
} from "lucide-react";

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

  // Matching icons
  const icons = {
    National: <Newspaper size={32} />,
    International: <Globe size={32} />,
    Sports: <Trophy size={32} />,
    Technology: <Monitor size={32} />,
    Business: <Briefcase size={32} />,
    Health: <HeartPulse size={32} />,
    Politics: <Landmark size={32} />,
    Entertainment: <Clapperboard size={32} />,
    Lifestyle: <Palette size={32} />,
    Environment: <Leaf size={32} />,
  };

  // Color for each category card
  const colors = {
    National: "#4a90e2",
    International: "#50c878",
    Sports: "#f5a623",
    Technology: "#9b59b6",
    Business: "#2ecc71",
    Health: "#e74c3c",
    Politics: "#e67e22",
    Entertainment: "#16a085",
    Lifestyle: "#f39c12",
    Environment: "#27ae60",
  };

  // 4 cards per view
  const cardsPerView = 4;

  // Infinite loop → repeat 3 times
  const looped = [...categories, ...categories, ...categories];

  // Start in the middle section
  const [index, setIndex] = useState(categories.length);
  const [isAnimating, setIsAnimating] = useState(true);
  const [hover, setHover] = useState(false);

  const intervalRef = useRef(null);

  // Auto slide
  useEffect(() => {
    if (!hover) {
      intervalRef.current = setInterval(() => {
        next();
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [hover]);

  const next = () => {
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  // Infinite loop logic
  const onTransitionEnd = () => {
    const total = looped.length;

    if (index >= total - cardsPerView) {
      setIsAnimating(false);
      setIndex(categories.length);
    }
    if (index <= 0) {
      setIsAnimating(false);
      setIndex(total - categories.length);
    }
  };

  return (
    <div
      className="category-slider"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className="nav-btn left" onClick={prev}>
        <ChevronLeft />
      </button>

      <div
        className={`slider-track ${isAnimating ? "smooth" : ""}`}
        style={{
          transform: `translateX(-${(index * 100) / cardsPerView}%)`,
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {looped.map((cat, i) => (
          <div
            key={i}
            className="card"
            style={{
              borderTop: `4px solid ${colors[cat]}`,
            }}
          >
            <div className="icon">{icons[cat]}</div>
            <h3>{cat}</h3>

            <p>Latest {cat.toLowerCase()} news and stories.</p>

            <Link to={`/${cat.toLowerCase()}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <button className="nav-btn right" onClick={next}>
        <ChevronRight />
      </button>
    </div>
  );
}


