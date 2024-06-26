import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import ForceRefresh from "@/components/force-refresh";
import FavoritesList from "./favorite-list";
import { unstable_noStore as noStore } from "next/cache";

const FavoritesPage = async () => {
  noStore();
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorites Image</h1>
        </div>
        <FavoritesList initialResources={results.resources} />
      </div>
    </section>
  );
};

export default FavoritesPage;
