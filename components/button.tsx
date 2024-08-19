import { Squircle } from "@squircle-js/react";
import { PropsWithChildren } from "react";

interface IButton {
  onClick: () => void;
}


export default function Button(props: PropsWithChildren<IButton>) {
  const { children, onClick } = props;
  return (
    <Squircle
      cornerRadius={10}
      cornerSmoothing={1}
      className="p-4 bg-black text-white"
    >
      <button
        className="border-none bg-brand-100 hover:bg-brand-200 dark:bg-black-800 hover:dark:bg-black-600 p-2 rounded-xl transition duration-700 ease-in-out"
        onClick={onClick}
      >
        {children}
      </button>
    </Squircle>
  )
}
