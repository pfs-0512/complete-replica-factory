import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Sidebar from "@/components/Sidebar";
import VideoPreview from "@/components/VideoPreview";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  videoUrl: z.string().url("有効なURLを入力してください").optional(),
});

const VideoRegistration = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoUrl: "",
    },
  });

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
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">動画登録</h1>
            <div className="space-x-4">
              <Button variant="outline" onClick={handleDraftSave}>下書き保存</Button>
              <Button onClick={handlePublish}>公開</Button>
            </div>
          </div>

          <Form {...form}>
            <div className="space-y-6">
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
              <label className="block text-sm mb-2">カテゴリ</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <Checkbox id="parent" />
                  <span>親子向け</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="children" />
                  <span>子供向け</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="guardian" />
                  <span>保護者向け</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">チャネル</label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center space-x-2">
                  <Checkbox id="programming" />
                  <span>プログラミング</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="soccer" />
                  <span>サッカー</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="dance" />
                  <span>ダンス</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="beauty" />
                  <span>美容</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="english" />
                  <span>英会話</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">タグ</label>
              <Input type="text" placeholder="カンマ区切りでタグを入力" />
            </div>

            <div>
              <label className="block text-sm mb-2">動画概要</label>
              <Textarea className="min-h-[200px]" />
            </div>
          </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VideoRegistration;
