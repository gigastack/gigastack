"use client"

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import vision from "@/public/images/about2.jpg";
import SplitType from "split-type";
import gsap from "@/gsap";

type Props = {};

const Vision = (props: Props) => {

  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const splitHead = new SplitType(contentRef.current!, {
      types: "chars,lines,words",
    });
      
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {ease: "power3.inOut"},
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          invalidateOnRefresh: true
        }
      }).fromTo(
        splitHead.words,
        {
          y: 100,
        },
        {
          y: 0,
          stagger: 0.01,
          ease: "power3.inOut",
          duration: 1
        }
      ).to(".overlay", {
        scaleX: 1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" text-gray-700 py-12 rounded-b-[3rem]">
      <div className=" max-w-7xl p-5 lg:p-10 mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-secondary" />
          <h5 className=" inline">Our Vision</h5>
        </div>
        <div className=" w-full pt-10 lg:pt-20" />
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" lg:w-3/5 ">
            <div className=" lg:w-4/5 mr-auto">
              <h4 ref={contentRef}>
                At{" "}
                <span className=" relative text-secondary p-1">
                  <span className=" overlay absolute top-0 left-0 w-full h-full bg-primary rounded-lg origin-left scale-x-0"/>
                  GigaStack
                </span>
                , we endeavour to provide exceptional digital solutions and in
                foresight saturate the market with products which not only
                provide value but is attainable for consumers across several
                sectors.
              </h4>
            </div>
          </div>

          <div className="relative lg:w-2/5 mt-14">
            <Image
              src={vision}
              alt="vision"
              className=" w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-[3rem] object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
