import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";

const VideoManagement = () => {
  const videos = Array(8).fill({
    title: "英語って楽しい！小学生から始める英会話",
    category: "子供向け",
    channel: "学習塾",
    tag: "英会話",
    status: "公開中",
    createdAt: "2024/10/28 10:25",
    updatedAt: "2024/10/31 9:00",
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">動画一覧</h1>
            <Button variant="default">動画登録</Button>
          </div>

          <div className="flex gap-4 mb-6 items-end">
            <div className="flex-1">
              <label className="block text-sm mb-2">キーワード検索</label>
              <Input type="text" placeholder="" />
            </div>
            <div className="w-48">
              <label className="block text-sm mb-2">ステータス</label>
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

          <div className="overflow-x-auto">
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {videos.map((video, index) => (
                  <TableRow key={index}>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <Button
                key={page}
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoManagement;