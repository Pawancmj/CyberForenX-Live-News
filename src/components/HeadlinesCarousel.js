import React, { useState, useEffect } from "react";
import "./HeadlinesCarousel.css";

function HeadlinesCarousel() {
  const slides = [
    { title: "Global Summit 2025 Begins", image: "https://picsum.photos/900/400?1" },
    { title: "AI Revolution in Education", image: "https://picsum.photos/900/400?2" },
    { title: "Sports Fever: India vs Australia", image: "https://picsum.photos/900/400?3" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={slides[index].image} alt="headline" />
      <div className="caption">{slides[index].title}</div>
    </div>
  );
}

export default HeadlinesCarousel;
