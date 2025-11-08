import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

export default function ManageArticle() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("articles")) || [];
    setArticles(stored);
  }, []);

  const deleteArticle = (index) => {
    const updated = [...articles];
    updated.splice(index, 1);
    setArticles(updated);
    localStorage.setItem("articles", JSON.stringify(updated));
  };

  return (
    <div className="admin-manage">
      <h2>📝 Manage Articles</h2>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="article-table">
          {articles.map((a, i) => (
            <div key={i} className="article-row">
              <div>
                <strong>{a.title}</strong> <br />
                <small>{a.category}</small>
              </div>
              <div>
                <Link to={`/admin/edit/${i}`} className="edit-btn">✏️ Edit</Link>
                <button onClick={() => deleteArticle(i)} className="delete-btn">🗑 Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
