import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Sidebar from "@/components/Sidebar";
import VideoPreview from "@/components/VideoPreview";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const VideoEdit = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // この部分は実際のAPIと連携する際にuseQueryなどで置き換えることを想定
  const mockVideo = {
    title: "英語って楽しい！小学生から始める英会話",
    videoUrl: "https://youtube.com/watch?v=123456789",
    categories: ["子供向け"],
    channels: ["英会話"],
    tags: "英会話,初心者",
    description: "楽しく英語を学びましょう！",
  };

  const [videoUrl, setVideoUrl] = useState(mockVideo.videoUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "動画を更新しました",
      description: "動画の内容が正常に更新されました。",
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">動画編集</h1>
            <div className="space-x-4">
              <Button variant="outline">下書き保存</Button>
              <Button onClick={handleSubmit}>更新</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">動画タイトル</label>
              <Input type="text" defaultValue={mockVideo.title} />
            </div>

            <div>
              <label className="block text-sm mb-2">動画URL</label>
              <Input 
                type="url" 
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>

            {videoUrl && (
              <div>
                <label className="block text-sm mb-2">プレビュー</label>
                <VideoPreview url={videoUrl} />
              </div>
            )}

            <div>
              <label className="block text-sm mb-2">サムネイル</label>
              <Button variant="secondary">ファイルを選択</Button>
            </div>

            <div>
              <label className="block text-sm mb-2">カテゴリ</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="parent" 
                    defaultChecked={mockVideo.categories.includes("親子向け")}
                  />
                  <span>親子向け</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="children" 
                    defaultChecked={mockVideo.categories.includes("子供向け")}
                  />
                  <span>子供向け</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="guardian" 
                    defaultChecked={mockVideo.categories.includes("保護者向け")}
                  />
                  <span>保護者向け</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">チャネル</label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="programming" 
                    defaultChecked={mockVideo.channels.includes("プログラミング")}
                  />
                  <span>プログラミング</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="soccer" 
                    defaultChecked={mockVideo.channels.includes("サッカー")}
                  />
                  <span>サッカー</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="dance" 
                    defaultChecked={mockVideo.channels.includes("ダンス")}
                  />
                  <span>ダンス</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="beauty" 
                    defaultChecked={mockVideo.channels.includes("美容")}
                  />
                  <span>美容</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    id="english" 
                    defaultChecked={mockVideo.channels.includes("英会話")}
                  />
                  <span>英会話</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">タグ</label>
              <Input type="text" defaultValue={mockVideo.tags} />
            </div>

            <div>
              <label className="block text-sm mb-2">動画概要</label>
              <Textarea 
                className="min-h-[200px]" 
                defaultValue={mockVideo.description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEdit;