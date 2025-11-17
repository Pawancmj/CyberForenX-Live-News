// src/Pages/Business.js
import "./CategoryPage.css";

export default function Business() {
  const fallbackImages = {
    Markets: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    Startups: "https://cdn-icons-png.flaticon.com/512/3759/3759877.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const sections = [
    {
      name: "Markets",
      banner: "https://images.unsplash.com/photo-1531379410501-5a3d3d5a3b3d?w=800",
      news: [
        {
          title: "Sensex Hits New High",
          description: "Markets rally on positive corporate earnings.",
          img: "https://images.unsplash.com/photo-1542223616-1c7f3a1f2f0a?w=800",
          likes: 320,
          url: "https://example.com/business1",
        },
        {
          title: "Rupee Strengthens",
          description: "Currency gains as FII inflows rise.",
          img: "invalid-link.jpg",
          likes: 210,
          url: "https://example.com/business2",
        },
      ],
    },
    {
      name: "Startups",
      banner: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
      news: [
        {
          title: "Unicorn Valuation Rises",
          description: "Funding round values the startup at $1B+.",
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
          likes: 450,
          url: "https://example.com/business3",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Business</h1>

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

