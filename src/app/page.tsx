"use client";

import useMousePosition from "@/hooks/use-mouse-position";
import { useState } from "react";
import { motion } from 'motion/react';

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const {x, y} = useMousePosition();
  if(x===null || y===null) {return <div>Loading</div>}
  const size = isHovered ? 450 : 100
  return (
    <main className="h-screen">
      <motion.div
        className="mask w-full h-full flex items-center justify-center text-[#afaa8f] text-[64px] leading-[66px] cursor-default"
        animate={{
          maskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          maskSize: `${size}px`
        }}
        transition={{type: "tween", ease: "backOut", duration: 0.6}}
      >
        <p onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
          Crafting immersive digital experiences that combine creativity with functionality — only when the impact justifies it.
        </p>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-[#afaa8f] text-[64px] leading-[66px] cursor-default">
        <p>
          I&apos;m a <span>purpose-driven</span> product designer focused on delivering meaningful, high-quality digital solutions that resonate with users.
        </p>
      </div>

    </main>
  );
}
