import { HiMenu, HiOutlinePencil } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import AddToAlbumDialog from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallery/page";
import { forwardRef, useState, ReactNode } from "react";
import Link from "next/link";

const ImageMenu = ({ image }: { image: SearchResult }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="p-0 h-9 w-9">
            <HiMenu className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem className="p-0" asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0" asChild>
            <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`} className="flex h-10 px-4 py-2">
              <HiOutlinePencil className="w-5 h-5 mr-2" /> <span>Edit</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ImageMenu;
