"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Founder",
    },
    {
      text: "of",
    },
    {
      text: "Facebook",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-10 text-start">
      
      <TypewriterEffectSmooth words={words} className=""/>
      
    </div>
  );
}
