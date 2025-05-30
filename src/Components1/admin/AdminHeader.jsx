import { Link } from "react-router-dom";
import { FiLogOut, FiBell, FiUser, FiMenu } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

export default function AdminHeader({ onMenuClick }) {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <FiMenu size={20} />
          </button>

          <Link to="/admin" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-700 hover:text-primary relative">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div className="relative group">
            <button className="flex items-center space-x-2 p-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <FiUser className="text-blue-600" size={16} />
              </div>
              <span className="hidden md:inline text-sm font-medium">
                {user?.name || "Admin"}
              </span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 invisible group-hover:visible">
              <Link
                to="/admin/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile Settings
              </Link>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <FiLogOut className="mr-2" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
