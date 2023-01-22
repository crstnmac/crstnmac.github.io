import { t } from "lib";
import { SVGProps, useMemo } from "react";

const Background = (props: SVGProps<SVGElement> & { gap?: number }) => {
  const { color, stroke, gap, transform, className } = props;
  const { x, y, k }: any = transform || { x: 0, y: 0, k: 1 };
  const scaledGap = (gap || 15) * k;
  const patternId = useMemo(
    () => `patten-${Math.floor(Math.random() * 100000)}`,
    []
  );

  return (
    <svg
      className={t("w-full h-full", className)}
      width={"100%"}
      height={"100%"}
    >
      <pattern
        id={patternId}
        x={x % scaledGap}
        y={y % scaledGap}
        width={scaledGap}
        height={scaledGap}
        patternUnits={"userSpaceOnUse"}
      >
        <path
          stroke={color || "#dddddd"}
          strokeWidth={stroke || 1}
          d={`M${scaledGap / 2} 0 V${scaledGap} M0 ${
            scaledGap / 2
          } H${scaledGap}`}
        />
      </pattern>
      <rect
        x={0}
        y={0}
        width={"100%"}
        height={"100%"}
        fill={`url(#${patternId})`}
      />
    </svg>
  );
};

export default Background;
