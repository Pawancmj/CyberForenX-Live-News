import React from "react";
import "./Trending.css";

export default function Trending() {
  const trendingNews = [
    {
      id: 1,
      title: "AI Revolutionizes Cybersecurity in 2025",
      description:
        "Artificial Intelligence tools are reshaping how digital threats are detected and neutralized worldwide.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1000&q=80",
      category: "Technology",
    },
    {
      id: 2,
      title: "India Wins ICC Championship After 12 Years",
      description:
        "Team India creates history with a thrilling final victory, sparking celebrations across the nation.",
      image:
        "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1000&q=80",
      category: "Sports",
    },
    {
      id: 3,
      title: "Global Markets Surge Amid Economic Recovery",
      description:
        "Stock markets across the globe see massive growth as inflation eases and tech stocks rally.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
      category: "Business",
    },
    {
      id: 4,
      title: "New Climate Policy Aims for Carbon Neutrality by 2040",
      description:
        "Countries unite to tackle global warming through ambitious emission reduction strategies.",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764b43?auto=format&fit=crop&w=1000&q=80",
      category: "Environment",
    },
  ];

  return (
    <div className="trending-page">
      <h1>🔥 Trending News</h1>
      <p>Stay updated with the hottest stories making waves across the world.</p>

      <div className="trending-grid">
        {trendingNews.map((news) => (
          <div key={news.id} className="trending-card">
            <img src={news.image} alt={news.title} className="card-img" />
            <div className="card-content">
              <span className="category">{news.category}</span>
              <h2>{news.title}</h2>
              <p>{news.description}</p>
              <button className="read-btn">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

