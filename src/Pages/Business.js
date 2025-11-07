import "./CategoryPage.css";

export default function Business() {
  const sections = [
    {
      name: "Stock Market",
      banner: "https://images.unsplash.com/photo-1565372918670-3f7a1a6d8745?w=800",
      news: [
        {
          title: "Markets End on a High Note",
          description: "Sensex and Nifty close with record-breaking gains.",
          img: "https://images.unsplash.com/photo-1581091870622-84e30c0a6b42?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Investors Show Confidence Amid Global Uncertainty",
          description: "Retail participation increases in equities.",
          img: "https://images.unsplash.com/photo-1556742400-b5c26e1bdb23?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Startups",
      banner: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      news: [
        {
          title: "New Fintech Startup Raises $50M",
          description: "Investors back new-age finance management platform.",
          img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "India Becomes Hub for AI Startups",
          description: "Entrepreneurs focus on innovation and data solutions.",
          img: "https://images.unsplash.com/photo-1532619187608-e5375cab36a6?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Business News</h1>
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
