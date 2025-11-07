import "./CategoryPage.css";

export default function Health() {
  const sections = [
    {
      name: "Fitness",
      banner: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=800",
      news: [
        {
          title: "Morning Workouts Improve Mental Health",
          description: "Studies show exercising early boosts focus & energy.",
          img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "Yoga Gains Global Popularity",
          description: "Yoga retreats see record participation this year.",
          img: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
    {
      name: "Medical Research",
      banner: "https://images.unsplash.com/photo-1588776814546-75ba6d3a26c0?w=800",
      news: [
        {
          title: "Cancer Vaccine Trial Shows Success",
          description: "Early results show major breakthrough in treatment.",
          img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
        {
          title: "AI Helps Diagnose Rare Diseases",
          description: "Doctors use AI to detect rare conditions faster.",
          img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
          likes: Math.floor(Math.random() * 900) + 100,
        },
      ],
    },
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">Health News</h1>
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
