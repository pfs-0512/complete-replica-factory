import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const VideoTableHeader = () => (
  <TableHeader>
    <TableRow>
      <TableHead>タイトル</TableHead>
      <TableHead>カテゴリー</TableHead>
      <TableHead>ステータス</TableHead>
      <TableHead>作成日</TableHead>
      <TableHead>更新日</TableHead>
      <TableHead>操作</TableHead>
    </TableRow>
  </TableHeader>
);

export default VideoTableHeader;