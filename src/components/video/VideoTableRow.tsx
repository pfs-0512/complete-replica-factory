import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoTableRowProps {
  video: any;
  onRowClick: (video: any) => void;
  onEdit: (e: React.MouseEvent, id: number) => void;
}

const VideoTableRow = ({ video, onRowClick, onEdit }: VideoTableRowProps) => {
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
    <tr
      className="cursor-pointer hover:bg-gray-50"
      onClick={() => onRowClick(video)}
    >
      <td className="table-cell">{video.title}</td>
      <td className="table-cell">
        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
          {video.category}
        </span>
      </td>
      <td className="table-cell">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(video.status)}`}>
          {video.status}
        </span>
      </td>
      <td className="table-cell">{video.createdAt}</td>
      <td className="table-cell">{video.updatedAt}</td>
      <td className="table-cell">
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => onEdit(e, video.id)}
        >
          <Pencil className="w-4 h-4 mr-1" />
          編集
        </Button>
      </td>
    </tr>
  );
};

export default VideoTableRow;