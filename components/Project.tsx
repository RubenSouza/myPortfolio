import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  project: Project;
  index: number;
  allProjects: number;
};

const Project = ({ project, index, allProjects }: Props) => {
  return (
    <Link href={project?.linkToBuild}>
      <motion.div
        className="flex flex-col items-center flex-shrink-0 h-[450px] w-[300px] md:w-[700px] lg:w-[1200px] 
      text-center md:text-left -space-y-4 cursor-pointer overflow-hidden justify-evenly"
      >
        <motion.img
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          src={urlFor(project?.image).url()}
          alt="projects"
          className="w-[700px] h-[250px] object-scale-down"
        />

        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="space-y-3 flex flex-col items-center w-[300px] md:w-[500px] lg:w-[700px]"
        >
          {" "}
          <h4 className="text-2xl md:text-3xl text-center w-[250px] md:w-full">
            <span className="underline decoration-[#f7ab0a]/50">
              Case Study {index + 1} of {allProjects}
            </span>{" "}
            {project.title}
          </h4>
          <p className="text-sm lg:text-base">{project.summary}</p>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Project;
