import "./CategoryPage.css";

export default function Sports() {
  const fallbackImages = {
    Cricket: "https://cdn-icons-png.flaticon.com/512/2098/2098313.png",
    Football: "https://cdn-icons-png.flaticon.com/512/860/860806.png",
    Olympics: "https://cdn-icons-png.flaticon.com/512/10471/10471458.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const categoryIcons = {
    Cricket: "🏏",
    Football: "⚽",
    Olympics: "🏅",
  };

  const sportsSections = [
    {
      name: "Cricket",
      banner:
        "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=800",
      news: [
        {
          title: "India Wins T20 Series 3–1",
          description:
            "Rohit Sharma leads the team to a dominant series victory.",
          img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/cricket1",
        },
        {
          title: "IPL 2025 Auctions Break Records",
          description:
            "Several young players attract massive bids this season.",
          img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/cricket2",
        },
      ],
    },

    {
      name: "Football",
      banner:
        "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800",
      news: [
        {
          title: "India Qualifies for Asia Cup Finals",
          description:
            "Historic qualification after a thrilling penalty shootout.",
          img: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/football1",
        },
        {
          title: "Premier League Title Race Tightens",
          description: "Top clubs battle neck-to-neck this season.",
          img: "invalid-link.jpg", // triggers fallback
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/football2",
        },
      ],
    },

    {
      name: "Olympics",
      banner:
        "https://images.unsplash.com/photo-1505842465776-3d90f616310d?w=800",
      news: [
        {
          title: "India Wins 4 Medals in Athletics",
          description:
            "Record-breaking performance in track and field events.",
          img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/olympics1",
        },
        {
          title: "2028 Olympics Preparation Begins",
          description:
            "New training centres set up across India for athletes.",
          img: "https://images.unsplash.com/photo-1599058918144-59bc3db44e4b?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://example.com/olympics2",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Sports News</h1>

      {sportsSections.map((section, index) => (
        <div key={index} className="category-section">
          {/* SECTION HEADER */}
          <div className="category-header">
            <img
              src={section.banner}
              alt={section.name}
              className="category-banner"
              onError={(e) => {
                e.target.src =
                  fallbackImages[section.name] || fallbackImages.General;
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
                <img
                  src={item.img}
                  alt={item.title}
                  className="news-img"
                  onError={(e) => {
                    e.target.src =
                      fallbackImages[section.name] || fallbackImages.General;
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
                    <span className="like-section">❤️ {item.likes} Likes</span>
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
