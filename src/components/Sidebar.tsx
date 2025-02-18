
import { ChevronRight, CircleDot, Store, User, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarLink = ({ href, onClick, isActive, children }: {
  href: string;
  onClick: (e: React.MouseEvent) => void;
  isActive?: boolean;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md ${
      isActive ? "bg-gray-100" : ""
    }`}
  >
    {children}
  </a>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { label: "子ども向け", path: "children" },
    { label: "親子向け", path: "parent-child" },
    { label: "親御さん向け", path: "parents" }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <aside className="w-64 border-r bg-white min-h-screen shadow-sm text-left">
      <nav className="p-4 space-y-6">
        {/* レッスン一覧 */}
        <div className="space-y-1">
          <SidebarLink
            href="/"
            onClick={(e) => handleNavigate(e, "/")}
            isActive={isActive("/")}
          >
            <CircleDot className="w-5 h-5 text-gray-500 mr-3" />
            <span className="flex-1">レッスン一覧</span>
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </SidebarLink>
          <div className="pl-8 space-y-1">
            {categories.map((category) => (
              <SidebarLink
                key={category.path}
                href={`/?category=${category.path}`}
                onClick={(e) => handleNavigate(e, `/?category=${category.path}`)}
                isActive={location.search === `?category=${category.path}`}
              >
                <span className="flex-1">{category.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </SidebarLink>
            ))}
          </div>
        </div>

        {/* マイプロフィール */}
        <SidebarLink
          href="/profile"
          onClick={(e) => handleNavigate(e, "/profile")}
          isActive={isActive("/profile")}
        >
          <User className="w-5 h-5 text-gray-500 mr-3" />
          <span className="flex-1">マイプロフィール</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </SidebarLink>

        {/* その他のメニュー項目 */}
        <SidebarLink
          href="/reservations"
          onClick={(e) => handleNavigate(e, "/reservations")}
          isActive={isActive("/reservations")}
        >
          <Store className="w-5 h-5 text-gray-500 mr-3" />
          <span className="flex-1">予約管理</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </SidebarLink>

        <SidebarLink
          href="/help"
          onClick={(e) => handleNavigate(e, "/help")}
          isActive={isActive("/help")}
        >
          <HelpCircle className="w-5 h-5 text-gray-500 mr-3" />
          <span className="flex-1">ヘルプ</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </SidebarLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
