import { cn } from "@/utils/cn";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}
const Section = ({ children, className, ...props }: Props) => {
  return (
    <section
      className={cn(
        "w-full min-h-screen flex items-center justify-center flex-col",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
