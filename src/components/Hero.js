import React from "react";

// import hero data
import { heroData } from "../data";

// import icons
import { BsArrowRight } from "react-icons/bs";

// import components
import Header from "./Header";
import Review from "./Review";

const Hero = () => {
  // destructure hero
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="lg:h-[900px] py-12">
      <Header />
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
          {/* text */}
          <div className="text-center xl:text-left xl:absolute">
            {/* title */}
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              {title}
            </h1>
            {/* subtitle */}
            <p
              className="lead xl:max-w-[600px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {subtitle}
            </p>
            {/* <Review /> */}
            <button
              className="btn bg-primary mb-8 xl:mb-0"
              data-aos="fade-down"
              data-aos-delay="150"
              onClick={() => {
                window.open(
                  "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20Tanya",
                  "_blank"
                );
              }}
            >
              <div className="flex row justify-center ">
                {btnText}
                <BsArrowRight className="text-2xl group-hover:text-white transition ml-2 flex justify-center text-center" />
              </div>
            </button>
          </div>
          {/* image */}
          <div
            className="xl:absolute xl:-right-12 xl:bottom-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={image} alt="" className="w-[400px] pb-32 xl:w-[600px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
