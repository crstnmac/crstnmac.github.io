import { shimmer, toBase64 } from "lib";
import { Box, Picture } from "components";
interface IBlogHeader {
  title: string;
  date: string;
  readingTime: string;
  imgSrc: string;
  imgAlt: string;
}

export default function BlogHeader({
  title,
  date,
  readingTime,
  imgSrc,
  imgAlt,
}: IBlogHeader) {
  return (
    <Box className="mt-32 mb-14">
      <div className="animate-in slide-in-from-left duration-500">
        <div className="mt-2 space-x-2 text-base italic tracking-wide dark:text-black-200">
          <span> Published: {date}</span>
          <span>&mdash;</span>
          <span>{readingTime}</span>
        </div>
        <h1 className="mb-4 text-5xl font-bold md:text-7xl dark:text-black-200">
          {title}
        </h1>
      </div>
      <Picture
        src={imgSrc}
        width={1200}
        height={630}
        alt={imgAlt}
        className="my-8 h-[280px] w-full rounded-2xl border border-gray-300 object-cover object-center animate-in fade-in duration-500 md:h-[500px]"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1200, 630)
        )}`}
        priority
      />
    </Box>
  );
}
