import "./CategoryPage.css";

export default function Technology() {
  const sections = [
    {
      name: "Artificial Intelligence",
      banner: "https://images.unsplash.com/photo-1581092335528-9c9f5d8fbc36?w=800",
      news: [
        {
          title: "AI Chatbots Revolutionize Customer Support",
          description: "More companies adopt intelligent assistants for users.",
          img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "AI in Healthcare Shows Promising Results",
          description: "New tools help detect diseases early with accuracy.",
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Cybersecurity",
      banner: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800",
      news: [
        {
          title: "Major Data Breach Exposes Millions",
          description: "Experts recommend stronger encryption methods.",
          img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "New Cyber Law Passed for Online Safety",
          description: "Government tightens digital privacy protection.",
          img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Technology News</h1>
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
