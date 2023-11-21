"use client"

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
    <section className=" bg-primary text-white rounded-b-[2rem] lg:h-screen py-12 ">
      <div className="max-w-7xl mx-auto p-5 h-full flex flex-col justify-between">
        <div className=" max-w-4xl">
          <h2 ref={titleRef} className=" font-bold">
            Want to reach out to{" "}
            <span className=" text-secondary">GigaStack?</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto mt-28 lg:mt-0">
          <div className=" max-w-sm contact">
            <h4 className=" uppercase font-bold tracking-[0.1em] text-gray-400 font-mille mb-5 lg:mb-10">
              Address
            </h4>
            <h5 className=" font-light leading-[2]">
              No 2 Bethesda Close off EFCC close,close to ESBS Juntion Enugu
              State, Nigeria
            </h5>
          </div>
          <div className=" w-[1px] h-full bg-gray-300 " />
          <div className=" contact">
            <h4 className=" uppercase font-bold tracking-[0.1em] text-gray-400 font-mille mb-5 lg:mb-10">
              Email Contacts
            </h4>

            <div className="flex flex-col gap-4 items-start">
            <h5 className="btn-line inline before:bg-slate-200 after:bg-slate-200 font-light">
              Emeka: <a href="mailto:">chukwuemeka.adibe@gigastack.tech</a>
            </h5>
            <h5 className="btn-line inline-block before:bg-slate-200 after:bg-slate-200 font-light">
              Wisdom: <a href="mailto:">wisdom.chukwuma@gigastack.tech</a>
            </h5>
            <h5 className="btn-line inline-block before:bg-slate-200 after:bg-slate-200 font-light">
              Uchechukwu: <a href="mailto:">uchechukwu.obiokoye@gigastack.tech</a>
            </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
