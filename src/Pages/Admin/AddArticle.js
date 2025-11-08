import { useState } from "react";
import "./Admin.css";

export default function AddArticle() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Save in localStorage for now (later will connect backend)
    const stored = JSON.parse(localStorage.getItem("articles")) || [];
    localStorage.setItem("articles", JSON.stringify([...stored, formData]));

    alert("✅ Article added successfully!");
    setFormData({ title: "", category: "", content: "", image: "" });
  };

  return (
    <div className="admin-form-container">
      <h2>➕ Add New Article</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input name="title" placeholder="Article Title" value={formData.title} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <textarea name="content" placeholder="Write article content..." rows="6" value={formData.content} onChange={handleChange} required />
        <button type="submit">Publish Article</button>
      </form>
    </div>
  );
}
