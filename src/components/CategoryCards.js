import React, { useEffect, useState } from "react";
import "./CategoryCards.css";

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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // slide next cards
      setIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [categories.length]);

  // make an extended array so it wraps smoothly
  const visibleCategories = [
    ...categories,
    ...categories.slice(0, 5),
  ];

  return (
    <div className="category-slider">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 20}%)`,
        }}
      >
        {visibleCategories.map((cat, i) => (
          <div key={i} className="card">
            <h3>{cat}</h3>
            <p>
              Latest {cat.toLowerCase()} news and stories. Read More...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;

