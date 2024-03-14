"use server";

import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export const setAsFavoriteAction = async (publicId: string) => {
  await cloudinary.v2.uploader.add_tag("favorite", [publicId]);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  // revalidatePath(path);
};

export const setUndoFavoriteAction = async (publicId: string) => {
  await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  // revalidatePath(path);
};

export const addImageToAlbum = async (image: SearchResult, album: string) => {
  await cloudinary.v2.api.create_folder(album);

  let parts = image.public_id.split("/");

  if (parts.length > 1) {
    parts = parts.slice(1);
  }

  const publicId = parts.join("/");

  await cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath("/albums/[albumName]", "page");
};
