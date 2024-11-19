import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";
import VideoDetailModal from "@/components/VideoDetailModal";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const VideoManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const { toast } = useToast();

  // Get category from URL search params
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');

  // Map category paths to labels
  const categoryMap: Record<string, string> = {
    'children': '子ども向け',
    'parent-child': '親子向け',
    'parents': '親御さん向け'
  };

  // モックデータ
  const videos = [
    {
      id: 1,
      title: "英語って楽しい！小学生から始める英会話",
      type: "image",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "プログラミング講座のメイン画像です。",
      category: "子ども向け",
      createdAt: "2024-02-20",
    },
    {
      id: 2,
      title: "親子で楽しむプログラミング入門",
      type: "image",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "オンライン授業の様子を撮影した画像です。",
      category: "親子向け",
      createdAt: "2024-02-19",
    },
    {
      id: 3,
      title: "子育ての悩み相談会",
      type: "image",
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "開発環境のセットアップ画面です。",
      category: "親御さん向け",
      createdAt: "2024-02-18",
    },
  ];

  // Filter videos based on category
  const filteredVideos = categoryParam
    ? videos.filter(video => video.category === categoryMap[categoryParam])
    : videos;

  const handleDelete = (id: number) => {
    toast({
      title: "メディアを削除しました",
      description: `ID: ${id} のメディアを削除しました。`,
    });
  };

  const handleRowClick = (e: React.MouseEvent, video: any) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setSelectedVideo(video);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">動画一覧</h1>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white gap-2"
            onClick={() => navigate("/videos/new")}
          >
            <Plus className="w-4 h-4" />
            動画登録
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
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="cursor-pointer"
                onClick={(e) => handleRowClick(e, video)}
              >
                <div className="relative aspect-video group">
                  <img
                    src={video.url}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded-lg">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => navigate(`/videos/edit/${video.id}`)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleDelete(video.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="font-medium truncate">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.category}</p>
                  <p className="text-sm text-gray-400">{video.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <VideoDetailModal
        video={selectedVideo}
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default VideoManagement;