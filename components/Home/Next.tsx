"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import solution from "@/public/images/solution.jpg";
import potato from "@/public/images/potato.jpg";
import tomato from "@/public/images/tomato.jpg";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Next = (props: Props) => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useLayoutEffect(() => {
	if(hasRendered) {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".ecoriders",
        start: "top top",
        end: "+=300px",
        pin: true,
      });
    });

    return () => ctx.revert();
}
  }, [hasRendered]);

  return (
    <section className="ecoriders bg-white10 h-screen rounded-lg relativ bg-white/10 rounded-l border border-white/20"></section>
  );
};

export default Next;
