import About from "@/components/Home/About";
import EcoDescription from "@/components/Home/EcoDescription";
import EcoRides from "@/components/Home/EcoRides";
import Founders from "@/components/Home/Founders";
import Hero from "@/components/Home/Hero";
import Next from "@/components/Home/Next";
import Radical from "@/components/Home/Radical";
import Solutions from "@/components/Home/Solutions";
import WordSlide from "@/components/Home/WordSlide";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Radical />
      <WordSlide />
      <Solutions />
      <EcoDescription />
      <EcoRides />
      {/* <section className=" py-24">
        <div className="p-5">
          <div className="flex justify-end">
            <div className=" lg:w-1/2">
              <h4 className=" font-ligh text-3xl leading-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae, deleniti quia. Hic, dicta labore minus eveniet
                numquam accusamus quos harum corporis, assumenda voluptas error
                laboriosam enim dolor cupiditate dolorem aspernatur ipsum
                doloremque culpa placeat suscipit aut odit est quisquam!
                Voluptatem.
              </h4>
            </div>
          </div>
        </div>
      </section> */}
      <Founders />
      <About />
    </PageWrapper>
  );
}
