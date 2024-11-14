import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { label: "レッスン管理", active: true },
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