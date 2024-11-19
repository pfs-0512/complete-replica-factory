import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

interface VideoTableRowProps {
  video: any;
  onRowClick: (video: any) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const VideoTableRow = ({ video, onRowClick, onDelete, onEdit }: VideoTableRowProps) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "公開中":
        return "bg-green-50 text-green-700";
      case "非公開":
        return "bg-gray-50 text-gray-700";
      case "下書き":
        return "bg-yellow-50 text-yellow-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <TableRow
      className="cursor-pointer hover:bg-gray-50"
      onClick={() => onRowClick(video)}
    >
      <TableCell>{video.title}</TableCell>
      <TableCell>
        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
          {video.category}
        </span>
      </TableCell>
      <TableCell>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(video.status)}`}>
          {video.status}
        </span>
      </TableCell>
      <TableCell>{video.createdAt}</TableCell>
      <TableCell>{video.updatedAt}</TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(video.id);
            }}
          >
            <Pencil className="w-4 h-4 mr-1" />
            編集
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(video.id);
            }}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            削除
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default VideoTableRow;