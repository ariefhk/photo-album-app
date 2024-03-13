import CloudinaryImage from "../gallery/cloudinary-image";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";

const FavoritesPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorites Image</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result, idx) => {
            return (
              <CloudinaryImage
                path="/favorites"
                key={idx + 1}
                imageData={result}
                alt="Image of something"
                width="400"
                height="300"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
