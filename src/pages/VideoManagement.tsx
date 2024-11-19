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
      type: "video",
      url: "https://example.com/video1",
      description: "プログラミング講座のメイン画像です。",
      category: "子ども向け",
      createdAt: "2024-02-20",
      status: "公開中"
    },
    {
      id: 2,
      title: "親子で楽しむプログラミング入門",
      type: "video",
      url: "https://example.com/video2",
      description: "オンライン授業の様子を撮影した画像です。",
      category: "親子向け",
      createdAt: "2024-02-19",
      status: "下書き"
    },
    {
      id: 3,
      title: "子育ての悩み相談会",
      type: "video",
      url: "https://example.com/video3",
      description: "開発環境のセットアップ画面です。",
      category: "親御さん向け",
      createdAt: "2024-02-18",
      status: "非公開"
    },
  ];

  // Filter videos based on category
  const filteredVideos = categoryParam
    ? videos.filter(video => video.category === categoryMap[categoryParam])
    : videos;

  const handleDelete = (id: number) => {
    toast({
      title: "動画を削除しました",
      description: `ID: ${id} の動画を削除しました。`,
    });
  };

  const handleRowClick = (video: any) => {
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

          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>タイトル</TableHead>
                  <TableHead>カテゴリー</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>作成日</TableHead>
                  <TableHead className="w-[100px]">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVideos.map((video) => (
                  <TableRow 
                    key={video.id}
                    className="cursor-pointer"
                    onClick={() => handleRowClick(video)}
                  >
                    <TableCell>{video.title}</TableCell>
                    <TableCell>{video.category}</TableCell>
                    <TableCell>{video.status}</TableCell>
                    <TableCell>{video.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/videos/edit/${video.id}`);
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(video.id);
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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