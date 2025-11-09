import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell, Legend, ResponsiveContainer
} from "recharts";
import "./Admin.css";

export default function AdminStats() {
  // Mock Data (replace later with API data)
  const trafficData = [
    { month: "Jan", views: 1200 },
    { month: "Feb", views: 2300 },
    { month: "Mar", views: 1800 },
    { month: "Apr", views: 2900 },
    { month: "May", views: 3500 },
    { month: "Jun", views: 4100 },
  ];

  const categoryData = [
    { category: "Cybersecurity", articles: 12 },
    { category: "AI", articles: 8 },
    { category: "Blockchain", articles: 5 },
    { category: "Tech News", articles: 10 },
  ];

  const regionData = [
    { name: "India", value: 60 },
    { name: "USA", value: 20 },
    { name: "UK", value: 10 },
    { name: "Others", value: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="admin-stats-container">
      <h2>📊 Detailed Analytics Dashboard</h2>

      {/* Overview Cards */}
      <div className="stats-overview">
        <div className="card">📰 Total Articles: <strong>35</strong></div>
        <div className="card">✅ Published: <strong>28</strong></div>
        <div className="card">🕒 Drafts: <strong>7</strong></div>
        <div className="card">👁️ Total Views: <strong>14,200</strong></div>
        <div className="card">💬 Avg Engagement: <strong>4.7%</strong></div>
      </div>

      {/* Line Chart */}
      <div className="chart-section">
        <h3>📈 Traffic Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="chart-section">
        <h3>📚 Category Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="articles" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="chart-section">
        <h3>🌍 Audience by Region</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={regionData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
              {regionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
