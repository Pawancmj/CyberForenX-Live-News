import "./CategoryPage.css";

export default function National() {
  // Category-wise fallback images
  const fallbackImages = {
    "Government Policies": "https://cdn-icons-png.flaticon.com/512/816/816669.png",
    "Indian Economy": "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const categoryIcons = {
    "Government Policies": "🛡️",
    "Indian Economy": "📈",
  };

  const nationalSections = [
    {
      name: "Government Policies",
      banner:
        "https://images.unsplash.com/photo-1508349937151-22b68b72d5d8?w=800",
      news: [
        {
          title: "New Education Policy 2025 Announced",
          description:
            "Government introduces reforms for higher education system.",
          img: "https://images.unsplash.com/photo-1581092335528-9c9f5d8fbc36?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/news1",
        },
        {
          title: "Smart City Projects Expansion",
          description:
            "More cities to get upgraded infrastructure.",
          img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/news2",
        },
      ],
    },

    {
      name: "Indian Economy",
      banner:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800",
      news: [
        {
          title: "GDP Growth Hits 7.8%",
          description:
            "Strong performance driven by manufacturing and IT sectors.",
          img: "https://images.unsplash.com/photo-1556742040-3c52d6e88c62?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/news3",
        },
        {
          title: "Stock Market Sees Record High",
          description:
            "Sensex touches new milestone amid investor optimism.",
          img: "invalid-img-link.jpg", // will trigger fallback
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/news4",
        },
      ],
    },
  ];

  return (
    <div className="category-page">

      <h1 className="category-title">National News</h1>

      {nationalSections.map((section, index) => (
        <div key={index} className="category-section">

          {/* HEADER */}
          <div className="category-header">
            <img
              src={section.banner}
              alt={section.name}
              className="category-banner"
              onError={(e) => {
                e.target.src =
                  fallbackImages[section.name] ||
                  "https://cdn-icons-png.flaticon.com/512/2965/2965879.png";
              }}
            />
            <h2>
              {categoryIcons[section.name]} {section.name}
            </h2>
          </div>

          {/* NEWS CARDS */}
          <div className="news-cards">
            {section.news.map((item, i) => (
              <div key={i} className="news-card">
                
                {/* IMAGE WITH AUTO FALLBACK */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="news-img"
                  onError={(e) => {
                    e.target.src =
                      fallbackImages[section.name] ||
                      "https://cdn-icons-png.flaticon.com/512/2965/2965879.png";
                  }}
                />

                <div className="news-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="card-footer">
                    <button
                      className="read-more-btn"
                      onClick={() => window.open(item.url, "_blank")}
                    >
                      Read More
                    </button>

                    <span className="like-section">
                      ❤️ {item.likes} Likes
                    </span>
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
