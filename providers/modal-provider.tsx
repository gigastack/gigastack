"use client"

import InvestorModal from "@/components/modals/InvestorModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) {
    return null
  }

  return(
    <>
        <InvestorModal />
    </>
  )
};
