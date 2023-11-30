"use client";

import gsap from "@/gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import vision from "@/public/images/about2.jpg";
import { HiArrowDown } from "react-icons/hi";

import solution from "@/public/images/solution.jpg";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

type Props = {};

const Solutions = (props: Props) => {
  let timeline = useRef<GSAPTimeline | null>(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const splitHead = new SplitType(contentRef.current!, {
      types: "chars,lines,words",
    });

    const ctx = gsap.context(() => {
      const tl = (timeline.current = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      }));
    });

    gsap.fromTo(
      splitHead.words,
      {
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
        },
        y: 0,
        stagger: 0.01,
        ease: "power3.inOut",
        duration: 1,
      }
    );
  }, []);

  return (
    <section className=" text-gray-700 py-12 rounded-b-[3rem]">
      <div className=" max-w-7xl p-5 lg:p-10 mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-secondary" />
          <h5 className=" inline font-bold">Our Solutions</h5>
        </div>
        <div className=" w-full pt-10 lg:pt-10" />
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" lg:w-3/5 ">
            <div className=" lg:w-4/5 mr-auto">
              <h5 ref={contentRef} className=" text-lg leading-relaxed">
                Our focus is hinged on creating stacks of solutions across
                different sectors starting from logistics. We are of the opinion
                that we do not achieve success until we are able to provide
                definite solutions. Among the various areas we intend to provide
                solutions on include; Security, E-commerce, web3 and
                decentralized smart contracts and so on. However, we have
                decided to get underway with logistics via our solution, Eco-Riders
              </h5>
              <hr className=" border-slate-100/40 mt-5" />
              <div className="flex items-center">
                {/* <button className=" group flex items-center text-primary bg-secondary mt-5 px-7 py-3 rounded-full">
                  <span className=" font-bold mr-2 group-hover:translate-x-[102%] group-hover:mr-0 transition duration-300">View</span>
                  <span className=" w-full h-full rounded-full bg-primary text-secondary p-2 group-hover:-translate-x-[102%] group-hover:mr- transition duration-300">
                    <HiArrowDown />
                  </span>
                </button> */}

                <button
                  onClick={() => new Lenis().scrollTo("#ecodesc")}
                  className=" group text-primary bg-secondary hover:bg-primary duration-300 hover:duration-300 mt-5 px-6 py-3 rounded-md h-12 w-32"
                >
                  <div className=" relative flex items-center">
                    <span className=" absolute font-bold group-hover:text-white group-hover:translate-x-[2.5rem] transition duration-300">
                      View
                    </span>
                    <span className=" absolute translate-x-[2.5rem] rounded-full bg-primary text-secondary p-2 group-hover:-translate-x-[0] group-hover:bg-white group-hover:text-primary transition duration-300">
                      <HiArrowDown />
                    </span>
                  </div>
                </button>
              </div>
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

    // <section className="p-5 max-w-7xl mx-auto py-24">
    //   <div className="">
    //     <h4 className=" font-bold relative text-2xl before:w-[10px] before:h-[10px] before:rounded-full before:bg-secondary before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-5 ">
    //       Our Solutions
    //     </h4>
    //     <div className="mt-10">
    //       <div className="grid grid-cols-12 gap-20">
    //         <div className=" col-span-5">
    //           <div className=" relative w-full h-[90vh] rounded-2xl">
    //             <Image
    //               className=" object-cover rounded-2xl"
    //               alt="solutions_image"
    //               src={solution}
    //               fill={true}
    //             />
    //           </div>
    //         </div>
    //         <div className=" col-span-7 pl-20 pt-10">
    //           <h5 className=" text-lg leading-relaxed">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
    //             rerum ratione laborum ducimus reiciendis natus quisquam, libero{" "}
    //             <br />
    //             <br />
    //             eius sint voluptas labore excepturi incidunt deleniti quidem
    //             necessitatibus magnam dolorem ullam autem aspernatur.
    //             Dignissimos enim, accusantium nam quo magni ullam quae explicabo
    //             qui voluptatem, sapiente ipsum neque beatae veniam non in.
    //             Doloribus!
    //           </h5>
    //           <hr className=" border-slate-100/40 mt-5" />
    //           <div className="flex items-center justify-end">
    //             <button className=" mr-10">
    //               <a className="btn-line" href="">
    //                 button
    //               </a>
    //             </button>
    //             <button className=" flex items-center gap-2 text-primary bg-secondary mt-5 px-7 py-3 rounded-full">
    //               <span className=" font-bold">View</span>
    //               {/* <div className=" overflow-hidden"> */}
    //               <span className=" w-full h-full rounded-full bg-primary text-secondary p-2">
    //                 <HiArrowDown />
    //               </span>
    //               {/* </div> */}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Solutions;
