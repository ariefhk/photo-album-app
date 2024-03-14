import ForceRefresh from "@/components/force-refresh";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import GalleryList from "./gallery-list";
import { unstable_noStore as noStore } from "next/cache";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

const GalleryPage = async () => {
  noStore();
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>

        <GalleryList images={results.resources} />
      </div>
    </section>
  );
};

export default GalleryPage;
