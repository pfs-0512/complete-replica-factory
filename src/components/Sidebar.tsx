import { ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { label: "レッスン管理", path: "/" },
    { label: "動画管理", path: "/videos" },
    { label: "予約管理", path: "/reservations" },
    { label: "メディア管理", path: "/media" },
    { label: "アカウント管理", path: "/accounts" },
  ];

  return (
    <aside className="w-56 border-r bg-white">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (item.path) {
              navigate(item.path);
            }
          }}
          className={`sidebar-link ${
            location.pathname === item.path ? "bg-gray-100" : ""
          }`}
        >
          <span className="flex-1 truncate">{item.label}</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;