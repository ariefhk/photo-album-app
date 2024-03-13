"use client";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  const [imageId, setImageId] = useState<string | undefined>("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <CldUploadButton
        uploadPreset="ru1pmy2k"
        onSuccess={(result) => {
          if (typeof result?.info !== "string") {
            setImageId(result.info?.public_id);
          }
        }}
      />
      {imageId && <CldImage width="960" height="600" src={imageId} sizes="100vw" alt="Description of my image" />}
    </main>
  );
}
