"use server";

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
