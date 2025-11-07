import "./CategoryPage.css";

export default function Environment() {
  const sections = [
    {
      name: "Climate Change",
      banner: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=800",
      news: [
        {
          title: "Earth’s Temperature Hits Record High",
          description: "UN reports alarming global warming patterns.",
          img: "https://images.unsplash.com/photo-1521207418485-99c705420785?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "New Green Energy Initiatives Launched",
          description: "Countries invest heavily in renewable projects.",
          img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Wildlife",
      banner: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800",
      news: [
        {
          title: "Tiger Population Sees Growth",
          description: "Conservation efforts lead to positive results.",
          img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Deforestation Rate Declines",
          description: "NGOs work with communities to protect forests.",
          img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Environment News</h1>
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
