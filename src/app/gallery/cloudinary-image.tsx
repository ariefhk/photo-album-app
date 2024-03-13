"use client";
import { CldImage } from "next-cloudinary";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useTransition } from "react";
import { setAsFavoriteAction, setUndoFavoriteAction } from "@/lib/actions";
import { SearchResult } from "./page";

const CloudinaryImage = (props: any & { imageData: SearchResult; path: string }) => {
  const [transition, startTransition] = useTransition();

  const { imageData } = props;

  const isFavorited = imageData.tags.includes("favorite");

  return (
    <div className="relative ">
      <CldImage {...props} src={imageData?.public_id} />
      {isFavorited ? (
        <HiHeart
          onClick={() => {
            startTransition(() => setUndoFavoriteAction(imageData.public_id, props.path));
          }}
          className="absolute top-1 right-1 w-[24px] h-[24px] cursor-pointer hover:text-white text-red-500"
        />
      ) : (
        <HiOutlineHeart
          onClick={() => {
            startTransition(() => setAsFavoriteAction(imageData.public_id, props.path));
          }}
          className="absolute top-1 right-1 w-[24px] h-[24px] cursor-pointer hover:text-red-500"
        />
      )}
    </div>
  );
};

export default CloudinaryImage;
