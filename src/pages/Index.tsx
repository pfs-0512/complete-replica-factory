import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import Sidebar from "@/components/Sidebar";
import LessonTable from "@/components/LessonTable";

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [status, setStatus] = useState("予約受付中");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">レッスン一覧</h1>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              レッスン登録
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="キーワード検索"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full"
              />
            </div>
            <Select
              value={status}
              onValueChange={setStatus}
              className="w-48"
            >
              <option value="予約受付中">予約受付中</option>
              <option value="予約締切">予約締切</option>
              <option value="終了">終了</option>
              <option value="非公開">非公開</option>
            </Select>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              検索
            </Button>
          </div>

          <LessonTable />
        </div>
      </main>
    </div>
  );
};

export default Index;