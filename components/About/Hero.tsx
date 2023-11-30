"use client";

import gsap from "@/gsap";
import { AppContextType, useAppContext } from "@/store/app-context";
import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

type Props = {};

const Hero = (props: Props) => {
  const { tl, endLoading } = useAppContext() as AppContextType;

  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const splitTitle = new SplitType(titleRef.current!, {
      types: "chars,lines,words",
    });

    // if (hasRendered) {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .fromTo(
          splitTitle.chars,
          {
            y: 130,
          },
          {
            y: 0,
            stagger: 0.01,
            ease: "power3.inOut",
            duration: 1.3,
          }
        )
        .from(
          ".sub",
          {
            opacity: 0,
            y: 5,
          },
          "-=0.5"
        );

      tl && tl.add(timeline, ">-2");
      return () => ctx.revert();
    });
    // }
  }, [tl]);

  return (
    <section className=" bg-primary text-white rounded-b-[2rem] lg:h-screen py-12">
      <div className="max-w-7xl mx-auto p-5 h-full">
        <div className=" max-w-4xl">
          <h4 className=" uppercase text-gray-300">About Us</h4>
          <h2 ref={titleRef} className=" font-bold mt-10">
            At <span className=" text-secondary font-light">Giga<span className=" font-bold">STACK</span></span>, we put
            passion and experience to work
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;