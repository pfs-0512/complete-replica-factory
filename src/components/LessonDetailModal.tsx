import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LessonReservationList from "./lesson/LessonReservationList";

interface LessonDetailModalProps {
  lesson: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LessonDetailModal = ({ lesson, open, onOpenChange }: LessonDetailModalProps) => {
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

  if (!lesson) return null;

  // モックデータ - 実際の実装では、このデータはpropsまたはAPIから取得します
  const mockReservations = [
    {
      userName: "田中太郎",
      email: "tanaka@example.com",
      reservationDateTime: "2024/03/15 14:30",
    },
    {
      userName: "山田花子",
      email: "yamada@example.com",
      reservationDateTime: "2024/03/15 15:00",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{lesson.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-1">レッスンタイトル</h3>
            <p>{lesson.title}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">ZOOM URL</h3>
            <p className="text-blue-600 hover:underline">
              <a href={lesson.zoomUrl} target="_blank" rel="noopener noreferrer">
                {lesson.zoomUrl || "未設定"}
              </a>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium text-gray-700 mb-1">開催日</h3>
              <p>{lesson.date || "未設定"}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-1">開始時刻</h3>
              <p>{lesson.startTime || "未設定"}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-1">終了時刻</h3>
              <p>{lesson.endTime || "未設定"}</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">募集人数</h3>
            <p>{lesson.capacity || "未設定"}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">カテゴリ</h3>
            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
              {lesson.category}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">チャネル</h3>
            <p>{lesson.channel}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">タグ</h3>
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {lesson.tag}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">ステータス</h3>
            <span className={`px-2 py-1 rounded-full text-sm ${getStatusStyle(lesson.status)}`}>
              {lesson.status}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">レッスン概要</h3>
            <p className="whitespace-pre-wrap">{lesson.description || "未設定"}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">予約者一覧</h3>
            <LessonReservationList reservations={mockReservations} />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">作成日時</h3>
            <p className="text-gray-600">{lesson.createdAt}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">更新日時</h3>
            <p className="text-gray-600">{lesson.updatedAt}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LessonDetailModal;