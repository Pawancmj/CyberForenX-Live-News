import "./CategoryPage.css";

export default function Politics() {
  const sections = [
    {
      name: "Elections 2025",
      banner: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800",
      news: [
        {
          title: "Election Commission Announces Poll Dates",
          description: "General elections to be held in multiple phases across India.",
          img: "https://images.unsplash.com/photo-1603145733169-90a1e095c62e?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Major Political Rallies Begin Nationwide",
          description: "Parties gear up for the upcoming elections with big campaigns.",
          img: "https://images.unsplash.com/photo-1578589318692-43391d0e9d2a?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Government Policies",
      banner: "https://images.unsplash.com/photo-1517638851339-4aa32003c11a?w=800",
      news: [
        {
          title: "New Tax Reform Bill Passed",
          description: "Parliament approves major tax reforms to boost the economy.",
          img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Cabinet Expands Rural Development Scheme",
          description: "New funding announced for village infrastructure projects.",
          img: "https://images.unsplash.com/photo-1581093588401-22d9b6bfa2b4?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Politics News</h1>
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
