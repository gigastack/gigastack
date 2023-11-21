"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import user from "@/public/images/home-mockup.png";
import tracking from "@/public/images/tracking-mockup.png";
import mapTracking from "@/public/images/maptracking-mockup.png";
import geolocation from "@/public/images/geolocation-mockup.png";
import wallet from "@/public/images/wallet-mockup.png";

type Props = {};

const EcoRides = (props: Props) => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useLayoutEffect(() => {
    if (hasRendered) {
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        const photos = gsap.utils.toArray<HTMLElement>(
          ".photo:not(:first-child)"
        );
        const prompts = gsap.utils.toArray<HTMLElement>(
          ".prompt:not(:first-child)"
        );
        // gsap.set(photos, { opacity: 0 });
        // gsap.set(".overlay", { yPercent: 0 });

        const allPhotos = gsap.utils.toArray(".photo");

        let mm = gsap.matchMedia();

        mm.add("(min-width: 600px)", () => {
          ScrollTrigger.create({
            trigger: ".frame",
            start: "top top",
            endTrigger: ".ecotop",
            end: "bottom bottom",
            pin: ".frame",
          });
          ScrollTrigger.create({
            trigger: ".frame",
            start: "top top",
            endTrigger: ".ecotop",
            end: "bottom bottom",
            pin: ".pinnedBlock",
          });
        });

        prompts.forEach((prompt, index) => {
          let headline = prompt.querySelector("h3");
          let animation = gsap
            .timeline()
            .from(photos[index].querySelector("img"), { y: 20 })
            .to(
              photos[index],
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              },
              "<"
            );
          // .to(".overlay", { yPercent: -100 })
          // .to(photos[index], {
          //   opacity: 1,
          // })
          // .to(".overlay", { yPercent: 0 });
          ScrollTrigger.create({
            trigger: headline,
            start: "top bottom+=30%",
            end: "top center",
            animation,
            // toggleActions: "play none reverse none",
            scrub: true,
            anticipatePin: 1,
          });
        });

        //   const animation = gsap.to(".photo:not(:first-child)", {
        //     opacity: 1,
        //     scale: 1,
        //     duration: 1,
        //     stagger: 1,
        //   });

        //   ScrollTrigger.create({
        //     trigger: ".ecoriders",
        //     start: "top top",
        //     pin: ".pinnedBlock",
        //     animation: animation,
        //     scrub: true,
        //   });
      });

      return () => ctx.revert();
    }
  }, [hasRendered]);

  return (
    <section className="ecoriders rounded-lg relative">
      <div className="frame absolute w-full top-0 h-screen bg-white20 rounded-lg borde border-white20" />
      {/* <h3 className=" font-bold text-[6vw]">ECO RIDERS</h3> */}
      <div className="ecotop grid grid-cols-1 lg:grid-cols-2 gap-10">
        <aside className=" items-center pinnedBlock flex-col justify-center lg:h-screen hidden lg:flex">
        <h1 className=" text-[10vw] absolute top-5 left-20 text-gray-400 opacity-[0.15] uppercase -z-10 whitespace-nowrap">ECO RIDERS</h1>
          <div className=" h-[23rem] relative w-[23rem] overflow-hidden rounded-3xl ">
            <div className="photo top-0 absolute w-full h-full z-[1] bg-orange-200 bg p-3">
              <Image
                className=" w-1/2 mx-auto object-cover rounded-3xl"
                src={user}
                alt=""
                // fill={true}
              />
            </div>
            <div
              className="photo top-0 absolute w-full h-full z-[2] bg-indigo-200 p-3"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                className=" w-1/2 mx-auto object-cover rounded-3xl"
                src={tracking}
                alt=""
                // fill={true}
              />
            </div>
            <div
              className="photo top-0 absolute w-full h-full z-[3] bg-amber-200 p-3"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                className=" w-1/2 mx-auto object-cover rounded-3xl"
                src={mapTracking}
                alt=""
                // fill={true}
              />
            </div>

            <div
              className="photo top-0 absolute w-full h-full z-[3] bg-teal-200 p-3"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                className=" w-1/2 mx-auto object-cover rounded-3xl"
                src={geolocation}
                alt=""
                // fill={true}
              />
            </div>

            <div
              className="photo top-0 absolute w-full h-full z-[3] bg-fuchsia-200 p-3 bg"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                className=" w-1/2 mx-auto object-cover rounded-3xl"
                src={wallet}
                alt=""
                // fill={true}
              />
            </div>
            {/* <div className="overlay h-full w-full bg-secondary absolute top-0 left-0 translate-y-full z-10" /> */}
          </div>
        </aside>

        <aside className=" lg:w-3/5 p-5 mr-auto flex flex-col">
          <div className="prompt py-12 lg:py-0 lg:h-screen flex flex-col justify-center ml-auto">
            <h3 className=" text-secondar font-bold uppercase">Home Screen</h3>
            <h5 className=" text-xl leading-relaxed text-gray-600 mt-10">
              This screen displays ongoing and pending transactions, provides an
              avenue to fund an account and shows current account balance.
            </h5>
          </div>

          <div className="prompt py-12 lg:py-0 lg:h-screen flex flex-col justify-center ml-auto">
            <h3 className=" text-secondar font-bold uppercase">Tracking</h3>
            <h5 className=" text-xl leading-relaxed text-gray-600 mt-10">
              To foster reliability and transparency, we have created an avenue
              on our EcoRides Application for users to track their package(s).
            </h5>
          </div>

          <div className="prompt py-12 lg:py-0 lg:h-screen flex flex-col justify-center ml-auto">
            <h3 className=" text-secondar font-bold uppercase">Map Tracking</h3>
            <h5 className=" text-xl leading-relaxed text-gray-600 mt-10">
              To enable further tracking of packages, users can access the map
              tracking screen to view the location of their packages in real
              time
            </h5>
          </div>

          <div className="prompt py-12 lg:py-0 lg:h-screen flex flex-col justify-center ml-auto">
            <h3 className=" text-secondar font-bold uppercase">
              Geolocation Addresses
            </h3>
            <h5 className=" text-xl leading-relaxed text-gray-600 mt-10">
              We have provided a real time address autocomplete feature on our
              EcoRides Application to simplify the process of address inputs.
            </h5>
          </div>

          <div className="prompt py-12 lg:py-0 lg:h-screen flex flex-col justify-center ml-auto">
            <h3 className=" text-secondar font-bold uppercase">Funding</h3>
            <h5 className=" text-xl leading-relaxed text-gray-600 mt-10">
              A deposit feature is provided on the application which utilizes
              modern payment gateways. Accounts are pre-funded before a delivery
              order can be placed.
            </h5>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default EcoRides;
