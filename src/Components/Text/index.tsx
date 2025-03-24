import { cn } from "@/utils/cn";
import React from "react";

type TextProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  s1?: boolean;
  s2?: boolean;
  s3?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  center?: boolean;
  error?: boolean;
  color?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ children, error, color, ...props }) => {
  return (
    <span
      className={cn(
        props.h1 && "text-4xl",
        props.h2 && "text-3xl",
        props.h3 && "text-2xl",
        props.h4 && "text-xl",
        props.h5 && "text-lg",
        props.h6 && "text-base",
        props.s1 && "text-sm",
        props.s2 && "text-xs",
        props.s3 && "text-[10px]",
        props.medium && "font-medium",
        props.semiBold && "font-semibold",
        props.bold && "font-bold",
        props.center && "text-center"
      )}
      style={{
        color: error ? "#F87171" : color,
        fontFamily: "var(--font-mitr)",
      }}
    >
      {children}
    </span>
  );
};

export default Text;
