import React, { useEffect, useState } from "react";
import "./BreakingTicker.css";

function BreakingTicker() {
  const [index, setIndex] = useState(0);
  const news = [
    "India wins the Asia Cup 2025!",
    "Supreme Court announces verdict on data privacy case.",
    "Tech companies to invest $5B in AI projects.",
    "New EV policy boosts sustainable transport.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ticker">
      <span className="label">Breaking:</span>
      <span className="news">{news[index]}</span>
    </div>
  );
}

export default BreakingTicker;
