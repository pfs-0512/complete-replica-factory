import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import { useNavigate } from "react-router-dom";
import { Plus, Image, Film, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const MediaManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // モックデータ
  const mediaItems = [
    {
      id: 1,
      title: "プログラミング講座サムネイル",
      type: "image",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "プログラミング講座のメイン画像です。",
      createdAt: "2024-02-20",
    },
    {
      id: 2,
      title: "オンライン授業風景",
      type: "image",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "オンライン授業の様子を撮影した画像です。",
      createdAt: "2024-02-19",
    },
    {
      id: 3,
      title: "プログラミング環境",
      type: "image",
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "開発環境のセットアップ画面です。",
      createdAt: "2024-02-18",
    },
  ];

  const handleDelete = (id: number) => {
    toast({
      title: "メディアを削除しました",
      description: `ID: ${id} のメディアを削除しました。`,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">メディア一覧</h1>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white gap-2"
            onClick={() => navigate("/media/new")}
          >
            <Plus className="w-4 h-4" />
            メディア登録
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <Input type="text" placeholder="キーワード検索" />
            </div>
            <div className="w-40">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="すべて" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべて</SelectItem>
                  <SelectItem value="image">画像</SelectItem>
                  <SelectItem value="video">動画</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>検索</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative aspect-video group">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => navigate(`/media/edit/${item.id}`)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === "image" ? (
                      <Image className="w-4 h-4 text-gray-500" />
                    ) : (
                      <Film className="w-4 h-4 text-gray-500" />
                    )}
                    <h3 className="font-medium truncate">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <p className="text-sm text-gray-400">{item.createdAt}</p>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {['<', '1', '2', '3', '4', '5', '6', '>'].map((page) => (
              <Button
                key={page}
                variant={page === '1' ? 'default' : 'outline'}
                className="w-10 h-10 p-0"
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaManagement;