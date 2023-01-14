"use client";

import { t } from "lib";
import Image, { ImageProps } from "next/image";

export interface IPicture extends ImageProps {
  blogImage?: boolean;
  caption?: string;
  captionClassName?: string;
}

export default function Picture({
  src,
  alt,
  className,
  blogImage = false,
  caption,
  width,
  height,
  captionClassName,
  ...rest
}: IPicture) {
  if (blogImage) {
    return (
      <figure className="mx-auto my-8 h-auto w-auto max-w-3xl overflow-clip rounded-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={t(
            "h-auto w-full rounded-md object-cover object-center",
            className
          )}
        />
        <figcaption
          className={t(
            "mx-auto mt-2 max-w-xl text-center text-base italic text-gray-600",
            captionClassName
          )}
        >
          <span>{caption}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <Image
      className={t("object-cover object-center", className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
}
