import { Squircle } from "@squircle-js/react";
import { t } from "lib";

interface IBox {
  fullSize?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Box({
  fullSize,
  className,
  as = "div",
  children,
}: IBox) {
  const Container = as;
  return (
    <Container
      className={t(
        "mx-auto px-4",
        fullSize ? "max-w-full px-0" : "max-w-4xl",
        className
      )}
    >
      {children}
    </Container>
  );
}
