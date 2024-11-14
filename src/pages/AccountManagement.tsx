import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/components/ui/use-toast";
import { Pencil, Trash2, UserPlus } from "lucide-react";

const AccountManagement = () => {
  const { toast } = useToast();
  
  // この部分は実際のAPIと連携する際にuseQueryなどで置き換えることを想定
  const mockUsers = [
    {
      id: 1,
      name: "山田 太郎",
      email: "yamada@example.com",
      role: "管理者",
      status: "有効",
      lastLogin: "2024/03/20 15:30",
    },
    {
      id: 2,
      name: "佐藤 花子",
      email: "sato@example.com",
      role: "一般ユーザー",
      status: "有効",
      lastLogin: "2024/03/19 12:45",
    },
    {
      id: 3,
      name: "鈴木 一郎",
      email: "suzuki@example.com",
      role: "一般ユーザー",
      status: "停止中",
      lastLogin: "2024/03/15 09:20",
    },
  ];

  const handleStatusChange = (userId: number, newStatus: string) => {
    toast({
      title: "ステータスを更新しました",
      description: `ユーザーID: ${userId} のステータスを ${newStatus} に変更しました。`,
    });
  };

  const handleDelete = (userId: number) => {
    toast({
      title: "ユーザーを削除しました",
      description: `ユーザーID: ${userId} を削除しました。`,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">アカウント管理</h1>
          <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
            <UserPlus className="w-4 h-4" />
            新規ユーザー登録
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <Input type="text" placeholder="ユーザー名・メールアドレスで検索" />
            </div>
            <div className="w-48">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ステータス" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">有効</SelectItem>
                  <SelectItem value="suspended">停止中</SelectItem>
                  <SelectItem value="all">すべて</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>検索</Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ユーザー名</TableHead>
                  <TableHead>メールアドレス</TableHead>
                  <TableHead>権限</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>最終ログイン</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Select
                        defaultValue={user.status === "有効" ? "active" : "suspended"}
                        onValueChange={(value) =>
                          handleStatusChange(
                            user.id,
                            value === "active" ? "有効" : "停止中"
                          )
                        }
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">有効</SelectItem>
                          <SelectItem value="suspended">停止中</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-500"
                          onClick={() => handleDelete(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
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

export default AccountManagement;