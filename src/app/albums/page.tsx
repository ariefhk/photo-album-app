import ForceRefresh from "@/components/force-refresh";
import cloudinary from "cloudinary";
import AlbumCard from "./album-card";

export type Folder = { name: string; path: string };

const AlbumsPage = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8 mb-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {folders.map((folder, idx) => (
            <AlbumCard key={idx + 1} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumsPage;
