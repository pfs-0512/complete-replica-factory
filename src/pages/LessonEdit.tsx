import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Sidebar from "@/components/Sidebar";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const LessonEdit = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // この部分は実際のAPIと連携する際にuseQueryなどで置き換えることを想定
  const mockLesson = {
    title: "英語って楽しい！小学生から始める英会話",
    zoomUrl: "https://zoom.us/j/123456789",
    date: "2024-03-20",
    startTime: "10:00",
    endTime: "11:00",
    capacity: 10,
    categories: ["子供向け"],
    channels: ["英会話"],
    tags: "英会話,初心者",
    description: "楽しく英語を学びましょう！",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "レッスンを更新しました",
      description: "レッスンの内容が正常に更新されました。",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">レッスン編集</h1>
            <div className="space-x-4">
              <Button variant="outline">下書き保存</Button>
              <Button onClick={handleSubmit}>更新</Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">レッスンタイトル</label>
                <Input type="text" defaultValue={mockLesson.title} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZOOM URL</label>
                <Input type="url" defaultValue={mockLesson.zoomUrl} />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">開催日</label>
                  <Input type="date" defaultValue={mockLesson.date} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">開始時刻</label>
                  <Input type="time" defaultValue={mockLesson.startTime} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">終了時刻</label>
                  <Input type="time" defaultValue={mockLesson.endTime} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">募集人数</label>
                <Input type="number" min="1" className="w-32" defaultValue={mockLesson.capacity} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">サムネイル</label>
                <Input type="file" accept="image/*" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">カテゴリ</label>
                <div className="flex gap-6">
                  {["親子向け", "子供向け", "保護者向け"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={category} 
                        defaultChecked={mockLesson.categories.includes(category)}
                      />
                      <label htmlFor={category} className="text-sm text-gray-600">{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">チャネル</label>
                <div className="flex gap-6 flex-wrap">
                  {["プログラミング", "サッカー", "ダンス", "美容", "英会話"].map((channel) => (
                    <div key={channel} className="flex items-center space-x-2">
                      <Checkbox 
                        id={channel} 
                        defaultChecked={mockLesson.channels.includes(channel)}
                      />
                      <label htmlFor={channel} className="text-sm text-gray-600">{channel}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">タグ</label>
                <Input type="text" defaultValue={mockLesson.tags} placeholder="カンマ区切りでタグを入力" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">レッスン概要</label>
                <Textarea 
                  className="min-h-[200px]" 
                  defaultValue={mockLesson.description}
                  placeholder="レッスンの詳細な説明を入力してください" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonEdit;