"use client";

import { AppContextType, useAppContext } from "@/store/app-context";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";

type Props = {};

const Hero = (props: Props) => {
  const { tl, endLoading } = useAppContext() as AppContextType;
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    setHasRendered(true);
  }, []);

  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const splitTitle = new SplitType(titleRef.current!, {
      types: "chars,lines,words",
    });

    if (hasRendered) {
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
    }
  }, [hasRendered, tl]);
  const { navHeight } = useAppContext() as AppContextType;
  return (
    <section
      className={`bg-primary rounded-b-[2rem] h-[35rem text-white h-[calc(105vh-82px)] `}
      // style={{ height: `calc(105vh - ${navHeight}px)` }}
    >
      <div className="max-w-7xl mx-auto p-5 pt-10 h-full">
        <div className=" flex flex-col h-full">
          <div className=" max-w-3 flex flex-co lg:flex-row items-center justify-center gap-20">
            <h1
              ref={titleRef}
              className=" relative font-tes text-primary-20 justify-self-start self-start uppercase font-bold tracking-wide after:absolut after:w-[400px] after:h-[300px] after:rounded-full after:bg-secondary after:z-10 after:opacity70 after:blur-[170px] after:top-1/2 after:left-full"
            >
              {" "}
              <span className=" whitespace-nowrap">
                We{" "}
                <span
                  style={{ WebkitTextStroke: "1px #85efac" }}
                  className=" relative text-primary"
                >
                  Build{" "}
                  {/* <span className=" w-5 h-5 rounded-full bg-white inline-block" /> */}
                </span>
              </span>{" "}
              <br />
              <span className=" text-white whitespace-nowrap text-secondar border-b4 border-secondary p- rounded-l">
                <span
                  style={{ WebkitTextStroke: "1px #85efac" }}
                  className="text-primary"
                >
                  We
                </span>{" "}
                Create{" "}
                {/* <span className=" w-5 h-5 rounded-full bg-white inline-block" /> */}
              </span>{" "}
              <br />
              <span className=" whitespace-nowrap">
                We{" "}
                <span
                  style={{ WebkitTextStroke: "1px #85efac" }}
                  className=" relative text-primary"
                >
                  Develop{" "}
                  {/* <span className=" w-5 h-5 rounded-full bg-white inline-block" /> */}
                </span>
                {/* <span className=" w-5 h-5 rounded-full bg-white inline-block" /> */}
              </span>
            </h1>
            {/* <div className=" max-w-xl mt-5 p-5 bg-whit/20 backdrop-blur-lg borde rounded-2xl border-white/20 lg:ml-[30%">
              <h4 className="leading-normal font-miller font-light text-gray-100">
                {" "}
                Innovation is a way of life. However at GigaStack, we innovate
                with a cause at heart. We create, build and develop solutions
                with a problem in mind to solve.{" "}
              </h4>
            </div> */}
          </div>

          <div className=" sub relative max-w-3xl ml-auto mt-auto mb-10 before:w-1/4 before:h-[1px] before:bg-current before:-translate-x-[110%] before:top-8 lg:before:absolute">
            <h3 className=" sub-hero font-miller font-light uppercas ">
              We are a team of budding intellectuals and creative engineers
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
