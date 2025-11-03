import React from "react";
import "./CategoryCards.css";

function CategoryCards() {
  const categories = ["National", "International", "Sports", "Technology", "Business", "Health"];

  return (
    <div className="categories">
      {categories.map((cat, i) => (
        <div key={i} className="card">
          <h3>{cat}</h3>
          <p>Latest {cat.toLowerCase()} news and stories.</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryCards;
