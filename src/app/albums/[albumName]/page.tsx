import ForceRefresh from "@/components/force-refresh";
import cloudinary from "cloudinary";
import AlbumsList from "./album-list";
import { SearchResult } from "@/app/gallery/page";

const GalleryPage = async ({
  params: { albumName },
}: {
  params: {
    albumName: string;
  };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums {albumName}</h1>
        </div>

        <AlbumsList images={results.resources} />
      </div>
    </section>
  );
};

export default GalleryPage;
