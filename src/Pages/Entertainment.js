// src/Pages/Entertainment.js
import "./CategoryPage.css";

export default function Entertainment() {
  const fallbackImages = {
    Movies: "https://cdn-icons-png.flaticon.com/512/2920/2920362.png",
    Music: "https://cdn-icons-png.flaticon.com/512/727/727218.png",
    General: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };

  const sections = [
    {
      name: "Movies",
      banner: "https://images.unsplash.com/photo-1517604931442-7f7a6f2b2d0b?w=800",
      news: [
        {
          title: "Blockbuster Premiere",
          description: "Audience cheers at the new film release.",
          img: "https://images.unsplash.com/photo-1517604931442-7f7a6f2b2d0b?w=800",
          likes: 980,
          url: "https://example.com/ent1",
        },
        {
          title: "Director Wins Award",
          description: "Prestigious cinema award for storytelling.",
          img: "invalid.jpg",
          likes: 410,
          url: "https://example.com/ent2",
        },
      ],
    },
    {
      name: "Music",
      banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      news: [
        {
          title: "New Album Tops Charts",
          description: "Singer's latest work becomes instant hit.",
          img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
          likes: 760,
          url: "https://example.com/ent3",
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Entertainment</h1>

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
