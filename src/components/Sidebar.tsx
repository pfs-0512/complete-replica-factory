import { ChevronRight, CircleDot, Store, CreditCard, User, HelpCircle } from "lucide-react";
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
    className={`sidebar-link ${isActive ? "bg-gray-100" : ""}`}
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

  return (
    <aside className="w-64 border-r bg-white min-h-screen shadow-sm">
      <nav className="p-4 space-y-6">
        {/* レッスン一覧 */}
        <div className="space-y-1">
          <SidebarLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <CircleDot className="w-5 h-5 text-gray-500 mr-3" />
            <span className="flex-1 truncate">レッスン一覧</span>
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </SidebarLink>
          <div className="pl-8 space-y-1">
            {categories.map((category) => (
              <SidebarLink
                key={`lesson-${category.path}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/?category=${category.path}`);
                }}
                isActive={location.search === `?category=${category.path}`}
              >
                <span className="flex-1 truncate">{category.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </SidebarLink>
            ))}
          </div>
        </div>

        {/* 動画管理 */}
        <div className="space-y-1">
          <SidebarLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/videos");
            }}
          >
            <CircleDot className="w-5 h-5 text-gray-500 mr-3" />
            <span className="flex-1 truncate">動画管理</span>
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </SidebarLink>
          <div className="pl-8 space-y-1">
            {categories.map((category) => (
              <SidebarLink
                key={`video-${category.path}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/videos?category=${category.path}`);
                }}
                isActive={location.pathname === '/videos' && location.search === `?category=${category.path}`}
              >
                <span className="flex-1 truncate">{category.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </SidebarLink>
            ))}
          </div>
        </div>

        {/* 予約管理 */}
        <SidebarLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/reservations");
          }}
          isActive={isActive("/reservations")}
        >
          <Store className="w-5 h-5 text-gray-500 mr-3" />
          <span className="flex-1 truncate">予約管理</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </SidebarLink>

        {/* メディア管理 */}
        <SidebarLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/media");
          }}
          isActive={isActive("/media")}
        >
          <CreditCard className="w-5 h-5 text-gray-500 mr-3" />
          <span className="flex-1 truncate">メディア管理</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </SidebarLink>

        {/* マイプロフィール */}
        <SidebarLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/profile");
          }}
          isActive={isActive("/profile")}
        >
          <User className="w-5 h-5 text-gray-500 mr-3" />
          <span className="flex-1 truncate">マイプロフィール</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </SidebarLink>

        {/* ヘルプ */}
        <SidebarLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/help");
          }}
          isActive={isActive("/help")}
        >
          <HelpCircle className="w-5 h-5 text-gray-500 mr-3" />
          <span className="flex-1 truncate">ヘルプ</span>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </SidebarLink>
      </nav>
    </aside>
  );
};

export default Sidebar;