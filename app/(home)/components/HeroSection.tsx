"use client";
import React from "react";
import Link from "next/link";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      >
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-bold">
            Hola!👋🏻 <br />
            <span className="underline underline-offset-8 decoration-green-500">
              {"Soy Mateo"}
            </span>
          </h1>
          <div className="ml-9 flex flex-row bg-gray-900 h-10 w-[300px] rounded-[30px]">
            <span className="flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center">
              mateodonino@gmail.com
            </span>
            <div className="w-[15%] bg-indigo-500 rounded-r-2xl">
              <IoMdMail className="w-6 h-6 mt-2 ml-2 " />
            </div>
          </div>
          <p className="md:w-96 text-lg text-gray-300">
            {
              "Especializado en el Frontend, utilizando las últimas tecnologías y frameworks disponibles puedo crear sitios y aplicaciones web a medida que se adapten a tus necesidades específicas. Te puedo asesorar en la selección de la mejor tecnología para tu proyecto, analizar los requisitos y planificar el desarrollo. Te invito a que le des un vistazo a mi CV! Ahí podes encontrar todos mis datos, educación y certificaciones."
            }
          </p>
          <hr className="invisible" />
          <hr className="invisible" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      >
        <div className=" relative">
          <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
            <div className="flex gap-3 translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
              <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-3 -translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
            </div>
            <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
          </div>
          <div className="absolute bottom-5 sm:botton-14 left-0 sm:-left-10">
            <Link
              href="https://drive.google.com/file/d/1eSq6WUhzABvOVoRxosGQN53bDHCJbmW-/view?usp=drive_link"
              target="_blank"
            >
              <MovingBorderBtn
                borderRadius="0.5rem"
                className="p-3 font-semibold"
              >
                <p>📑 Chequea mi CV!</p>
              </MovingBorderBtn>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
