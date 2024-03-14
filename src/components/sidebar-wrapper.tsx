import cloudinary from "cloudinary";
import { Folder } from "@/app/albums/page";
import Sidebar from "./sidebar";
import { unstable_noStore as noStore } from "next/cache";

const SideBarWrapper = async () => {
  noStore();
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };
  return <Sidebar folders={folders} className="w-1/5" />;
};

export default SideBarWrapper;
