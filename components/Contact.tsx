import React from "react";
import { motion } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin } from "phosphor-react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen text-center items-center max-w-7xl mx-auto
      justify-evenly md:text-left md:flex-row relative"
    >
      <h3 className="absolute top-20 sm:pt-0 md:top-16 uppercase tracking-[18px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col items-center justify-evenly space-y-4 sm:space-y-8 mt-32 w-[300px] sm:w-full">
        <h4 className="text-2xl">
          I have got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">Lets Talk.</span>
        </h4>

        <div className="flex flex-row justify-center space-x-5 text-center">
          <Phone className="w-6 h-6" />
          <p>83981358394</p>
        </div>
        <div className="flex flex-row justify-center space-x-5 text-center">
          <EnvelopeSimple className="w-6 h-6" />
          <p>rubem.eliel2012@gmail.com</p>
        </div>
        <div className="flex flex-row justify-center space-x-5 text-center">
          <MapPin className="w-6 h-6" />
          <p>Av. São José 2244 - Alcantil-PB</p>
        </div>
        <form
          action="https://formsubmit.co/349d79100341e0709ff3531bdee6defb"
          method="POST"
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 w-fit mx-auto sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              type="text"
              className="form-style"
              name="name"
              placeholder="Name"
            />
            <input
              type="email"
              className="form-style"
              name="email"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="form-style"
            name="subject"
            placeholder="Subject"
          />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="text" name="_honey" className="hidden"></input>
          <textarea
            placeholder="Message"
            name="message"
            className="form-style"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] p-3 px-10 rounded-md
           text-black font-bold text-lg hover:bg-[#F7AB0A]/80"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
