import "./CategoryPage.css";

export default function International() {
  const fallbackImages = {
    Global: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
    Wars: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const categoryIcons = {
    Global: "🌍",
    Wars: "⚔️",
  };

  const sections = [
    {
      name: "Global",
      banner: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800",
      news: [
        {
          title: "UN Holds Emergency Meeting",
          description: "Diplomatic leaders gather for global peace talks.",
          img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://global.com/news1",
        },
        {
          title: "Climate Summit 2025",
          description: "World leaders discuss climate reform policies.",
          img: "invalid-url",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://global.com/news2",
        },
      ],
    },
    {
      name: "Wars",
      banner: "https://images.unsplash.com/photo-1504718855392-c0f33b0d1589?w=800",
      news: [
        {
          title: "Peace Talks Begin",
          description: "Historic agreement may end decade-long conflict.",
          img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
          url: "https://global.com/news3",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">International News</h1>

      {sections.map((section, index) => (
        <div key={index} className="category-section">
          <div className="category-header">
            <img
              src={section.banner}
              alt={section.name}
              className="category-banner"
              onError={(e) => (e.target.src = fallbackImages[section.name] || fallbackImages.General)}
            />
            <h2>{categoryIcons[section.name]} {section.name}</h2>
          </div>

          <div className="news-cards">
            {section.news.map((item, i) => (
              <div key={i} className="news-card">
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
