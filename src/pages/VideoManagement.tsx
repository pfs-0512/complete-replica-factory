import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";
import VideoDetailModal from "@/components/VideoDetailModal";
import { useNavigate } from "react-router-dom";
import { Plus, Pencil } from "lucide-react";
import { useState } from "react";

const VideoManagement = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const videos = Array(8).fill({
    id: 1,
    title: "英語って楽しい！小学生から始める英会話",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "子供向け",
    channel: "学習塾",
    tag: "英会話",
    status: "公開中",
    description: "楽しく英語を学びましょう！",
    createdAt: "2024/10/28 10:25",
    updatedAt: "2024/10/31 9:00",
  });

  const handleRowClick = (e: React.MouseEvent, video: any) => {
    // 編集ボタンがクリックされた場合は、行のクリックイベントを発火させない
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
            <div className="w-48">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="公開中" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">公開中</SelectItem>
                  <SelectItem value="draft">下書き</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>検索</Button>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[1000px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>タイトル</TableHead>
                    <TableHead>カテゴリ</TableHead>
                    <TableHead>チャネル</TableHead>
                    <TableHead>タグ</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead>作成日時</TableHead>
                    <TableHead>更新日時</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {videos.map((video, index) => (
                    <TableRow 
                      key={index}
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={(e) => handleRowClick(e, video)}
                    >
                      <TableCell>{video.title}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                          {video.category}
                        </span>
                      </TableCell>
                      <TableCell>{video.channel}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {video.tag}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                          {video.status}
                        </span>
                      </TableCell>
                      <TableCell>{video.createdAt}</TableCell>
                      <TableCell>{video.updatedAt}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/videos/edit/${video.id}`)}
                        >
                          <Pencil className="w-4 h-4 mr-1" />
                          編集
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
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