"use client";

import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollProvider = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lenis = useRef<Lenis | null>(null);

  const raf = useCallback(
    (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    },
    [lenis]
  );

  useEffect(() => {
    if (lenis.current) {
      lenis.current?.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
      lenis.current = new Lenis({
        smoothTouch: true,
        smoothWheel: true,
      });

    const resize = setInterval(() => {
      lenis.current?.resize();
    }, 150);

    requestAnimationFrame(raf);

    return () => {
      clearInterval(resize);
      lenis.current?.destroy();
    };
  }, []);

  return null;
};

export default ScrollProvider;
