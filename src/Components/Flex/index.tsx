import { cn } from "@/utils/cn";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
  align?: "center" | "start" | "end" | "baseline" | "stretch";
  direction?: "row" | "col";
  gap?: string;
  className?: string;
}
const Flex = ({
  children,
  justify,
  align,
  gap,
  className,
  ...props
}: Props) => {
  const justifyClass = justify ? `justify-${justify}` : "justify-center";
  const alignClass = align ? `items-${align}` : "items-center";
  const gapClass = gap ? `gap-${gap}` : "gap-0";
  const directionClass = `flex-${props.direction || "row"}`;
  return (
    <div
      className={cn(
        "flex",
        justifyClass,
        alignClass,
        gapClass,
        directionClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
