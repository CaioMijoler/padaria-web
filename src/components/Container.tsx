import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div
      id={id}
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
