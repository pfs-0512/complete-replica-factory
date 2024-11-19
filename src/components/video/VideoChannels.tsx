import { Checkbox } from "@/components/ui/checkbox";

const VideoChannels = () => {
  return (
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
  );
};

export default VideoChannels;