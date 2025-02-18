
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

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

  const FileInput = ({ label, onChange, accept, preview, aspectRatio = "aspect-[3/1]", isRounded = false }: {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept: string;
    preview: string;
    aspectRatio?: string;
    isRounded?: boolean;
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className={`relative group cursor-pointer ${aspectRatio} ${isRounded ? 'rounded-full' : 'rounded-lg'} overflow-hidden mb-2`}>
        {preview ? (
          <img
            src={preview}
            alt={label}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">画像なし</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center">
            <Upload className="w-6 h-6 mb-2" />
            <span className="text-sm">クリックして{label}を選択</span>
          </div>
        </div>
        <Input
          type="file"
          accept={accept}
          onChange={onChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-8">プロフィール編集</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <FileInput
                label="カバー写真"
                accept="image/*"
                preview={profile.coverImage}
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

              <FileInput
                label="プロフィール画像"
                accept="image/*"
                preview={profile.profileImage || defaultProfileImage}
                aspectRatio="aspect-square"
                isRounded={true}
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
