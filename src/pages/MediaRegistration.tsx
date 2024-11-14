import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "@/components/Sidebar";
import { useNavigate } from "react-router-dom";

const MediaRegistration = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/media");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">メディア登録</h1>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">メディアタイトル</label>
            <Input type="text" className="w-full" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">メディア概要</label>
            <Textarea className="min-h-[150px]" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">メディア</label>
            <div className="mt-2">
              <Button type="button" variant="outline">
                ファイルを選択
              </Button>
            </div>
            <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 h-[300px] flex items-center justify-center">
              <div className="text-gray-500">プレビュー</div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-gray-900">
              登録
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MediaRegistration;