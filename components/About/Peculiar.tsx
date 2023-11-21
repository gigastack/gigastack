import Image from "next/image";
import React from "react";
import peculiar from "@/public/images/about3.jpg";

type Props = {};

const Peculiar = (props: Props) => {
  return (
    <section className=" rounded-t-[3rem] bg-black text-white py-32 lg:py-0">
      <div className="p-5 lg:p-10 lg:py-24 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className=" lg:col-span-4">
            <div className="relative h-full flex items-center">
              <Image
                src={peculiar}
                alt="peculiar"
                className=" rounded-[3rem] object-cover hidden lg:block lg:h-[30rem] lg:w-[30rem] "
              />
            </div>
          </div>
          <div className="lg:col-span-2" />
          <div className=" lg:col-span-6 flex flex-col">
            <h3 className=" font-bold">
              {" "}
              What We <span className="text-secondary">Value</span>{" "}
            </h3>
            <div className="mt-20 flex flex-col gap-10 items-center">
              <div className="grid grid-cols-5">
                <div className="col-span-1">
                  <h3 className="font-bold text-secondary">01.</h3>
                </div>

                <div className="col-span-4">
                  <h4 className="font-bold ">Teamwork</h4>
                  <h5 className="mt-3 font-light text-gray-200">
                    As a company, we believe that teamworks is key to foster
                    accomplishment of tasks in a seamless manner. Alone we can
                    do so little, together we can do so much.
                  </h5>
                </div>
              </div>

              <div className="grid grid-cols-5">
                <div className="col-span-1">
                  <h3 className="font-bold text-secondary">02.</h3>
                </div>

                <div className="col-span-4">
                  <h4 className="font-bold ">
                    Attention to Detail
                  </h4>
                  <h5 className="mt-3 font-light text-gray-200">
                    We focus on all areas of a project, no matter how small.
                    From our point of view, the little deails are key to
                    excellent products.
                  </h5>
                </div>
              </div>

              <div className="grid grid-cols-5">
                <div className="col-span-1">
                  <h3 className="font-bold text-secondary">03.</h3>
                </div>

                <div className="col-span-4">
                  <h4 className="font-bold ">Efficiency</h4>
                  <h5 className="mt-3 font-light text-gray-200">
                    We maintain efficiency while working in order to enhance
                    project accuracy and overall brilliance of our projects.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Peculiar;
