import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const MediaEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // モックデータ (実際の実装では、APIからデータを取得します)
  const [media] = useState({
    id: 1,
    title: "プログラミング講座サムネイル",
    type: "image",
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "プログラミング講座のメイン画像です。",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "メディアを更新しました",
      description: "メディアの内容が正常に更新されました。",
    });
    navigate("/media");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">メディア編集</h1>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">タイトル</label>
                <Input defaultValue={media.title} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">タイプ</label>
                <Select defaultValue={media.type}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">画像</SelectItem>
                    <SelectItem value="video">動画</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">プレビュー</label>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={media.url}
                    alt={media.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  メディアファイル
                </label>
                <div className="mt-2">
                  <Button type="button" variant="outline">
                    ファイルを選択
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">説明</label>
                <Textarea defaultValue={media.description} className="min-h-[100px]" />
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/media")}
                >
                  キャンセル
                </Button>
                <Button type="submit">更新</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MediaEdit;