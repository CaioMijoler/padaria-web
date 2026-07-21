import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className = "h-14", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Pães São Sebastião"
      width={441}
      height={170}
      priority={priority}
      className={`w-auto object-contain ${className}`}
    />
  );
}
