"use client";

import { SearchResult } from "@/app/gallery/page";

const MAX_COLUMNS = 4;

const ImageGrid = ({ images, getImage }: { images: SearchResult[]; getImage: (imageData: SearchResult) => React.ReactNode }) => {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, idx) => (
        <div key={idx + 1} className="flex flex-col gap-4 ">
          {column.map(getImage)}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
