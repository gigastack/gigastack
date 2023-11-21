"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

type Props = {};

const WordSlide = (props: Props) => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const firstSlide = useRef<HTMLDivElement>(null)
  const secondSlide = useRef<HTMLDivElement>(null)
  let xPercent = 0
  let direction = -1

  const animation = () => {
    if(xPercent <= -100) {
      xPercent = 0
    }
    gsap.set(firstSlide.current, {xPercent})
    gsap.set(secondSlide.current, {xPercent})
    xPercent += 0.02 * direction
    requestAnimationFrame(animation)
  }
  useLayoutEffect(() => {

    requestAnimationFrame(animation)

    // let offset = 0;
    // let itemWidth = 0;
    // let rowWidth = 0;
    // let velocity = 150;

    // let marqueeItems = gsap.utils.toArray<HTMLDivElement>(".slide-item");
    // marqueeItems.forEach((e) => {
    //   rowWidth += e.offsetWidth;
    // });

    // const ctx = gsap.context(() => {
    //   marqueeItems.forEach((e, i) => {
    //     gsap.set(e, { x: 0 });
    //     itemWidth = e.offsetWidth;
    //     let tl = gsap.timeline({ repeat: -1 });

    //     tl.to(e, {
    //       ease: "none",
    //       duration: (rowWidth - offset - itemWidth) / velocity,
    //       x: rowWidth - offset - itemWidth,
    //     });
    //     tl.to(e, {
    //       ease: "none",
    //       duration: 0,
    //       x: (offset + itemWidth) * -1,
    //     });

    //     tl.to(e, {
    //       ease: "none",
    //       duration: (offset + itemWidth) / velocity,
    //       x: 0,
    //     });

    //     offset += itemWidth;
    //   });
    // });

    // let rowWidth = slideRef.current?.offsetWidth!;
    // let rowItemWidth = (slideRef.current?.children[0] as HTMLElement)
    //   .offsetWidth;
    // let velocity = 200;

    // let initialOffset = ((rowItemWidth * 2) / rowWidth) * 100 * -1;
    // let xTranslate = initialOffset * -1;

    // const scrollWidth = slideRef.current?.scrollWidth!;
    // const ctx = gsap.context(() => {
    //   const tl = gsap.timeline();
    //   tl.to(slideRef.current, {
    //     x: -scrollWidth,
    //     repeat: -1,
    //     duration: scrollWidth / velocity,
    //     ease: "linear",
    //   });
    // });

    // return () => ctx.revert();


  }, []);

  return (
    <section className=" py-24 overflow-hidden relative">
      <div
        ref={slideRef}
        className="flex items-center whitespace-nowrap uppercase font-bold text-secondar"
      >
        <div ref={firstSlide} className="flex items-center justify-between gap-10">
          {" "}
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Think
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Explore
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Innovate
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Create
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Inspire
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Brainstorm
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Analyse
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Problem Solving
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Technology
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Excellence
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
        </div>

        <div ref={secondSlide} className="flex items-center justify-between gap-10">
          {" "}
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Think
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Explore
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Innovate
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Create
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Inspire
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Brainstorm
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Analyse
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Problem Solving
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Technology
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
          <h2 className=" slide-item font-bold flex-shrink-0 basis-1/">
            Excellence
          </h2>
          <span className=" slide-item  text-[7vw] opacity-40"> - </span>
        </div>
      </div>
    </section>
  );
};

export default WordSlide;
