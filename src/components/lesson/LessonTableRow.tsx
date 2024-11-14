import { BookOpen, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonTableRowProps {
  lesson: any;
  index: number;
  onSelect: (lesson: any) => void;
  onEdit: (index: number) => void;
}

const LessonTableRow = ({ lesson, index, onSelect, onEdit }: LessonTableRowProps) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "下書き":
        return "bg-gray-50 text-gray-700";
      case "予約受付中":
        return "bg-green-50 text-green-700";
      case "予約締切":
        return "bg-yellow-50 text-yellow-700";
      case "終了":
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const handleRowClick = (e: React.MouseEvent) => {
    // 編集ボタンがクリックされた場合は、行のクリックイベントを発火させない
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    onSelect(lesson);
  };

  return (
    <tr 
      className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer" 
      onClick={handleRowClick}
    >
      <td className="table-cell">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gray-400" />
          {lesson.title}
        </div>
      </td>
      <td className="table-cell">
        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
          {lesson.category}
        </span>
      </td>
      <td className="table-cell">{lesson.channel}</td>
      <td className="table-cell">
        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
          {lesson.tag}
        </span>
      </td>
      <td className="table-cell">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(lesson.status)}`}>
          {lesson.status}
        </span>
      </td>
      <td className="table-cell text-gray-500">{lesson.createdAt}</td>
      <td className="table-cell text-gray-500">{lesson.updatedAt}</td>
      <td className="table-cell">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(index)}
        >
          <Pencil className="w-4 h-4 mr-1" />
          編集
        </Button>
      </td>
    </tr>
  );
};

export default LessonTableRow;