import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge with clsx full feature */
export function t(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

/**
 * It takes a string or number, converts it to a date, and returns a string in the format of "month
 * day, year"
 * @param {string | number} input - string | number
 * @returns A function that takes a string or number and returns a string.
 */
export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * It returns an SVG string that contains a rectangle with a gradient fill, and an animation that moves
 * the rectangle from left to right
 * @param {number} w - width of the shimmer
 * @param {number} h - height of the shimmer
 */
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

/**
 * If we're in a browser, use the built-in `btoa` function, otherwise use the `Buffer` class from
 * Node.js
 * @param {string} str - The string to be converted to base64.
 */
export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
