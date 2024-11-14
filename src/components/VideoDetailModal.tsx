import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import VideoPreview from "./VideoPreview";

interface VideoDetailModalProps {
  video: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoDetailModal = ({ video, open, onOpenChange }: VideoDetailModalProps) => {
  if (!video) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{video.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-1">動画タイトル</h3>
            <p>{video.title}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">動画URL</h3>
            <p className="text-blue-600 hover:underline">
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                {video.videoUrl}
              </a>
            </p>
          </div>
          {video.videoUrl && (
            <div>
              <h3 className="font-medium text-gray-700 mb-1">プレビュー</h3>
              <VideoPreview url={video.videoUrl} />
            </div>
          )}
          <div>
            <h3 className="font-medium text-gray-700 mb-1">カテゴリ</h3>
            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
              {video.category}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">チャネル</h3>
            <p>{video.channel}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">タグ</h3>
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {video.tag}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">ステータス</h3>
            <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-sm">
              {video.status}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">動画概要</h3>
            <p className="whitespace-pre-wrap">{video.description || "未設定"}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">作成日時</h3>
            <p className="text-gray-600">{video.createdAt}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">更新日時</h3>
            <p className="text-gray-600">{video.updatedAt}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDetailModal;