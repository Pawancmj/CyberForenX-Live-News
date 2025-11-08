import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Admin.css";

export default function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: "", category: "", content: "", image: "" });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("articles")) || [];
    setArticle(stored[id]);
  }, [id]);

  const handleChange = (e) => setArticle({ ...article, [e.target.name]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("articles")) || [];
    stored[id] = article;
    localStorage.setItem("articles", JSON.stringify(stored));
    alert("✅ Article updated!");
    navigate("/admin/manage");
  };

  return (
    <div className="admin-form-container">
      <h2>✏️ Edit Article</h2>
      <form onSubmit={handleSave} className="admin-form">
        <input name="title" value={article.title} onChange={handleChange} />
        <input name="category" value={article.category} onChange={handleChange} />
        <input name="image" value={article.image} onChange={handleChange} />
        <textarea name="content" value={article.content} onChange={handleChange} rows="6" />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
