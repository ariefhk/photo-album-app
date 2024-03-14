"use client";

import ImageGrid from "@/components/image-grid";
import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from "@/components/cloudinary-image";

const AlbumsList = ({ images }: { images: SearchResult[] }) => {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage key={imageData.public_id} imageData={imageData} alt="Image of something" width="400" height="300" />
        );
      }}
    />
  );
};

export default AlbumsList;
