"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { HiOutlinePhotograph, HiFolder, HiHeart } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Folder } from "@/app/albums/page";

const Sidebar = ({ className, folders }: { className?: string; folders: Folder[] }) => {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Manage Photo</h2>
          <div className="space-y-1">
            <Button asChild variant={pathname === "/gallery" ? "secondary" : "ghost"} className="w-full justify-start flex gap-2">
              <Link href={"/gallery"}>
                <HiOutlinePhotograph className="w-[24px] h-[24px]" />
                Gallery
              </Link>
            </Button>
            <Button asChild variant={pathname === "/albums" ? "secondary" : "ghost"} className="w-full justify-start flex gap-2">
              <Link href={"/albums"}>
                <HiFolder className="w-[24px] h-[24px]" />
                Albums
              </Link>
            </Button>
            {folders.map((folder, idx) => {
              return (
                <Button
                  key={idx + 1}
                  asChild
                  variant={pathname === `/albums/${folder.name}` ? "secondary" : "ghost"}
                  className="w-full justify-start flex gap-2"
                >
                  <Link href={`/albums/${folder.name}`} className="pl-12">
                    {folder.name}
                  </Link>
                </Button>
              );
            })}
            <Button
              asChild
              variant={pathname === "/favorites" ? "secondary" : "ghost"}
              className="w-full justify-start flex gap-2"
            >
              <Link href={"/favorites"}>
                <HiHeart className="w-[24px] h-[24px]" />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
