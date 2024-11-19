import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import VideoBasicInfo from "./VideoBasicInfo";
import VideoCategories from "./VideoCategories";
import VideoChannels from "./VideoChannels";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  videoUrl: z.string().url("有効なURLを入力してください").optional(),
});

interface VideoFormProps {
  onDraftSave: () => void;
  onPublish: () => void;
}

const VideoForm = ({ onDraftSave, onPublish }: VideoFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoUrl: "",
    },
  });

  return (
    <Form {...form}>
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">動画登録</h1>
          <div className="space-x-4">
            <Button variant="outline" onClick={onDraftSave}>下書き保存</Button>
            <Button onClick={onPublish}>公開</Button>
          </div>
        </div>
        <VideoBasicInfo form={form} />
        <VideoCategories />
        <VideoChannels />
      </div>
    </Form>
  );
};

export default VideoForm;