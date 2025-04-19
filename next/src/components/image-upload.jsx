"use client";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/styles/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";

export function ImageUpload({ value, onChange }) {
  const onUpload = (result) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value && (
          <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <Image fill className="object-cover" src={value} alt="Upload" />
            <Button
              onClick={() => onChange("")}
              className="absolute top-2 right-2"
              variant="destructive"
              size="sm"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      <CldUploadWidget uploadPreset="imageUpload" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button type="button" variant="secondary" onClick={() => open()}>
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
