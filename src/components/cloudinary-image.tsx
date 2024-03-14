"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useTransition, useState } from "react";
import { setAsFavoriteAction, setUndoFavoriteAction } from "@/lib/actions";
import { SearchResult } from "../app/gallery/page";
import ImageMenu from "./image-menu";

const CloudinaryImage = (
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) => {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;

  const [isFavorited, setIsFavorited] = useState(imageData.tags.includes("favorite"));

  return (
    <div className="relative ">
      <CldImage {...props} src={imageData?.public_id} />
      {isFavorited ? (
        <HiHeart
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            startTransition(() => setUndoFavoriteAction(imageData.public_id));
          }}
          className="absolute top-2 left-2 w-[24px] h-[24px] cursor-pointer hover:text-white text-red-500"
        />
      ) : (
        <HiOutlineHeart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => setAsFavoriteAction(imageData.public_id));
          }}
          className="absolute top-2 left-2 w-[24px] h-[24px] cursor-pointer hover:text-red-500"
        />
      )}
      <ImageMenu />
    </div>
  );
};

export default CloudinaryImage;
