import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    { label: "レッスン管理", active: true, path: "/" },
    { label: "動画管理", active: false },
    { label: "予約管理", active: false },
    { label: "メディア管理", active: false },
    { label: "アカウント管理", active: false },
  ];

  return (
    <aside className="w-64 border-r bg-white">
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
            item.active ? "bg-gray-100" : ""
          }`}
        >
          <span className="flex-1">{item.label}</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;