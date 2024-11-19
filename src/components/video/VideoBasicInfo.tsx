import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import VideoPreview from "@/components/VideoPreview";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { UseFormReturn } from "react-hook-form";

interface VideoBasicInfoProps {
  form: UseFormReturn<any>;
}

const VideoBasicInfo = ({ form }: VideoBasicInfoProps) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('video/')) {
        toast({
          title: "エラー",
          description: "動画ファイルのみアップロード可能です。",
          variant: "destructive",
        });
        return;
      }
      setVideoFile(file);
      setUploadProgress(0);
    }
  };

  return (
    <>
      <div>
        <label className="block text-sm mb-2">動画タイトル</label>
        <Input type="text" />
      </div>

      <div>
        <label className="block text-sm mb-2">動画ファイル</label>
        <div className="space-y-4">
          <Input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
          />
          {videoFile && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                選択されたファイル: {videoFile.name}
              </p>
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}
        </div>
      </div>

      <FormField
        control={form.control}
        name="videoUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>動画URL（YouTube）</FormLabel>
            <FormControl>
              <Input 
                type="url" 
                placeholder="YouTubeのURLを入力（任意）"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {form.watch("videoUrl") && (
        <div>
          <label className="block text-sm mb-2">プレビュー</label>
          <VideoPreview url={form.watch("videoUrl")} />
        </div>
      )}

      <div>
        <label className="block text-sm mb-2">サムネイル</label>
        <Input
          type="file"
          accept="image/*"
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
        />
      </div>

      <div>
        <label className="block text-sm mb-2">タグ</label>
        <Input type="text" placeholder="カンマ区切りでタグを入力" />
      </div>

      <div>
        <label className="block text-sm mb-2">動画概要</label>
        <Textarea className="min-h-[200px]" />
      </div>
    </>
  );
};

export default VideoBasicInfo;