
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    nickname: "山田 太郎",
    coverImage: "",
    profileImage: "",
    bio: "はじめまして。プログラミング講師をしています。",
  });

  const defaultProfileImage = "/lovable-uploads/0ed36b17-f298-4ac5-9b4b-15802bfab8d0.png";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "プロフィールを更新しました",
      description: "変更内容が保存されました。",
    });
    navigate("/profile");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="w-full max-w-3xl">
          <h1 className="text-2xl font-semibold mb-8">プロフィール編集</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  カバー写真
                </label>
                <div className="aspect-[3/1] rounded-lg bg-gray-200 overflow-hidden mb-2">
                  {profile.coverImage ? (
                    <img
                      src={profile.coverImage}
                      alt="カバー写真"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      カバー写真なし
                    </div>
                  )}
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfile(prev => ({
                          ...prev,
                          coverImage: reader.result as string
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  プロフィール画像
                </label>
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                  <img
                    src={profile.profileImage || defaultProfileImage}
                    alt="プロフィール画像"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfile(prev => ({
                          ...prev,
                          profileImage: reader.result as string
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ニックネーム
                </label>
                <Input
                  value={profile.nickname}
                  onChange={(e) => setProfile(prev => ({ ...prev, nickname: e.target.value }))}
                  placeholder="ニックネームを入力"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  プロフィール文
                </label>
                <Textarea
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="自己紹介文を入力"
                  className="min-h-[150px]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/profile")}
              >
                キャンセル
              </Button>
              <Button type="submit">保存</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileEdit;
