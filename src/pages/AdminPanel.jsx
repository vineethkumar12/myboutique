import { useState } from "react";
import AdminHeader from "../Components1/admin/AdminHeader";
import UserManagement from "../Components1/admin/UserManagement";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex border-b mb-6">
          {["users", "orders", "analytics"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab ? "border-b-2 border-primary" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "users" && <UserManagement />}
        {/* Other tab contents */}
      </div>
    </div>
  );
}
