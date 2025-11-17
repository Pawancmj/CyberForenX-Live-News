import React from "react";
import "./FeaturedSection.css";

function FeaturedSection({ darkMode }) {
  const featured = [
    {
      id: 1,
      title: "AI changing the world of journalism",
      image: "https://picsum.photos/400/250?random=1",
      link: "https://example.com/ai-journalism",
    },
    {
      id: 2,
      title: "Economic trends 2025: What experts say",
      image: "https://picsum.photos/400/250?random=2",
      link: "https://example.com/economy-2025",
    },
    {
      id: 3,
      title: "Cybersecurity updates for modern world",
      image: "https://picsum.photos/400/250?random=3",
      link: "https://example.com/cybersecurity",
    },
    {
      id: 4,
      title: "Environment goals for a sustainable future",
      image: "https://picsum.photos/400/250?random=4",
      link: "https://example.com/environment",
    },
  ];

  return (
    <div className={`featured ${darkMode ? "dark" : ""}`}>
      <h2>🌟 Featured Stories</h2>
      <div className="featured-grid">
        {featured.map((item) => (
          <div key={item.id} className="featured-card">
            <img src={item.image} alt={item.title} />
            <div className="featured-content">
              <h4>{item.title}</h4>
              <button
                className="read-btn"
                onClick={() => window.open(item.link, "_blank")}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
