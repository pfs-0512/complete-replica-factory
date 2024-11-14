import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const ReservationManagement = () => {
  const reservations = [
    {
      userName: "sato_koji",
      email: "koji@a.jp",
      lessonName: "英語って楽しい！小学生から始める英会話",
      status: "予約受付中",
      openDateTime: "2024/10/28 10:25",
      reservationDateTime: "2024/10/31 9:00",
    },
  ].concat(Array(7).fill({
    userName: "sato_koji",
    email: "koji@a.jp",
    lessonName: "英語って楽しい！小学生から始める英会話",
    status: "予約受付中",
    openDateTime: "2024/10/28 10:25",
    reservationDateTime: "2024/10/31 9:00",
  }));

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">予約一覧</h1>
          <Button variant="default" onClick={() => window.location.href = "/videos/new"}>
            動画登録
          </Button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Input type="text" placeholder="キーワード検索" />
          </div>
          <div className="w-48">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="予約受付中" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accepting">予約受付中</SelectItem>
                <SelectItem value="closed">予約締切</SelectItem>
                <SelectItem value="completed">終了</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="default">
            <Search className="w-4 h-4 mr-2" />
            検索
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ユーザー名</TableHead>
                <TableHead>メールアドレス</TableHead>
                <TableHead>レッスン名</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>開催日時</TableHead>
                <TableHead>予約日時</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation, index) => (
                <TableRow key={index}>
                  <TableCell>{reservation.userName}</TableCell>
                  <TableCell>{reservation.email}</TableCell>
                  <TableCell>{reservation.lessonName}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                      {reservation.status}
                    </span>
                  </TableCell>
                  <TableCell>{reservation.openDateTime}</TableCell>
                  <TableCell>{reservation.reservationDateTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-center gap-2 py-4">
            <Button variant="outline" size="icon">{"<"}</Button>
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="icon"
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="icon">{">"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationManagement;