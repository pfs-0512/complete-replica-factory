import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Sidebar from "@/components/Sidebar";

const LessonRegistration = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">レッスン登録</h1>
            <div className="space-x-4">
              <Button variant="outline">下書き保存</Button>
              <Button>公開</Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">レッスンタイトル</label>
                <Input type="text" placeholder="レッスンタイトルを入力" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZOOM URL</label>
                <Input type="url" placeholder="https://zoom.us/..." />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">開催日</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">開始時刻</label>
                  <Input type="time" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">終了時刻</label>
                  <Input type="time" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">募集人数</label>
                  <Input type="number" min="1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">キャンセル期限（時間）</label>
                  <Input 
                    type="number" 
                    min="0" 
                    max="72"
                    placeholder="例: 24（開催24時間前まで）" 
                  />
                </div>
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
                      <Checkbox id={category} />
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
                      <Checkbox id={channel} />
                      <label htmlFor={channel} className="text-sm text-gray-600">{channel}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">タグ</label>
                <Input type="text" placeholder="カンマ区切りでタグを入力" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">レッスン概要</label>
                <Textarea className="min-h-[200px]" placeholder="レッスンの詳細な説明を入力してください" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonRegistration;