import { t } from "lib";
import React from "react";

interface ICallout extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Callout({ className, children, ...props }: ICallout) {
  return (
    <div
      className={t(
        "my-4 inline-block rounded-md border border-l-4 border-dark bg-light p-4"
      )}
      {...props}
    >
      <div className={t("m-0 text-md", className)}>{children}</div>
    </div>
  );
}
