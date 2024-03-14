"use client";
import CloudinaryImage from "../../components/cloudinary-image";
import { useState, useEffect } from "react";
import ImageGrid from "@/components/image-grid";

import { SearchResult } from "../gallery/page";

const FavoritesList = ({ initialResources }: { initialResources: SearchResult[] }) => {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <>
      <ImageGrid
        images={resources}
        getImage={(imageData: SearchResult) => {
          return (
            <CloudinaryImage
              // key={idx + 1}
              imageData={imageData}
              alt="Image of something"
              width="400"
              height="300"
              onUnheart={(unheartedResource) => {
                setResources((currentResources) =>
                  currentResources.filter((resource) => resource.public_id !== unheartedResource.public_id)
                );
              }}
            />
          );
        }}
      />
    </>
  );
};

export default FavoritesList;
