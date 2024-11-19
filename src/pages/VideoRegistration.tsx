import Sidebar from "@/components/Sidebar";
import VideoForm from "@/components/video/VideoForm";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const VideoRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDraftSave = () => {
    toast({
      title: "下書き保存しました",
      description: "動画を下書き保存しました。",
    });
    navigate("/videos");
  };

  const handlePublish = () => {
    toast({
      title: "公開しました",
      description: "動画を公開しました。",
    });
    navigate("/videos");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <VideoForm 
            onDraftSave={handleDraftSave}
            onPublish={handlePublish}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoRegistration;