"use client";
import React from "react";
import { t, transition } from "lib";
import { motion } from "framer-motion";

interface IPre extends React.HTMLAttributes<HTMLPreElement> {
  className?: string;
}
export default function Pre({ className, ...props }: IPre) {
  const textInput = React.useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    if (textInput.current !== null) {
      setCopied(true);
      navigator.clipboard.writeText(textInput.current.textContent!);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  const whileTap = { scale: 0.95, rotate: 15 };

  const variants = {
    initial: { scale: 0.6 },
    animate: { scale: 1, transition },
    whileTap: { scale: 0.8 },
  };

  return (
    <div ref={textInput} className="relative">
      <button
        aria-label="Copy code"
        type="button"
        className={t(
          "absolute right-3 top-3 z-50 h-9 w-9 rounded  bg-black-900 p-1 hover:bg-black-700",
          copied
            ? "border-green-400 focus:border-green-400 focus:outline-none"
            : "border-gray-300"
        )}
        onClick={onCopy}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className={t(copied ? "text-green-400" : "text-gray-300")}
          whileTap={whileTap}
          key="motion"
        >
          {copied ? (
            <>
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                initial="initial"
                animate="animate"
                whileTap="whileTap"
                variants={variants}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </>
          ) : (
            <>
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                initial="initial"
                animate="animate"
                whileTap="whileTap"
                variants={variants}
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
              />
            </>
          )}
        </motion.svg>
      </button>
      <pre
        className={t(
          "pre mt-4 mb-4 overflow-x-auto rounded-2xl bg-black-900 px-3 py-4 font-mono",
          className
        )}
        {...props}
      />
    </div>
  );
}
