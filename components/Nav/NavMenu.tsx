import { Circle, Dot, MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import NavItem from "./NavItem";
import gsap from "gsap";

type Props = {
  closeMenu: () => void;
};

const NavMenu = ({ closeMenu }: Props) => {
  // const [hasRendered, setHasRendered] = useState(false);
  // let tl = useRef<GSAPTimeline | null>(null);

  // useEffect(() => {
  //   setHasRendered(true);
  // }, []);

  // useLayoutEffect(() => {
  //   if (hasRendered) {
  //     tl.current = gsap.timeline();
  //     const ctx = gsap.context(() => {});

  //     return () => ctx.revert();
  //   }
  // }, [hasRendered]);

  const onCloseMenu = () => {
    closeMenu();
  };

  return (
    <div className=" menu-cover hidden transition-all duration-300 fixed w-screen h-screen top-0 left-0 z-40">
      <div
        onClick={onCloseMenu}
        className="overlay opacity-0 fixed w-screen h-screen inset-0 z-40 bg-background/80 backdrop-blur-sm"
      />

      <div className=" menu translate-x-full fixed text-primary rounded-l-[2rem] z-40 right-0 top-0 w-full md:w-1/2  py-14 p-5 lg:p-10 bg-white h-screen flex flex-col justify-between gap-3">
        <div className="absolute top-10 right-10 z-50">
          <div
            onClick={onCloseMenu}
            className="p-2 bg-gray-200 rounded-md w-12 h-12 cursor-pointer flex flex-col items-center justify-center"
          >
            <span className=" h-[1px] w-full bg-primary inline-block rotate-45" />
            <span className=" h-[1px] w-full bg-primary inline-block -rotate-45 -translate-y-[1px] " />
          </div>
        </div>

        <div className="">
          <div className="flex gap-3 items-center">
            <div className=" h-2 w-2 rounded-full bg-primary"></div>
            <h4 className=" font-bold uppercase">GigaStack</h4>
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <NavItem title="Home" url="/" />
            <NavItem title="About" url="/about" />
            <NavItem title="Contact Us" url="/contact" />
          </div>
        </div>
        <div className="connect">
          <div className="flex gap-3 items-center">
            <div className=" h-2 w-2 rounded-full bg-primary"></div>
            <h4 className=" font-bold uppercase">connect</h4>
          </div>

          <div className="flex gap-5 mt-10 flex-wrap">
            <a
              href="http://"
              target="_blank"
              className=" flex items-center gap-1 group"
            >
              <span className=" uppercase btn-line before:bg-slate-600 after:bg-slate-600">
                Instagram
              </span>
              <MoveUpRight
                size={20}
                className=" transition-transform group-hover:transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:duration-300"
              />
            </a>

            <a
              href="http://"
              target="_blank"
              className=" flex items-center gap-1 group"
            >
              <span className=" uppercase btn-line before:bg-slate-600 after:bg-slate-600">
                Linkedin
              </span>
              <MoveUpRight
                size={20}
                className=" transition-transform group-hover:transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:duration-300"
              />
            </a>

            <a
              href="http://"
              target="_blank"
              className=" flex items-center gap-1 group"
            >
              <span className=" uppercase btn-line before:bg-slate-600 after:bg-slate-600">
                X/Twitter
              </span>
              <MoveUpRight
                size={20}
                className=" transition-transform group-hover:transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
