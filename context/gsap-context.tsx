"use client";

import gsap from "gsap";
import { createContext, useContext, useLayoutEffect, useRef } from "react";

export const GsapContext = createContext({
    // tl: gsap.timeline()
});

const GsapProvider = ({ children }: any) => {
  const tlRef = useRef<GSAPTimeline | null>(null);
  // let ctxRef = useRef<gsap | null>(null)

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline();
  }, []);

  const value = {
    tl: tlRef.current,
  };

  return <GsapContext.Provider value={value}></GsapContext.Provider>;
};

export const useTimelineContext = () => {
    return useContext(GsapContext)
}