"use client";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

const UploadButton = () => {
  const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton
        uploadPreset="ru1pmy2k"
        onSuccess={() => {
          // console.log("refresh");
          setTimeout(() => {
            router.refresh();
          }, 1000);
        }}
      />
    </Button>
  );
};

export default UploadButton;
