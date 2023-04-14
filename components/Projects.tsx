import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Project from "./Project";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Project as ProjectType } from "../typings";

type Props = { projects: ProjectType[] };

const Projects = ({ projects }: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const allProjects = projects.length;

  console.log(projects);

  let listaDeObjetos = projects;

  listaDeObjetos.sort((a, b) => {
    if (a._createdAt > b._createdAt) {
      return -1;
    } else if (a._createdAt < b._createdAt) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div
      className="flex flex-col h-screen text-left items-center w-full 
    mx-auto relative overflow-hidden justify-evenly"
    >
      <h3
        className="absolute top-20 sm:pt-0 md:top-16 uppercase 
        tracking-[18px] text-gray-500 text-2xl"
      >
        Projects
      </h3>
      {/* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"></div> */}
      <div className="mt-10">
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
              "bg-[#292929 / 40] absolute right-1 md:right-5 lg:right-10 z-20",
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
            className:
              "bg-[#292929 / 40] absolute left-1 md:left-5 lg:left-10 z-20",
            children: <span>{<ArrowLeft />}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}

          {listaDeObjetos.map((project, index) => {
            return (
              <Project
                key={project._id}
                project={project}
                index={index}
                allProjects={allProjects}
              />
            );
          })}
        </ReactSimplyCarousel>
      </div>
      <div
        className="w-full absolute top-[30%]
       bg-[#F7AB0A]/10 h-[300px] -skew-y-12 z-0 pointer-events-none"
      />
    </div>
  );
};

export default Projects;
