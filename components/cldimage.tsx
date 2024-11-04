"use client";

import { CldImage as Image } from "next-cloudinary";

export function CldImage(props: React.ComponentProps<typeof Image>) {
  return <Image {...props} />;
}
