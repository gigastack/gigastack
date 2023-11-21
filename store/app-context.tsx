"use client";

import gsap from "gsap";
import React, {
  useContext,
  useState,
  createContext,
  useLayoutEffect,
  useRef,
} from "react";

export type AppContextType = {
  addNavHeight: (value: number) => void;
  navHeight: number;
  endLoading: () => void;
  isLoading: boolean;
  tl: GSAPTimeline | null;
};

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: any) => {
  const tlRef = useRef<GSAPTimeline | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [tl, setTl] = useState<GSAPTimeline | null>(null);
  // // let ctxRef = useRef<gsap | null>(null)
  const [navHeight, setNavHeight] = useState<number>(0);

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline();
  }, [navHeight]);


  const addNavHeight = (value: number) => {
    setNavHeight(value);
  };

  const endLoading = () => {
    setIsLoading(false);
  };

  const value = {
    addNavHeight,
    navHeight,
    tl: tlRef.current,
    isLoading,
    endLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
