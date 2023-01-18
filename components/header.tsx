"use client";
import { navigation } from "config";
import { Link, Box } from "components";
import dynamic from "next/dynamic";
const nav = navigation.mainNav;

const DarkIcon = dynamic(() => import("components/dark-mode"), { ssr: false });

export default function Header() {
  return (
    <Box
      as="header"
      fullSize
      className="border-b border-dark animate-in slide-in-from-top duration-500 lg:border-none mx-0 "
    >
      <Box as="nav" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center hover:animate-jelly">
            <Link
              href="/"
              className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-400 to-green-300 animate-jelly flex flex-row flex-nowrap items-center justify-start"
            >
              crstnmac
            </Link>
          </div>
          <div className="hidden font-medium capitalize lg:inline-flex">
            <p className="dark:text-black-200">Frontend Developer</p>
          </div>
          <div className="ml-10 space-x-8 flex items-center">
            {nav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                animatedUnderline
                className="text-base font-medium tracking-wide dark:text-black-200"
              >
                {item.title}
              </Link>
            ))}
            <DarkIcon />
          </div>
        </div>
      </Box>
    </Box>
  );
}
