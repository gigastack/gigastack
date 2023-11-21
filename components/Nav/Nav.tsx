"use client";

import { AppContextType, useAppContext } from "@/store/app-context";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import logo from "@/public/logo.png";
import { useInvestorModal } from "@/hooks/use-investor-modal";
import NavMenu from "./NavMenu";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const Nav = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const { addNavHeight } = useAppContext() as AppContextType;
  const pathname = usePathname()

  const { isOpen, onOpen } = useInvestorModal((state) => state);
  let tl = useRef<GSAPTimeline | null>(null);

  const openInvestor = () => {
    onOpen();
  };

  useEffect(() => {
    tl.current?.reversed(true)
  }, [pathname])

  useEffect(() => {
    tl.current = gsap
      .timeline({paused: true})
      .to(".menu-cover", {
        display: "block",
        duration: 0
      })
      .to(".overlay", {
        opacity: 1,
      })
      .to(
        ".menu",
        {
          xPercent: -100,
          ease: "power3.out",
          duration: 1,
        },
        "<"
      );

    tl.current.reverse();
    addNavHeight(navRef.current?.offsetHeight!);
  }, []);

  const toggleMenu = () => {
    tl.current?.reversed(!tl.current.reversed());
  };

  return (
    <nav ref={navRef} className=" border-b border-slate-100/20 bg-primary">
      <div className="max-w-7xl mx-auto p-1">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className=" uppercas font-futura text-4xl tracking-[0px] font-bold"
          >
            {/* <span>Giga</span><span className=" font-light text-secondary">Stack</span> */}
            <Image alt="logo" src={logo} className=" w-20" />
          </Link>
          <div className="flex items-center text-white font-bold">
            <button
              onClick={openInvestor}
              className=" group overflow-hidden relative uppercase font-ligh px-5 py-2 bg-white/10 backdrop-blur-lg border border-white/20 cursor-pointer drop-shadow-lg rounded-sm mr-16"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:transition-transform group-hover:duration-300 group-hover:-translate-y-10">
                <span className=" mr-2 tracking-widest">Investors</span>
                <Image src={logo} alt="" className=" w-6" />
              </div>

              <div className="flex items-center absolute translate-y-10 top-2 transition-transform duration-300 group-hover:transition-transform group-hover:duration-300 group-hover:-translate-y-0 ">
                <span className=" mr-2 tracking-widest">Investors</span>
                <Image src={logo} alt="" className=" w-6" />
              </div>
            </button>
            <button
              onClick={toggleMenu}
              className=" hamburger cursor-pointer h-14 w-14 rounded-full p-3 flex flex-col gap-y-[6px] bg-seondary items-center justify-center overflow-hidden"
            >
              <div className=" w-full h-[2px] bg-white" />
              <div className=" w-full h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </div>
      <NavMenu toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Nav;
