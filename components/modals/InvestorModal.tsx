import React from "react";
import Modal from "../ui/modal";
import { useInvestorModal } from "@/hooks/use-investor-modal";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo-filled.svg";

type Props = {};

const InvestorModal = (props: Props) => {
  const { onOpen, onClose, isOpen } = useInvestorModal();

  const onChange = (open: Boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      className="right-[10%] left-auto translate-x-0 translate-y-0 top-[10%] z-50 grid w-auto md:w-auto max-w-md bg-white text-primary data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-[8%] data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-[8%]"
      title="Believe in GigaStack?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col items-left gap-y-10">
        {/* <div className=" self-end cursor-pointer text-amber-100">
          <X size={24} />
        </div>
        <h3 className=" text-amber-100 text-3xl uppercase tracking-widest font-bold">
          Believe in us
        </h3> */}
        <p className="font-light">
          Prepared to take the world by storm, the gigastack team are a set of
          dedicated and hardworking individuals guided by a common goal for which we are prepared to and
          have been making sacrifices to see to fruition. Are you obliged to be part of our story?
        </p>
        <a
          href="mailto:"
          className=" flex items-center justify-center gap-2 w-full text-lg uppercase px-5 py-2 bg-secondary rounded-sm text-primary font-bold"
        >
          <span>Back us Today</span>
          <Image src={logo} alt="logo" className=" w-8" />
        </a>
      </div>
    </Modal>
    // <div>
    //   <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

    //   <div className="fixed right-[10%] top-[10%] z-50 grid w-full md:w-auto max-w-sm translate-x[-50%] translate-y[-50%] gap-4 border bg-primary-100 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
    //     <div className="flex flex-col items-left gap-y-5">
    //       <div className=" self-end cursor-pointer text-amber-100">
    //         <X size={24} />
    //       </div>
    //       <h3 className=" text-amber-100 text-3xl uppercase tracking-widest font-bold">
    //         Believe in us
    //       </h3>
    //       <p className="mt-3">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
    //         repellat tempora id assumenda quos nisi nulla? Mollitia officia
    //         distinctio optio eaque totam, ea dolorum delectus inventore saepe
    //         explicabo fugit illum.
    //       </p>
    //       <a  href="mailto:" className=" flex items-center justify-center gap-2 text-lg uppercase px-5 py-2 bg-secondary rounded-sm text-primary font-bold">

    //         <span>Back the bold</span>
    //         <Image src={logo} alt="logo" className=" w-8" />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default InvestorModal;
