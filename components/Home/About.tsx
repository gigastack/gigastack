"use client";

import gsap from "@/gsap";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { MoveUpRight } from "lucide-react";
import SplitType from "split-type";

type Props = {};

const About = (props: Props) => {
  const contentRef = useRef(null);

  // useLayoutEffect(() => {
  //   const splitContent = new SplitType(contentRef.current!, {
  //     types: "chars,lines,words",
  //   });

  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       splitContent.words,
  //       {
  //         y: 100,
  //       },
  //       {
  //         scrollTrigger: {
  //           trigger: ".about",
  //           start: "top 90%",
  //         },
  //         y: 0,
  //         stagger: 0.01,
  //         ease: "power3.inOut",
  //         duration: 1.5,
  //       }
  //     );
  //   });

  //   return () => ctx.revert()
  // });

  return (
    <section className=" about py-32 lg:h-screen p-5 lg:p-14 text-center flex items-center justify-center rounded-b-2xl">
      <h2 ref={contentRef} className=" text-[5.5vw] font-bold">
        We are a team focused on efficient innovation motivated by current
        societal issues. We fill the gap.{" "}
        <Link
          href="/about"
          className="group overflow-hidden relative text-xl rounded-full bg-secondary text-primary p-3 inline-block"
        >
          <span className=" inline-flex gap-2 items-center transition-transform duration-300 group-hover:transition-transform group-hover:duration-300 group-hover:-translate-y-10">
            <h5>want to know more?</h5>
            <MoveUpRight size={20} />
          </span>
          <span className="flex justify-center gap-2 items-center absolute translate-y-10 left-0 w-full top-3 transition-transform duration-300 group-hover:transition-transform group-hover:duration-300 group-hover:-translate-y-0">
            <h5>want to know more?</h5>
            <MoveUpRight size={20} />
          </span>
        </Link>
      </h2>
    </section>
  );
};

export default About;
