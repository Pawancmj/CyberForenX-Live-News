import React from "react";

export default function Admin() {
  return (
    <div className="admin-panel p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Yahan se tu articles add, delete, update kar sakta hai.</p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow">Add New Article</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">Manage Categories</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">View Users</div>
      </div>
    </div>
  );
}
