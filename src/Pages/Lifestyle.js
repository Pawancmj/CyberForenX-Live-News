// src/Pages/Lifestyle.js
import "./CategoryPage.css";

export default function Lifestyle() {
  const fallbackImages = {
    Travel: "https://cdn-icons-png.flaticon.com/512/929/929564.png",
    Food: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const sections = [
    {
      name: "Travel",
      banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      news: [
        {
          title: "Top 10 Weekend Getaways",
          description: "Quick escapes for busy city dwellers.",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
          likes: 290,
          url: "https://example.com/life1",
        },
      ],
    },
    {
      name: "Food",
      banner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      news: [
        {
          title: "Street Food Guide",
          description: "Best local dishes to try this season.",
          img: "invalid.jpg",
          likes: 190,
          url: "https://example.com/life2",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Lifestyle</h1>

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
