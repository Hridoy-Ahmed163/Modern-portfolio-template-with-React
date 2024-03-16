"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Seriously ",
    designation: "Nigga?",
    image:"",
  },
  
];

export function AnimatedTooltipPreview() {
  return (
    <div >
      <AnimatedTooltip items={people} />
    </div>
  );
}
