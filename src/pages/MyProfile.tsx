import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/components/ui/use-toast";

const MyProfile = () => {
  const { toast } = useToast();
  
  // モックユーザーデータ - 実際の実装では認証システムから取得
  const mockUser = {
    name: "山田 太郎",
    email: "yamada@example.com",
    role: "管理者",
    lastLogin: "2024/03/20 15:30"
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-8">マイプロフィール</h1>
        
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>ユーザー情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">名前</label>
              <p className="mt-1">{mockUser.name}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500">メールアドレス</label>
              <p className="mt-1">{mockUser.email}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500">権限</label>
              <p className="mt-1">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  {mockUser.role}
                </span>
              </p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500">最終ログイン</label>
              <p className="mt-1">{mockUser.lastLogin}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyProfile;