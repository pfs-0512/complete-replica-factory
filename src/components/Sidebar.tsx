import { useNavigate, useLocation } from "react-router-dom";

// Separate the categories into a constant
const CATEGORIES = [
  { label: "子ども向け", path: "children" },
  { label: "親子向け", path: "parent-child" },
  { label: "親御さん向け", path: "parents" }
];

// Create a reusable menu item component
const MenuItem = ({ 
  icon, 
  label, 
  children, 
  isExpandable = true 
}: { 
  icon?: React.ReactNode, 
  label: string, 
  children?: React.ReactNode,
  isExpandable?: boolean
}) => (
  <div className="mb-4">
    <div className="flex items-center px-4 py-2 text-gray-700 font-medium">
      {icon && <span className="mr-2">{icon}</span>}
      <span className="flex-1">{label}</span>
    </div>
    {isExpandable && children && (
      <div className="ml-4 border-l border-gray-200">
        {children}
      </div>
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, category?: string) => {
    navigate(category ? `${path}?category=${category}` : path);
  };

  const isActive = (path: string, category?: string) => {
    if (category) {
      return location.pathname === path && location.search === `?category=${category}`;
    }
    return location.pathname === path;
  };

  const MenuLink = ({ path, label, category }: { path: string, label: string, category?: string }) => (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavigation(path, category);
      }}
      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
        isActive(path, category) ? "text-blue-600 bg-gray-50" : "text-gray-600"
      }`}
    >
      {label}
    </a>
  );

  // Determine if the current path should show expandable menu
  const shouldShowExpandableMenu = (path: string) => {
    return path === "/" || path === "/videos";
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      {/* レッスン一覧 */}
      <MenuItem label="レッスン一覧" isExpandable={shouldShowExpandableMenu(location.pathname)}>
        <MenuLink path="/" label="すべて" />
        {shouldShowExpandableMenu(location.pathname) && CATEGORIES.map((category) => (
          <MenuLink
            key={`lesson-${category.path}`}
            path="/"
            label={category.label}
            category={category.path}
          />
        ))}
      </MenuItem>

      {/* 動画管理 */}
      <MenuItem label="動画管理" isExpandable={shouldShowExpandableMenu(location.pathname)}>
        <MenuLink path="/videos" label="すべて" />
        {shouldShowExpandableMenu(location.pathname) && CATEGORIES.map((category) => (
          <MenuLink
            key={`video-${category.path}`}
            path="/videos"
            label={category.label}
            category={category.path}
          />
        ))}
      </MenuItem>

      {/* 予約管理 */}
      <MenuItem label="予約管理" isExpandable={false}>
        <MenuLink path="/reservations" label="予約一覧" />
      </MenuItem>

      {/* メディア管理 */}
      <MenuItem label="メディア管理" isExpandable={false}>
        <MenuLink path="/media" label="メディア一覧" />
      </MenuItem>

      {/* マイプロフィール */}
      <MenuItem label="マイプロフィール" isExpandable={false}>
        <MenuLink path="/profile" label="プロフィール設定" />
      </MenuItem>
    </aside>
  );
};

export default Sidebar;