import React from "react";
import "./ArticlePage.css";
import { useParams, Link } from "react-router-dom";

const dummyArticles = [
  {
    id: 1,
    title: "AI Revolution in Education",
    category: "Technology",
    date: "2025-10-28",
    views: 1200,
    author: "John Doe",
    source: "TechDaily",
    image: "https://source.unsplash.com/1200x600/?ai,education",
    content: `Artificial Intelligence (AI) is transforming the education sector by enabling personalized learning experiences, automating grading, and assisting teachers with smart analytics. This article explores how AI tools are shaping modern classrooms and preparing students for the future.`,
  },
  {
    id: 2,
    title: "India vs Australia Highlights",
    category: "Sports",
    date: "2025-10-27",
    views: 900,
    author: "Rahul Verma",
    source: "ESPN",
    image: "https://source.unsplash.com/1200x600/?cricket,stadium",
    content: `In an exciting match between India and Australia, fans witnessed an incredible performance by both teams. The highlights include record-breaking innings and stunning fielding efforts that made this game one to remember.`,
  },
   {
    id: 4,
    title: "Stock Market Sees Record Growth",
    category: "Sports",
    date: "2025-10-29",
    views: 9000,
    author: "Druti Ghag",
    source: "TOI",
    image: "https://source.unsplash.com/1200x600/?cricket,stadium",
    content: `In an exciting match between India and Australia, fans witnessed an incredible performance by both teams. The highlights include record-breaking innings and stunning fielding efforts that made this game one to remember.`,
  },
];

export default function ArticlePage() {
  const { id } = useParams();
  const article = dummyArticles.find((a) => a.id === Number(id));

  if (!article)
    return (
      <div className="article-page not-found">
        <h2>Article not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p className="article-meta">
        🗓 {article.date} | ✍️ {article.author} | 📂 {article.category} | 📰{" "}
        {article.source}
      </p>

      <img src={article.image} alt={article.title} className="article-image" />

      <p className="article-content">{article.content}</p>

      {/* Social Share Buttons */}
      <div className="social-share">
        <p>Share this article:</p>
        <div className="buttons">
          <button
            onClick={() =>
              window.open(
                `https://facebook.com/sharer/sharer.php?u=${window.location.href}`
              )
            }
          >
            📘 Facebook
          </button>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?url=${window.location.href}`
              )
            }
          >
            🐦 Twitter
          </button>
          <button
            onClick={() =>
              window.open(
                `https://api.whatsapp.com/send?text=${window.location.href}`
              )
            }
          >
            💬 WhatsApp
          </button>
          <button
            onClick={() =>
              window.open(
                `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`
              )
            }
          >
            💼 LinkedIn
          </button>
        </div>
      </div>

      {/* Recommended Articles */}
      <div className="recommended">
        <h3>Recommended Articles</h3>
        <div className="recommend-list">
          {dummyArticles
            .filter((a) => a.category === article.category && a.id !== article.id)
            .map((a) => (
              <Link to={`/article/${a.id}`} key={a.id} className="recommend-card">
                <img src={a.image} alt={a.title} />
                <p>{a.title}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
