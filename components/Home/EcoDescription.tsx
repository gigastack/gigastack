"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import SplitType from "split-type";

type Props = {};

const EcoDescription = (props: Props) => {
  const [hasRendered, setHasRendered] = useState(false);

  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useLayoutEffect(() => {
    if (hasRendered) {
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        const textSplit = new SplitType(textRef.current!, {
          types: "chars",
        });
        console.log(textSplit.lines);
        const animation = gsap.from(textSplit.chars, {
          opacity: 0.1,
          stagger: 0.3,
          ease: "power3.out",
        });

        ScrollTrigger.create({
          trigger: ".eco-desc",
          start: "top top",
          pin: true,
          animation,
          scrub: true,
        });
      });

      return () => ctx.revert();
    }
  }, [hasRendered]);

  return (
    <section className="eco-desc lg:h-screen py-32 lg:py-0">
      <div className="p-5 lg:p-10 flex items-center justify-center h-full">
        <h3
          ref={textRef}
          className=" description-text text-[4vw] font-ligh opacity30"
        >
          In accordance with our mission to create relevant, effective and
          economically viable digital products, we spearheaded a logistics
          solution which caters to the needs of the average consumer by reducing
          cost.
          We call it{" "}
          <span className=" text-secondary font-bold text-[5vw] ">
            eco-Riders
          </span>
        </h3>
      </div>
    </section>
  );
};

export default EcoDescription;
