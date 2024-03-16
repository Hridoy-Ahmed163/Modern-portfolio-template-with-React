"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";


import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Seriously ",
    designation: "Nigga?",
    image: "",
  },

];

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <AnimatedTooltip items={people} />
  );
};
