// src/components/common/Layout.jsx
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />

        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
