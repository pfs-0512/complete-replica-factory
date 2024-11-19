import { Checkbox } from "@/components/ui/checkbox";

const VideoCategories = () => {
  return (
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
  );
};

export default VideoCategories;