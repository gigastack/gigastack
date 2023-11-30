"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";
import uc from "@/public/images/uc.jpeg";
import { Linkedin, Instagram, Mail, LucideInstagram, InstagramIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { founders } from "./foundersData";

type Props = {};

const Founders = (props: Props) => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useLayoutEffect(() => {
    if (hasRendered) {
      gsap.registerPlugin(ScrollTrigger);
      const founders = gsap.utils.toArray<HTMLElement>(".founder");
      const lastFounder = founders[founders.length - 1];

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: ".founders",
          start: "top top",
          endTrigger: lastFounder,
          end: "top top+=25%",
          pin: ".founders",
        });

        founders.forEach((founder, i) => {
          const animation = gsap
            .timeline()
            .to(founder, {
              // opacity: 1,
              top: 0 + i * 15,
            })
            .to(founder, {
              scale: 0.9 + (i * 0.02),
            });

            // const bodyAnimation = gsap.to("body", {
            //   backgroundColor: "#ffffff",
            //   ease: "linear"
            // })

          ScrollTrigger.create({
            trigger: ".founders",
            start: "top top",
            endTrigger: founder,
            end: "top top",
            animation,
            scrub: true,
            anticipatePin: 1,
            // pinSpacing: false,
            // pin: founder,
          });

          // ScrollTrigger.create({
          //   trigger: ".founders",
          //   start: "top center",
          //   endTrigger: lastFounder,
          //   end: "bottom bottom",
          //   toggleActions: "play none none reverse",
          //   animation: bodyAnimation,
          //   scrub: true,
          //   // onEnter: () => gsap.to("body", {backgroundColor: "#ffffff"}),
          //   onLeave: () => gsap.to("body", {backgroundColor: "#0b163d"}),
          //   onEnterBack: () => gsap.to("body", {backgroundColor: "#ffffff"}),
          //   // onLeaveBack: () => gsap.to("body", {backgroundColor: "#0b163d"}),
          //   // pinSpacing: false,
          //   // pin: founder,
          // });

          //   ScrollTrigger.create({
          //     trigger: founder,
          //     start: "top top+=25%",
          //     endTrigger: ".founders",
          //     end: "bottom bottom",
          //     pin: true,
          //     scrub: true,
          //       animation,
          //     pinSpacing: false,
          //     anticipatePin: 1,
          //   });

          //   gsap.to(founder, {
          //     scale: 0.9,
          //     y: i * 10,
          //     ease: "power3.out",
          //     scrollTrigger: {
          //       trigger: founder,
          //       start: "top top+=25%",
          //       endTrigger: ".founders",
          //       end: "bottom bottom",
          //       pin: true,
          //       scrub: 1,
          //       pinSpacing: false,
          //       anticipatePin: 1
          //     },
          //   });
        });
      });

      return () => ctx.revert();
    }
  }, [hasRendered]);

  useLayoutEffect(() => {}, []);
  return (
    <section className=" founders p-5 lg:p-10 relative bg-whit">
      {/* <div className="frame absolute w-full top-0 h-screen" /> */}
      <h3 className="head font-bold text-center text-primary uppercas tracking[0.1em] ">
        Meet The Founders
      </h3>

      <div className=" relative h-screen [&>*:first-child]:top-20 [&>*:last-child]:top-[300%] ">
        {founders.map((founder, i) => (
          <div
            key={i}
            className=" border border-slate-600 opacity0 absolute top-[150%] left-0 founder mt14 rounded-2xl p-3 lg:p-8 bg-primary will-change-transform"
            style={{ boxShadow: "3px -5px 5px 2px rgba(48, 48, 49, 0)" }}
          >
            <div className="flex items-center flex-col-reverse lg:flex-row lg:items-start justify-between text-primar">
              <div className=" mt-5 lg:mt-0 lg:mr-[20%]">
                <div className="">
                  <h3 className=" text-gray-300 font-bold uppercas">{founder.name}</h3>
                  <h4 className=" text-gray-300 mb-5 uppercas">{founder.position}</h4>
                  <h5 className=" text-gray-300">{founder.content1}</h5>
                  <br />
                  <h5 className=" text-gray-300">{founder.content2}</h5>
                </div>

                <div className=" mt-10 lg:mt-20">
                  <div className="flex items-center gap-5">
                    <a className=" " href="" target="_blank">
                      <Linkedin size={24} fill="#ffffff"  className="text-white" />
                    </a>

                    <a className=" " href="" target="_blank">
                      <Instagram size={24} fill="#ffffff" color="black" strokeWidth={2}  className="text-white" />
                    </a>

                    <a className=" " href="mailto:">
                      <Mail size={24} fill="#ffffff" color="black" strokeWidth={2}  className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className=" rounded-ful relative w-full h-40 md:w-64 md:h-64 flex-shrink-0">
                <Image
                  src={founder.image}
                  alt="profile"
                  fill={true}
                  className=" rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
