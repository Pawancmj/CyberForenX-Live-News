import { Link } from "react-router-dom";
import "./Admin.css";

export default function AdminDashboard() {
  return (
    <div className="admin-container">
      <h1>🗞️ CyberForenX Admin Panel</h1>
      <div className="admin-actions">
        <Link to="/admin/add" className="admin-card">➕ Add Article</Link>
        <Link to="/admin/manage" className="admin-card">📝 Manage Articles</Link>
        <Link to="/admin/stats" className="admin-card">📊 Analytics Dashboard</Link>
      </div>
    </div>
  );
}
