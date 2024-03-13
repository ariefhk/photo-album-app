import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { HiOutlinePhotograph, HiFolder, HiHeart } from "react-icons/hi";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Manage Photo</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start flex gap-2">
              <HiOutlinePhotograph className="w-[24px] h-[24px]" />
              Gallery
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
              <HiFolder className="w-[24px] h-[24px]" />
              Albums
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
              <HiHeart className="w-[24px] h-[24px]" />
              Favorites
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
