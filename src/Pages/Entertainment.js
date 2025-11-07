import "./CategoryPage.css";

export default function Entertainment() {
  const sections = [
    {
      name: "Bollywood",
      banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      news: [
        {
          title: "New Movie 'Phoenix' Breaks Box Office Records",
          description: "The latest action thriller becomes an instant hit.",
          img: "https://images.unsplash.com/photo-1598899134739-24c46f58a3d2?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Actor Announces Upcoming Web Series",
          description: "Fans excited as superstar reveals OTT debut.",
          img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Music",
      banner: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      news: [
        {
          title: "New Pop Album Tops Charts Worldwide",
          description: "Listeners praise the unique sound and lyrics.",
          img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Global Music Festival Returns",
          description: "Thousands attend the grand comeback event.",
          img: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Entertainment News</h1>
      {sections.map((section, i) => (
        <div key={i} className="category-section">
          <div className="category-header">
            <img src={section.banner} alt={section.name} className="category-banner" />
            <h2>{section.name}</h2>
          </div>
          <div className="news-cards">
            {section.news.map((item, j) => (
              <div key={j} className="news-card">
                <img src={item.img} alt={item.title} className="news-img" />
                <div className="news-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="like-section">❤️ {item.likes} Likes</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
