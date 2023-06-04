import React from "react";

type ICodeTitle = {
  title?: string;
  lang: string;
};

export default function CodeTitle({ title, lang }: ICodeTitle) {

  return (
    <div className="code-title mt-4 flex w-full items-center justify-start gap-2 truncate rounded-t-2xl border-b border-black-700 bg-black-900 py-3">
      <div className="hidden h-8 items-center space-x-1.5 px-4 md:flex">
        <div className="h-[12px] w-[12px] rounded-full bg-brand-400"></div>
        <div className="h-[12px] w-[12px] rounded-full bg-amber-400"></div>
        <div className="h-[12px] w-[12px] rounded-full bg-green-400"></div>
      </div>
      <div className="flex items-center gap-3 px-4 md:px-0">
        <p className="text-sm font-medium tracking-wide text-gray-100">
          {title || lang}
        </p>
      </div>
    </div>
  );
}
