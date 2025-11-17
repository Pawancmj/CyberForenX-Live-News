// src/Pages/Health.js
import "./CategoryPage.css";

export default function Health() {
  const fallbackImages = {
    Medical: "https://cdn-icons-png.flaticon.com/512/2965/2965854.png",
    Wellness: "https://cdn-icons-png.flaticon.com/512/2913/2913461.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const sections = [
    {
      name: "Medical",
      banner: "https://images.unsplash.com/photo-1587502536263-3f6f1e2f1f1b?w=800",
      news: [
        {
          title: "New Vaccine Trials Begin",
          description: "Phase 3 trials show promising results.",
          img: "https://images.unsplash.com/photo-1587502536263-3f6f1e2f1f1b?w=800",
          likes: 410,
          url: "https://example.com/health1",
        },
      ],
    },
    {
      name: "Wellness",
      banner: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
      news: [
        {
          title: "5 Tips for Mental Well-being",
          description: "Simple daily habits to boost mental health.",
          img: "invalid.jpg",
          likes: 220,
          url: "https://example.com/health2",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Health</h1>

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

