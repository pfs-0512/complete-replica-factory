import { ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    lessons: true,
    videos: false
  });

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const categories = [
    { label: "子ども向け", path: "children" },
    { label: "親子向け", path: "parent-child" },
    { label: "親御さん向け", path: "parents" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-56 border-r bg-white">
      {/* レッスン一覧 */}
      <div>
        <button
          onClick={() => toggleMenu('lessons')}
          className="w-full sidebar-link text-left"
        >
          <span className="flex-1 truncate">レッスン一覧</span>
          {expandedMenus.lessons ? (
            <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          )}
        </button>
        {expandedMenus.lessons && (
          <div className="pl-4">
            {categories.map((category) => (
              <a
                key={`lesson-${category.path}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/?category=${category.path}`);
                }}
                className={`sidebar-link ${
                  location.search === `?category=${category.path}` ? "bg-gray-100" : ""
                }`}
              >
                <span className="flex-1 truncate">{category.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* 動画管理 */}
      <div>
        <button
          onClick={() => toggleMenu('videos')}
          className="w-full sidebar-link text-left"
        >
          <span className="flex-1 truncate">動画管理</span>
          {expandedMenus.videos ? (
            <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          )}
        </button>
        {expandedMenus.videos && (
          <div className="pl-4">
            {categories.map((category) => (
              <a
                key={`video-${category.path}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/videos?category=${category.path}`);
                }}
                className={`sidebar-link ${
                  location.pathname === '/videos' && location.search === `?category=${category.path}` ? "bg-gray-100" : ""
                }`}
              >
                <span className="flex-1 truncate">{category.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* 予約管理 */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate("/reservations");
        }}
        className={`sidebar-link ${isActive("/reservations") ? "bg-gray-100" : ""}`}
      >
        <span className="flex-1 truncate">予約管理</span>
        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
      </a>

      {/* メディア管理 */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate("/media");
        }}
        className={`sidebar-link ${isActive("/media") ? "bg-gray-100" : ""}`}
      >
        <span className="flex-1 truncate">メディア管理</span>
        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
      </a>

      {/* マイプロフィール */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate("/profile");
        }}
        className={`sidebar-link ${isActive("/profile") ? "bg-gray-100" : ""}`}
      >
        <span className="flex-1 truncate">マイプロフィール</span>
        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
      </a>
    </aside>
  );
};

export default Sidebar;