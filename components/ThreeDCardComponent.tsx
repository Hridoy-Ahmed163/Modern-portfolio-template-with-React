"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CardImage from "@/public/assets/Mark_Zuckerberg_F8_2019.jpeg"

export function ThreeDCardComponent() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-5 border">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={CardImage} // Replace with your actual image path or URL
            height="1000"
            width="1000"
            className="min-h-28 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
export default ThreeDCardComponent; 