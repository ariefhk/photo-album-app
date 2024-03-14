import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addImageToAlbum } from "@/lib/actions";
import { useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
import { forwardRef } from "react";

type Ref = HTMLButtonElement;

const MyButton = forwardRef<Ref>((props, ref) => {
  return (
    <Button {...props} ref={ref} variant="ghost" className="w-full flex justify-start">
      <HiFolderAdd className="w-5 h-5 mr-2" />
      <span>Add to Album</span>
    </Button>
  );
});

MyButton.displayName = "MyButton";

export default function AddToAlbumDialog({ image, onClose }: { image: SearchResult; onClose: () => void }) {
  const [albumName, setAlbumName] = useState("");

  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpenState) => {
        setOpen(newOpenState);
        if (!newOpenState) {
          onClose();
        }
      }}
    >
      <DialogTrigger asChild>
        {/* <Button variant="secondary" className="w-full">
          <HiFolderAdd className="w-5 h-5 mr-2" />
          <span>Add to Album</span>
        </Button> */}
        <MyButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>Type an album you want to move this image into</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="albumName" className="text-right">
              Album
            </Label>
            <Input
              id="albumName"
              value={albumName}
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              console.log(image);
              onClose();
              setOpen(false);
              await addImageToAlbum(image, albumName);
            }}
            type="submit"
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
