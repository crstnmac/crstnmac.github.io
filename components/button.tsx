import { PropsWithChildren } from "react";

interface IButton {
  onClick: () => void;
}

export default function Button(props: PropsWithChildren<IButton>) {
  const { children, onClick } = props;
  return (
    <button
      className="border-none bg-brand-100 hover:bg-brand-200 dark:bg-brand-800 hover:dark:bg-brand-600 p-2 rounded-xl transition duration-700 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
