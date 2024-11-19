import { ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { CircleDollarSign, Store, User, CreditCard, HelpCircle } from "lucide-react";

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
    <aside className="w-64 border-r bg-white min-h-screen py-6">
      {/* ポイント管理 */}
      <div className="mb-8">
        <div className="px-6 mb-2 flex items-center gap-2">
          <CircleDollarSign className="w-5 h-5 text-gray-400" />
          <span className="font-medium">ポイント管理</span>
        </div>
        <div className="space-y-1">
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">チャージ</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">支払う</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">受け取る</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">ポイント履歴</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">寄付履歴</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">オーナーに渡す</a>
        </div>
      </div>

      {/* 登録店・加盟店管理 */}
      <div className="mb-8">
        <div className="px-6 mb-2 flex items-center gap-2">
          <Store className="w-5 h-5 text-gray-400" />
          <span className="font-medium">登録店・加盟店管理</span>
        </div>
        <div className="space-y-1">
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">新規登録</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block">スタッフ一覧</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block truncate">店舗名1</a>
          <a href="#" className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 block truncate">店舗名2長い店舗名長い店舗名</a>
        </div>
      </div>

      {/* レッスン一覧 */}
      <div className="mb-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className={`px-6 py-2 text-sm flex items-center justify-between ${
            isActive("/") ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <span>レッスン一覧</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>
        <div className="pl-4">
          {categories.map((category) => (
            <a
              key={`lesson-${category.path}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/?category=${category.path}`);
              }}
              className={`px-6 py-2 text-sm block ${
                location.search === `?category=${category.path}`
                  ? "bg-gray-50 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.label}
            </a>
          ))}
        </div>
      </div>

      {/* 動画管理 */}
      <div className="mb-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/videos");
          }}
          className={`px-6 py-2 text-sm flex items-center justify-between ${
            isActive("/videos") ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <span>動画管理</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>
        <div className="pl-4">
          {categories.map((category) => (
            <a
              key={`video-${category.path}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/videos?category=${category.path}`);
              }}
              className={`px-6 py-2 text-sm block ${
                location.pathname === '/videos' && location.search === `?category=${category.path}`
                  ? "bg-gray-50 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.label}
            </a>
          ))}
        </div>
      </div>

      {/* その他のメニュー項目 */}
      <div className="space-y-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/reservations");
          }}
          className={`px-6 py-2 text-sm flex items-center justify-between ${
            isActive("/reservations") ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <span>予約管理</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/media");
          }}
          className={`px-6 py-2 text-sm flex items-center justify-between ${
            isActive("/media") ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <span>メディア管理</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/profile");
          }}
          className={`px-6 py-2 text-sm flex items-center justify-between ${
            isActive("/profile") ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <span>マイプロフィール</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>

        {/* ユーザー情報 */}
        <div className="px-6 py-2 flex items-center gap-2">
          <User className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium">ユーザー情報</span>
        </div>

        {/* クレジットカード情報 */}
        <div className="px-6 py-2 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium">クレジットカード情報</span>
        </div>

        {/* ヘルプ */}
        <div className="px-6 py-2 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium">ヘルプ</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;