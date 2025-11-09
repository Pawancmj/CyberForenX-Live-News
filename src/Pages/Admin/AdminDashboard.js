import { Link } from "react-router-dom";
import "./Admin.css";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalArticles: 0,
    totalUsers: 0,
    totalLikes: 0,
    totalViews: 0,
  });

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // 🔹 Simulated data (normally from backend or localStorage)
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [
      { category: "Sports", likes: 120, views: 1500 },
      { category: "Technology", likes: 90, views: 1100 },
      { category: "Politics", likes: 80, views: 950 },
      { category: "Entertainment", likes: 200, views: 1800 },
      { category: "Health", likes: 60, views: 700 },
    ];
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [
      { name: "Pawan" },
      { name: "Shubham" },
      { name: "Aditi" },
    ];

    const totalLikes = storedArticles.reduce((sum, a) => sum + (a.likes || 0), 0);
    const totalViews = storedArticles.reduce((sum, a) => sum + (a.views || 0), 0);

    // 🔹 Category wise stats for charts
    const categoryStats = storedArticles.map((a) => ({
      name: a.category,
      likes: a.likes,
      views: a.views,
    }));

    setStats({
      totalArticles: storedArticles.length,
      totalUsers: storedUsers.length,
      totalLikes,
      totalViews,
    });
    setCategoryData(categoryStats);
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

  return (
    <div className="admin-container">
      <h1>🗞️ CyberForenX Admin Dashboard</h1>

      {/* 🔹 Summary Cards */}
      <div className="analytics-section">
        <div className="analytics-card">
          <h3>📰 Total Articles</h3>
          <p>{stats.totalArticles}</p>
        </div>
        <div className="analytics-card">
          <h3>👥 Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="analytics-card">
          <h3>❤️ Total Likes</h3>
          <p>{stats.totalLikes}</p>
        </div>
        <div className="analytics-card">
          <h3>👁️ Total Views</h3>
          <p>{stats.totalViews}</p>
        </div>
      </div>

      {/* 🔹 Charts Section */}
      <div className="charts-container">
        <div className="chart-card">
          <h2>📊 Category Wise Views</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#4A90E2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>🍩 Likes Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="likes"
                nameKey="name"
                outerRadius={100}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔹 Admin Actions */}
      <div className="admin-actions">
        <Link to="/admin/add" className="admin-card">➕ Add Article</Link>
        <Link to="/admin/manage" className="admin-card">📝 Manage Articles</Link>
        <Link to="/admin/stats" className="admin-card">📈 Detailed Analytics</Link>
      </div>
    </div>
  );
}


