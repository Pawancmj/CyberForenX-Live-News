import "./CategoryPage.css";

export default function International() {
  const intlSections = [
    {
      name: "World Politics",
      banner: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      news: [
        {
          title: "Global Summit on Climate Change",
          description: "Leaders agree on emission reduction goals.",
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "UN Calls for Peace in Conflict Zones",
          description: "Diplomatic talks show progress in several regions.",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Global Economy",
      banner: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800",
      news: [
        {
          title: "Oil Prices Rise Amid Tensions",
          description: "Energy markets see high volatility worldwide.",
          img: "https://images.unsplash.com/photo-1565372918670-3f7a1a6d8745?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Tech Giants Expand Globally",
          description: "Major companies invest in emerging markets.",
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">International News</h1>

      {intlSections.map((section, i) => (
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
