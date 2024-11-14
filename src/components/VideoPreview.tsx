import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPreviewProps {
  url: string;
}

const VideoPreview = ({ url }: VideoPreviewProps) => {
  // YouTube URLからvideo IDを抽出する
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(url);

  if (!url || !videoId) {
    return null;
  }

  return (
    <div className="w-full">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </AspectRatio>
    </div>
  );
};

export default VideoPreview;