// src/Pages/Environment.js
import "./CategoryPage.css";

export default function Environment() {
  const fallbackImages = {
    Climate: "https://cdn-icons-png.flaticon.com/512/1684/1684352.png",
    Wildlife: "https://cdn-icons-png.flaticon.com/512/616/616514.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const sections = [
    {
      name: "Climate",
      banner: "https://images.unsplash.com/photo-1501894194-7c5e61f0e38f?w=800",
      news: [
        {
          title: "New Climate Pledge Announced",
          description: "Countries commit to stronger emissions targets.",
          img: "https://images.unsplash.com/photo-1501894194-7c5e61f0e38f?w=800",
          likes: 480,
          url: "https://example.com/env1",
        },
      ],
    },
    {
      name: "Wildlife",
      banner: "https://images.unsplash.com/photo-1501706362039-c6e809f7d5c5?w=800",
      news: [
        {
          title: "Conservation Efforts Boost Wildlife",
          description: "Protected areas show recovery in biodiversity.",
          img: "invalid.jpg",
          likes: 260,
          url: "https://example.com/env2",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Environment</h1>

      {sections.map((section, sidx) => (
        <div key={sidx} className="category-section">
          <div className="category-header">
            <img
              src={section.banner}
              alt={section.name}
              className="category-banner"
              onError={(e) => (e.target.src = fallbackImages[section.name] || fallbackImages.General)}
            />
            <h2>{section.name}</h2>
          </div>

          <div className="news-cards">
            {section.news.map((item, idx) => (
              <div key={idx} className="news-card">
                <img
                  src={item.img}
                  alt={item.title}
                  className="news-img"
                  onError={(e) => (e.target.src = fallbackImages[section.name] || fallbackImages.General)}
                />
                <div className="news-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="card-footer">
                    <button className="read-more-btn" onClick={() => window.open(item.url, "_blank")}>
                      Read More
                    </button>
                    <span className="like-section">❤️ {item.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

