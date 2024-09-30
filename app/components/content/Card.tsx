"use client";

import React, { ReactNode } from "react";
import { useTheme } from "@/app/context/ThemeContext";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  const [Theme] = useTheme(); // useTheme returns an array, destructure it correctly

  return (
    <div
      className={`content p-10 flex flex-col gap-4 ${
        Theme ? "bg-black text-white" : "bg-white text-black"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
