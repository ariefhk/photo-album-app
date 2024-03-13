"use client";

import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <Button asChild>
          <CldUploadButton uploadPreset="ru1pmy2k" />
        </Button>
      </div>
    </section>
  );
};

export default GalleryPage;
