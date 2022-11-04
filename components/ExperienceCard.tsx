import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import curso1 from "../assets/curso1.png";
import techJS from "../assets/techJS.png";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg
        items-center flex-shrink-0 h-[480px] w-[300px]  lg:w-[450px] lg:h-[500px] snap-center 
          bg-[#292929] justify-evenly p-6 opacity-40 hover:opacity-100 cursor-pointer 
              transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
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
      >
        <Image
          src={urlFor(experience.companyImage).url()}
          alt="curso1"
          width={"120px"}
          height={"120px"}
          className="rounded-full w-28 h-28 xl:w-[200px] xl:h-[200px] object-cover object-center "
        />
      </motion.div>
      <div className="px-0 md:px-10 ">
        <h4 className="xl font-light uppercase">{experience.company}</h4>
        <p className="font-bold text-1xl mt-1">{experience.mode}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map(technology => {
            return (
              <Image
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt="techs"
                width={"28px"}
                height={"28px"}
                className="h-2 w-2 m-3 rounded-full"
              />
            );
          })}
        </div>
        <p className="uppercase py-2 text-sm text-gray-300">
          {experience.dateStarted} - {experience.dateEnded}
        </p>
        <ul className="list-disc ml-5 text-[13px] md:text-[15px] lg:text-base">
          <li>{experience.points}</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
