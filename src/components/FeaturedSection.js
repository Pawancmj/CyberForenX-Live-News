import React from "react";
import "./FeaturedSection.css";

function FeaturedSection() {
  const featured = [
    {
      title: "AI changing the world of journalism",
      image: "https://picsum.photos/300/200?4",
    },
    {
      title: "Economic trends 2025: What experts say",
      image: "https://picsum.photos/300/200?5",
    },
  ];

  return (
    <div className="featured">
      <h2>Featured Stories</h2>
      <div className="featured-grid">
        {featured.map((item, i) => (
          <div key={i} className="featured-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
