import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiScissors,
  FiImage,
  FiUser,
  FiSettings,
  FiX,
} from "react-icons/fi";
import { FaRuler, FaMagic } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Sidebar({ isOpen, closeSidebar }) {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const isAdmin = "admin";

  const navItems = [
    { path: "/myboutique/", icon: <FiHome size={20} />, label: "Home" },
    { path: "/order", icon: <FiScissors size={20} />, label: "New Order" },
    {
      path: "/measurements",
      icon: <FaRuler size={20} />,
      label: "Measurements",
    },
    { path: "/gallery", icon: <FiImage size={20} />, label: "Gallery" },
    {
      path: "/virtual-tryon",
      icon: <FiUser size={20} />,
      label: "Virtual Try-On",
    },
    { path: "/contact", icon: <FiUser size={20} />, label: "Contact" },
    {
      path: "/admin",
      icon: <FiSettings size={20} />,
      label: "Admin Panel",
      adminOnly: true,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeSidebar();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeSidebar]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
          aria-hidden={!isOpen}
          tabIndex={-1}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 h-screen inset-y-0 left-0 w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        aria-label="Main navigation"
      >
        <div className="h-full flex flex-col border-r-2 border-orange-100">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b-2 border-orange-100">
            <h2 className="text-xl font-bold text-orange-600">TailorPro</h2>
            <button
              onClick={closeSidebar}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close sidebar"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Navigation Container */}
          <div className="flex-1 flex flex-col border-r-2  border-orange-100 overflow-hidden">
            {/* Scrollable Content */}
            <nav className="flex-1  overflow-y-auto  p-4">
              <ul className="space-y-2">
                {navItems
                  .filter((item) => !item.adminOnly)
                  .map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                          `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            isActive
                              ? "bg-orange-50 text-orange-600 font-medium border-l-4 border-orange-500"
                              : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          }`
                        }
                        end
                      >
                        <span className="text-gray-500">{item.icon}</span>
                        <span>{item.label}</span>
                      </NavLink>
                    </li>
                  ))}
                {/* AI Design Promo Section */}
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-2 mb-3">
                    <FaMagic className="text-orange-500 flex-shrink-0" />
                    <h3 className="font-bold text-orange-800 text-sm sm:text-base">
                      Design Your Dream Blouse By AI
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 mb-4">
                    Create custom designs with our AI-powered tool
                  </p>
                  <NavLink
                    to="/ai-designer"
                    onClick={closeSidebar}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    aria-label="Start AI design tool"
                  >
                    <FaMagic size={14} />
                    Start Designing
                  </NavLink>
                </div>

                {/* Admin Section */}
                {isAdmin && (
                  <>
                    <li className="  mb-2">
                      <div className="relative mt-8">
                        <hr className="border-orange-100" />
                        <span className="absolute left-4 -top-2 px-2 bg-white text-xs font-semibold uppercase text-orange-500">
                          Admin Controls
                        </span>
                      </div>
                    </li>
                    {navItems
                      .filter((item) => item.adminOnly)
                      .map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={item.path}
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                              `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                isActive
                                  ? "bg-orange-50 text-orange-600 font-medium border-l-4 border-orange-500"
                                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                              }`
                            }
                          >
                            <span className="text-gray-500">{item.icon}</span>
                            <span>{item.label}</span>
                          </NavLink>
                        </li>
                      ))}
                  </>
                )}
              </ul>
            </nav>

            {/* User Footer */}
            <div className="p-4 border-t border-orange-100 bg-white">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full">
                  <FiUser className="h-4 w-4 text-orange-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 truncate">Logged in as</p>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.name || "Guest"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
