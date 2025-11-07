import React from "react";
import "./CategoryPage.css"; 
import { useNavigate } from "react-router-dom";

export default function Sports() {
  const navigate = useNavigate();

  const sportsSections = [
    {
      title: "Cricket",
      banner: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80",
      articles: [
        {
          id: 1,
          title: "India Defeats Australia in T20 Thriller",
          desc: "A breathtaking final over helped India clinch victory in a high-voltage T20 match.",
          img: "https://images.unsplash.com/photo-1566576912240-e00e7aa9123a?auto=format&fit=crop&w=800&q=80",
          likes: Math.floor(Math.random() * 500) + 100,
        },
        {
          id: 2,
          title: "IPL 2025 Auction Updates",
          desc: "Teams make shocking signings as the IPL 2025 auction unfolds in Dubai.",
          img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
          likes: Math.floor(Math.random() * 500) + 100,
        },
      ],
    },
    {
      title: "Football",
      banner: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80",
      articles: [
        {
          id: 3,
          title: "Champions League Final: Real Madrid vs Man City",
          desc: "A nail-biting final between two European giants ended with a late winner.",
          img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
          likes: Math.floor(Math.random() * 500) + 100,
        },
        {
          id: 4,
          title: "Messi’s Magic Continues in MLS",
          desc: "Lionel Messi scores a hat-trick as Inter Miami extend their unbeaten run.",
          img: "https://images.unsplash.com/photo-1607860108855-3d6f3e6b2b19?auto=format&fit=crop&w=800&q=80",
          likes: Math.floor(Math.random() * 500) + 100,
        },
      ],
    },
    {
      title: "Tennis",
      banner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80",
      articles: [
        {
          id: 5,
          title: "Rafael Nadal Announces Comeback",
          desc: "After injury setbacks, Nadal confirms his participation in the French Open 2025.",
          img: "https://images.unsplash.com/photo-1622278647429-5a678b81884e?auto=format&fit=crop&w=800&q=80",
          likes: Math.floor(Math.random() * 500) + 100,
        },
        {
          id: 6,
          title: "Wimbledon 2025: Young Stars Shine",
          desc: "Rising tennis stars dominate the early rounds with stunning performances.",
          img: "https://images.unsplash.com/photo-1621510779418-4bafca0f25f2?auto=format&fit=crop&w=800&q=80",
          likes: Math.floor(Math.random() * 500) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Sports News</h1>

      {sportsSections.map((section, index) => (
        <div key={index} className="category-section">
          <div className="category-header">
            <img
              src={section.banner}
              alt={section.title}
              className="category-banner"
            />
            <h2>{section.title}</h2>
          </div>

          <div className="news-cards">
            {section.articles.map((article) => (
              <div
                key={article.id}
                className="news-card"
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <img src={article.img} alt={article.title} className="news-img" />
                <div className="news-info">
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                  <div className="like-section">❤️ {article.likes} likes</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
