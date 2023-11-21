"use client";

import { AppContextType, useAppContext } from "@/store/app-context";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useState } from "react";

type Props = {};

const Loader = (props: Props) => {
  const [hasRendered, setHasRendered] = useState(false);
  const { tl, endLoading } = useAppContext() as AppContextType;

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useLayoutEffect(() => {
    if (hasRendered) {
      const ctx = gsap.context(() => {
        const tml = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1 },
        });
        tml
          .to(".top", {
            height: 1,
            delay: 1,
          })
          .to(
            ".top",
            {
              scaleX: 0,
            },
            "-=0.5"
          )
          .to(
            ".bottom",
            {
              height: 1,
            },
            "-=0.5"
          )
          .to(
            ".bottom",
            {
              scaleX: 0,
            },
            "-=0.5"
          )
          .to(
            ".middle",
            {
              height: 2,
            },
            "-=0.5"
          )
          .to(".middle", {
            width: "100vw",
          })
          .to(".middle", {
            opacity: 0,
            duration: 0,
          })
          .to(
            ".topHalf",
            {
              height: 0,
            },
            "<"
          )
          .to(
            ".bottomHalf",
            {
              height: 0,
            },
            "<"
          )
          .to(".loader", {
            zIndex: -10,
            // onComplete: () => endLoading()
          });

        tl && tl.add(tml);
        tl?.play()
      });

      return () => ctx.revert();
    }
  }, [hasRendered, tl]);

  return (
    <div className=" loader flex flex-col gap-1 items-center justify-center fixed top-0 left-0 h-screen w-full z-10">
      <div className=" origin-top bg-secondary h-1/2 absolute top-0 w-full topHalf" />
      <div className=" origin-bottom bg-secondary h-1/2 absolute bottom-0 w-full bottomHalf" />

      <div className=" origin-left top bg-primary h-5 w-10 mr-10 z-20 absolute top-[46.5%] -translate-y-1/2 " />
      <div className=" origin-center middle bg-primary h-5 w-20 z-20 absolute top-[50%] -translate-y-1/2" />
      <div className=" origin-right bottom bg-primary h-5 w-10 ml-10 z-20 absolute top-[53.5%] -translate-y-1/2 " />
    </div>
    // <div className=" flex flex-col gap-1 items-center justify-center fixed bg-white top-0 left-0 h-full w-full z-10">
    //   {/* <div className="flex flex-col gap-1 w-20"> */}
    //     <div className=" origin-left top bg-primary h-5 w-10 mr-10" />
    //     <div className=" origin-center middle bg-primary h-5 w-20" />
    //     <div className=" origin-right bottom bg-primary h-5 w-10 ml-10" />
    //   {/* </div> */}
    // </div>
  );
};

export default Loader;
