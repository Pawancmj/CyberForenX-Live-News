// src/Pages/Politics.js
import "./CategoryPage.css";

export default function Politics() {
  const fallbackImages = {
    Elections: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
    Policy: "https://cdn-icons-png.flaticon.com/512/816/816669.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const sections = [
    {
      name: "Elections",
      banner: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
      news: [
        {
          title: "Election Roundup",
          description: "Constituency updates and candidate highlights.",
          img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
          likes: 610,
          url: "https://example.com/politics1",
        },
      ],
    },
    {
      name: "Policy",
      banner: "https://images.unsplash.com/photo-1520975911371-8f8b1e8b1e1d?w=800",
      news: [
        {
          title: "New Policy Announcement",
          description: "Government releases new public policy measures.",
          img: "invalid.jpg",
          likes: 340,
          url: "https://example.com/politics2",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Politics</h1>

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

