
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  
  // モックユーザーデータ - 実際の実装では認証システムから取得
  const mockUser = {
    name: "山田 太郎",
    email: "yamada@example.com",
    role: "管理者",
    lastLogin: "2024/03/20 15:30",
    profileImage: "",
    coverImage: "",
    bio: "はじめまして。プログラミング講師をしています。"
  };

  const defaultProfileImage = "/lovable-uploads/0ed36b17-f298-4ac5-9b4b-15802bfab8d0.png";

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">マイプロフィール</h1>
            <Button onClick={() => navigate("/profile/edit")}>
              プロフィール編集
            </Button>
          </div>
          
          <Card>
            <div className="aspect-[3/1] relative overflow-hidden rounded-t-lg">
              {mockUser.coverImage ? (
                <img
                  src={mockUser.coverImage}
                  alt="カバー写真"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>

            <div className="px-6 -mt-12 mb-6 relative">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
                <img
                  src={mockUser.profileImage || defaultProfileImage}
                  alt="プロフィール画像"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">名前</label>
                <p className="mt-1 text-lg font-semibold">{mockUser.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">メールアドレス</label>
                <p className="mt-1">{mockUser.email}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">権限</label>
                <p className="mt-1">
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {mockUser.role}
                  </span>
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">最終ログイン</label>
                <p className="mt-1">{mockUser.lastLogin}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">自己紹介</label>
                <p className="mt-1 whitespace-pre-wrap">{mockUser.bio}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
