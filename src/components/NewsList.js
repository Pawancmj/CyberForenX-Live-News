import React, { useState } from "react";
import "./NewsList.css";

const articles = [
  { id: 1, title: "AI Revolution in Education", category: "Technology", date: "2025-10-28", views: 1200 },
  { id: 2, title: "India vs Australia Highlights", category: "Sports", date: "2025-10-27", views: 900 },
  { id: 3, title: "Global Summit 2025: Key Outcomes", category: "Politics", date: "2025-10-29", views: 1800 },
  { id: 4, title: "Stock Market Sees Record Growth", category: "Business", date: "2025-10-30", views: 2200 },
];

function NewsList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Latest");

  // 🔍 Filter + Sort Logic
  const filteredArticles = articles
    .filter((a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || a.category === filter)
    )
    .sort((a, b) => {
      if (sort === "Latest") return new Date(b.date) - new Date(a.date);
      if (sort === "Trending") return b.views - a.views;
      if (sort === "Most Read") return b.views - a.views;
      return 0;
    });

  return (
    <div className="news-container">
      {/* Search + Filters */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="🔍 Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Politics">Politics</option>
          <option value="Business">Business</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="Latest">Latest</option>
          <option value="Trending">Trending</option>
          <option value="Most Read">Most Read</option>
        </select>
      </div>

      {/* Article Cards */}
      <div className="news-list">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="news-card">
              <h3>{article.title}</h3>
              <p className="meta">
                🗓 {article.date} | 📂 {article.category} | 👁 {article.views}
              </p>
            </div>
          ))
        ) : (
          <p className="no-results">No articles found...</p>
        )}
      </div>
    </div>
  );
}

export default NewsList;
