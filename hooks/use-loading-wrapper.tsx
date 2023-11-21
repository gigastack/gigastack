"use client";

import { AppContextType, useAppContext } from "@/store/app-context";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LoadingWrapper = ({ children }: Props) => {
  const { isLoading } = useAppContext() as AppContextType;

  return <>{!isLoading && children}</>;
};

export default LoadingWrapper;
