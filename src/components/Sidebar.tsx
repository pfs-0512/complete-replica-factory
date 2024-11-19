import { ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { CircleDollarSign, Store, User, CreditCard, HelpCircle } from "lucide-react";

// Separate component for menu items to reduce code duplication
const MenuItem = ({ 
  label, 
  path, 
  icon: Icon, 
  hasSubmenu = false,
  isActive = false,
  onClick 
}: { 
  label: string;
  path?: string;
  icon?: React.ElementType;
  hasSubmenu?: boolean;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) => (
  <a
    href="#"
    onClick={onClick}
    className={`
      px-6 py-2.5 text-sm flex items-center justify-between
      transition-colors duration-200
      ${isActive 
        ? "bg-gray-50 text-gray-900 font-medium" 
        : "text-gray-600 hover:bg-gray-50/50"
      }
    `}
  >
    <div className="flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5 text-gray-400" />}
      <span>{label}</span>
    </div>
    {hasSubmenu && <ChevronRight className="w-4 h-4 text-gray-400" />}
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
    <aside className="w-64 border-r bg-white min-h-screen py-6 shadow-sm">
      {/* ポイント管理 */}
      <div className="mb-8">
        <div className="px-6 mb-2 flex items-center gap-2">
          <CircleDollarSign className="w-5 h-5 text-gray-400" />
          <span className="font-medium">ポイント管理</span>
        </div>
        <div className="space-y-0.5">
          <MenuItem label="チャージ" />
          <MenuItem label="支払う" />
          <MenuItem label="受け取る" />
          <MenuItem label="ポイント履歴" />
          <MenuItem label="寄付履歴" />
          <MenuItem label="オーナーに渡す" />
        </div>
      </div>

      {/* 登録店・加盟店管理 */}
      <div className="mb-8">
        <div className="px-6 mb-2 flex items-center gap-2">
          <Store className="w-5 h-5 text-gray-400" />
          <span className="font-medium">登録店・加盟店管理</span>
        </div>
        <div className="space-y-0.5">
          <MenuItem label="新規登録" />
          <MenuItem label="スタッフ一覧" />
          <MenuItem label="店舗名1" />
          <MenuItem label="店舗名2長い店舗名長い店舗名" />
        </div>
      </div>

      {/* レッスン一覧 */}
      <div className="mb-8">
        <MenuItem 
          label="レッスン一覧"
          hasSubmenu
          isActive={isActive("/")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        />
        <div className="pl-4">
          {categories.map((category) => (
            <MenuItem
              key={`lesson-${category.path}`}
              label={category.label}
              isActive={location.search === `?category=${category.path}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/?category=${category.path}`);
              }}
            />
          ))}
        </div>
      </div>

      {/* 動画管理 */}
      <div className="mb-8">
        <MenuItem 
          label="動画管理"
          hasSubmenu
          isActive={isActive("/videos")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/videos");
          }}
        />
        <div className="pl-4">
          {categories.map((category) => (
            <MenuItem
              key={`video-${category.path}`}
              label={category.label}
              isActive={location.pathname === '/videos' && location.search === `?category=${category.path}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/videos?category=${category.path}`);
              }}
            />
          ))}
        </div>
      </div>

      {/* その他のメニュー項目 */}
      <div className="space-y-0.5">
        <MenuItem 
          label="予約管理"
          hasSubmenu
          isActive={isActive("/reservations")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/reservations");
          }}
        />

        <MenuItem 
          label="メディア管理"
          hasSubmenu
          isActive={isActive("/media")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/media");
          }}
        />

        <MenuItem 
          label="マイプロフィール"
          hasSubmenu
          isActive={isActive("/profile")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/profile");
          }}
        />

        <MenuItem label="ユーザー情報" icon={User} />
        <MenuItem label="クレジットカード情報" icon={CreditCard} />
        <MenuItem label="ヘルプ" icon={HelpCircle} />
      </div>
    </aside>
  );
};

export default Sidebar;