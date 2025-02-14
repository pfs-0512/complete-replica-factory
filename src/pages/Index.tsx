
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import LessonTable from "@/components/LessonTable";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [status, setStatus] = useState("予約受付中");
  const navigate = useNavigate();
  const { toast } = useToast();

  // モックデータ
  const mockLessons = [
    {
      id: 1,
      title: "プログラミング入門",
      date: "2024/03/20",
      startTime: "14:00",
      endTime: "15:30",
      capacity: 10,
      reservationCount: 5,
      status: "予約受付中",
      category: "子ども向け",
      cancellationDeadline: "2024/03/19 17:00",
      channel: "プログラミング",
      tag: "初心者向け",
      createdAt: "2024/03/01 10:00",
      updatedAt: "2024/03/01 10:00",
    },
    {
      id: 2,
      title: "親子で楽しむダンス",
      date: "2024/03/22",
      startTime: "10:00",
      endTime: "11:30",
      capacity: 15,
      reservationCount: 12,
      status: "予約締切",
      category: "親子向け",
      cancellationDeadline: "2024/03/21 12:00",
      channel: "ダンス",
      tag: "親子参加",
      createdAt: "2024/03/02 11:00",
      updatedAt: "2024/03/02 11:00",
    },
  ];

  const handleSearch = () => {
    // 検索処理の実装（現在はモックデータを使用）
    toast({
      title: "検索実行",
      description: `キーワード: ${searchKeyword}, ステータス: ${status}`,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">レッスン一覧</h1>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white gap-2"
              onClick={() => navigate("/lessons/new")}
            >
              <Plus className="w-4 h-4" />
              レッスン登録
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="キーワード検索"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="ステータス" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="予約受付中">予約受付中</SelectItem>
                  <SelectItem value="予約締切">予約締切</SelectItem>
                  <SelectItem value="終了">終了</SelectItem>
                  <SelectItem value="非公開">非公開</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white gap-2"
                onClick={handleSearch}
              >
                <Search className="w-4 h-4" />
                検索
              </Button>
            </div>

            <LessonTable lessons={mockLessons} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
