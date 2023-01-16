import { t } from "lib";
import { HTMLAttributes, ReactNode } from "react";

interface IH1Title extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export default function H1Title({ className, children, ...props }: IH1Title) {
  return (
    <h1
      className={t(
        "text-4xl font-bold tracking-normal md:text-7xl lg:text-8xl dark:text-black-200"
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
