"use client";

import ImageGrid from "@/components/image-grid";
import { SearchResult } from "./page";
import CloudinaryImage from "../../components/cloudinary-image";

const GalleryList = ({ images }: { images: SearchResult[] }) => {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return <CloudinaryImage imageData={imageData} alt="Image of something" width="400" height="300" />;
      }}
    />
  );
};

export default GalleryList;
