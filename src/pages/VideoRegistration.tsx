import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Sidebar from "@/components/Sidebar";

const VideoRegistration = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">動画登録</h1>
            <div className="space-x-4">
              <Button variant="outline">下書き保存</Button>
              <Button>公開</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">動画タイトル</label>
              <Input type="text" />
            </div>

            <div>
              <label className="block text-sm mb-2">動画URL</label>
              <Input type="url" />
            </div>

            <div>
              <label className="block text-sm mb-2">サムネイル</label>
              <Button variant="secondary">ファイルを選択</Button>
            </div>

            <div>
              <label className="block text-sm mb-2">カテゴリ</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <Checkbox id="parent" />
                  <span>親子向け</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="children" />
                  <span>子供向け</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="guardian" />
                  <span>保護者向け</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">チャネル</label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center space-x-2">
                  <Checkbox id="programming" />
                  <span>プログラミング</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="soccer" />
                  <span>サッカー</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="dance" />
                  <span>ダンス</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="beauty" />
                  <span>美容</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="english" />
                  <span>英会話</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">タグ</label>
              <Input type="text" />
            </div>

            <div>
              <label className="block text-sm mb-2">動画概要</label>
              <Textarea className="min-h-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRegistration;