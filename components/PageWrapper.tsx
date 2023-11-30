"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: Props) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
        //   initial={{ opacity: 0, y: 15 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   exit={{ opacity: 0, y: 15 }}
        //   transition={{delay: 1.5}}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
