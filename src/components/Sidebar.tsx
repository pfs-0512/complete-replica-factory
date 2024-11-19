import { useLocation } from "react-router-dom";
import MenuItem from "./sidebar/MenuItem";
import MenuLink from "./sidebar/MenuLink";

const CATEGORIES = [
  { label: "子ども向け", path: "children" },
  { label: "親子向け", path: "parent-child" },
  { label: "親御さん向け", path: "parents" }
];

const Sidebar = () => {
  const location = useLocation();

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