import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/Sidebar";
import { useNavigate } from "react-router-dom";

const MediaManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">メディア一覧</h1>
          <Button 
            variant="default" 
            className="bg-gray-900"
            onClick={() => navigate("/media/new")}
          >
            メディア登録
          </Button>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="キーワード検索"
              className="w-full"
            />
          </div>
          <div className="w-40">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="画像" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="image">画像</SelectItem>
                <SelectItem value="video">動画</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>検索</Button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 36 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg"
            />
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
      </main>
    </div>
  );
};

export default MediaManagement;