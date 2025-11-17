// src/Pages/Technology.js
import "./CategoryPage.css";

export default function Technology() {
  const fallbackImages = {
    AI: "https://cdn-icons-png.flaticon.com/512/3437/3437364.png",
    Gadgets: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const sections = [
    {
      name: "AI & Research",
      banner: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
      news: [
        {
          title: "Breakthrough in AI Models",
          description: "New architecture reduces compute while improving accuracy.",
          img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
          likes: 540,
          url: "https://example.com/tech1",
        },
        {
          title: "Robotics Lab Debuts New Bot",
          description: "Humanoid robot demonstrates improved dexterity.",
          img: "invalid-link.jpg",
          likes: 312,
          url: "https://example.com/tech2",
        },
      ],
    },
    {
      name: "Gadgets",
      banner: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      news: [
        {
          title: "Phone Release: Specs & Review",
          description: "Flagship phone offers stunning camera capabilities.",
          img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
          likes: 890,
          url: "https://example.com/tech3",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Technology</h1>

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

