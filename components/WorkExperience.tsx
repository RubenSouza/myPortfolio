import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Project from "./Project";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col h-screen text-left items-center max-w-full px-10 mx-auto
  justify-evenly md:text-left md:flex-row relative overflow-hidden"
    >
      <h3
        className="absolute top-20 sm:pt-0 md:top-16 uppercase 
        tracking-[18px] text-gray-500 text-2xl"
      >
        Experience
      </h3>
      {/* <div className="w-full flex space-x-7 px-10 mt-20 pb-6 snap-x snap-mandatory overflow-x-scroll">

      </div> */}

      <div className="mt-20 snap-x snap-mandatory">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          infinite={false}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "#292929 / 40",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            className:
              "bg-[#292929 / 40] absolute right-1 md:right-5 lg:right-10",
            children: <span>{<ArrowRight />}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "#292929 / 40",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            className: "bg-[#292929 / 40] absolute left-1 md:left-5 lg:left-10",
            children: <span>{<ArrowLeft />}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 2,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}

          {experiences?.map(experience => {
            return (
              <div key={experience._id}>
                <ExperienceCard key={experience._id} experience={experience} />
              </div>
            );
          })}
        </ReactSimplyCarousel>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
