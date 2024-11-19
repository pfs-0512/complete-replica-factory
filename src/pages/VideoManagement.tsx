import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";
import VideoDetailModal from "@/components/VideoDetailModal";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus } from "lucide-react";
import { useState } from "react";
import VideoTableHeader from "@/components/video/VideoTableHeader";
import VideoTableRow from "@/components/video/VideoTableRow";

const VideoManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

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
      description: "プログラミング講座のメイン動画です。",
      category: "子ども向け",
      status: "公開中",
      createdAt: "2024-02-20",
      updatedAt: "2024-02-20"
    },
    {
      id: 2,
      title: "親子で楽しむプログラミング入門",
      type: "video",
      url: "https://example.com/video2",
      description: "オンライン授業の様子を撮影した動画です。",
      category: "親子向け",
      status: "非公開",
      createdAt: "2024-02-19",
      updatedAt: "2024-02-19"
    },
    {
      id: 3,
      title: "子育ての悩み相談会",
      type: "video",
      url: "https://example.com/video3",
      description: "開発環境のセットアップ動画です。",
      category: "親御さん向け",
      status: "下書き",
      createdAt: "2024-02-18",
      updatedAt: "2024-02-18"
    },
  ];

  // Filter videos based on category
  const filteredVideos = categoryParam
    ? videos.filter(video => video.category === categoryMap[categoryParam])
    : videos;

  const handleEdit = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    navigate(`/videos/edit/${id}`);
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
                  <SelectItem value="video">動画</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>検索</Button>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[1000px]">
              <Table>
                <VideoTableHeader />
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredVideos.map((video) => (
                    <VideoTableRow
                      key={video.id}
                      video={video}
                      onRowClick={handleRowClick}
                      onEdit={handleEdit}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
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
