import "./CategoryPage.css";

export default function National() {
  const nationalSections = [
    {
      name: "Government Policies",
      banner: "https://images.unsplash.com/photo-1508349937151-22b68b72d5d8?w=800",
      news: [
        {
          title: "New Education Policy 2025 Announced",
          description: "Government introduces reforms for higher education system.",
          img: "https://images.unsplash.com/photo-1581092335528-9c9f5d8fbc36?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Smart City Projects Expansion",
          description: "More cities to get upgraded infrastructure.",
          img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Indian Economy",
      banner: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800",
      news: [
        {
          title: "GDP Growth Hits 7.8%",
          description: "Strong performance driven by manufacturing and IT sectors.",
          img: "https://images.unsplash.com/photo-1556742040-3c52d6e88c62?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Stock Market Sees Record High",
          description: "Sensex touches new milestone amid investor optimism.",
          img: "https://images.unsplash.com/photo-1611974789855-9c1e6ecb2b15?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">National News</h1>

      {nationalSections.map((section, i) => (
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
                  <div className="like-section">
                    ❤️ {item.likes} Likes
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
