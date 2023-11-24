import React from "react";
import { MoveUpRight } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="  text-gray-800 relative p-3">
      <div className="flex flex-col justify-between p-5 lg:p-14 bg-primary-light h-screen rounded-xl">
        <div className=" absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[300px] rounded-full bg-secondary opacity70 blur-[170px] -z-0" />
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className=" lg:col-span-8">
            <h2 className="font-bold ">
              Let&apos;s curate credible solutions to problems
            </h2>
            <a
              className="btn-line text- uppercase mt-8 text-slate-800 font-bold inline-block before:bg-slate-800 after:bg-slate-800"
              href=""
            >
              Tell us about it
            </a>
          </div>
        </div>

        <div className="flex gap-10 flex-col-reverse lg:flex-row justify-between text-slate-800 font-ligh">
          <h5>
            &copy;{new Date().getFullYear()} GigaStack Limited - All rights
            Reserved
          </h5>

          <div className="flex gap-5 flex-wrap">
            <a
              href="http://"
              target="_blank"
              className=" flex items-center gap-1 group"
            >
              <span className=" uppercase btn-line before:bg-slate-800 after:bg-slate-800">
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
              <span className=" uppercase btn-line before:bg-slate-800 after:bg-slate-800">
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
              <span className=" uppercase btn-line before:bg-slate-800 after:bg-slate-800">
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
    </footer>
  );
};

export default Footer;
