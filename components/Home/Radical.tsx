"use client";

import gsap from "@/gsap";
import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

type Props = {};

const Radical = (props: Props) => {
  let timeline = useRef<GSAPTimeline | null>(null);
  const headRef = useRef(null);
  const subRef = useRef(null);

  useLayoutEffect(() => {
    const splitHead = new SplitType(headRef.current!, {
      types: "chars,lines,words",
    });

    const splitSub = new SplitType(subRef.current!, {
        types: "chars,lines,words",
      });
      
    const ctx = gsap.context(() => {
      const tl = (timeline.current = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      }));
      gsap.fromTo(
        splitHead.words,
        {
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: headRef.current,
            start: "top 90%",
          },
          y: 0,
          stagger: 0.01,
          ease: "power3.inOut",
          duration: 1
        }
      );

      gsap.fromTo(
        splitSub.words,
        {
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 90%",
          },
          y: 0,
          stagger: 0.01,
          ease: "power3.inOut",
          duration: 1.5
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" radical text-gray-700 lg:h-screen relative">
      <h1 className=" text-[10vw] absolute bottom-20 left-20 text-gray-400 opacity-[0.15] uppercase -z-10">
        GigaStack
      </h1>
      <div className=" max-w-7xl p-5 lg:p-10 mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-secondary" />
          <h5>unique solutions for unique problems</h5>
        </div>
        <div className=" w-full pt-20" />
        <div className="flex items-center flex-wrap">
          <div className=" w-full lg:w-4/5">
            <h3 ref={headRef}>
              GigaStack is a fast growing radical startup founded in 2022,
              specializing in the design, development and distribution of
              digital products
            </h3>
          </div>
        </div>
        <div className=" w-full pt-10 lg:pt-20" />
        <div className="flex items-center flex-wrap justify-end">
          <div className=" w-full lg:w-2/5">
            <h4 ref={subRef} className="font-ligh ">
              We intend to instigate and spearhead a swift transformation across
              several sectors in the Nigerian technological industry
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Radical;
