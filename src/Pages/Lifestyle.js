import "./CategoryPage.css";

export default function Lifestyle() {
  const sections = [
    {
      name: "Fashion",
      banner: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=800",
      news: [
        {
          title: "Winter 2025 Fashion Trends Revealed",
          description: "Designers focus on comfort and sustainability.",
          img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Local Brands Shine in Fashion Week",
          description: "Indian designers grab global attention.",
          img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Travel",
      banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
      news: [
        {
          title: "Top Destinations for 2025",
          description: "Travelers seek offbeat and peaceful experiences.",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Budget Travel Hacks for Students",
          description: "How to explore more while spending less.",
          img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Lifestyle News</h1>
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
