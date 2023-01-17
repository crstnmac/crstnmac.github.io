import { PropsWithChildren } from "react";

interface IButton {
  onClick: () => void;
}

export default function Button(props: PropsWithChildren<IButton>) {
  const { children, onClick } = props;
  return (
    <button className="border-none  p-2 rounded-xl" onClick={onClick}>
      {children}
    </button>
  );
}
