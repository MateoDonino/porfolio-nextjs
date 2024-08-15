"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MovingBorderBtn } from "../components/ui/moving-border";
import { motion } from "framer-motion";
import { GrCopy } from "react-icons/gr";
export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mateodonino@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy email address:", error);
    }
  };

  const text =
    "Desarrollador Web, apasionado con experiencia en la creación de aplicaciones eficientes y de calidad. Manejo tecnologías como JavaScript, React, Node.js, TypeScript, entre otras muchas más. Mi especialización es en el Front End, enfocándome en entregar soluciones eficientes y de alta calidad, trabajando de manera colaborativa en entornos ágiles.".split(
      " "
    );

  const text2 =
    "Me gusta entender tus necesidades y convertirlas en aplicaciones funcionales y fáciles de usar. Estoy siempre al tanto de las últimas tendencias del sector y mejoro constantemente mis habilidades para ofrecer soluciones innovadoras y efectivas.".split(
      " "
    );

  const text3 =
    "Podés ver mi CV para más información sobre mi experiencia, educación y certificaciones!".split(
      " "
    );

  const duration = 0.1; // duración de la animación de cada elemento
  const delayBetweenTexts = 0.1; // tiempo de espera entre cada elemento

  return (
    <section className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between mt-10">
      <div className="space-y-8 text-center lg:text-left">
        <h1 className=" text-3xl md:text-5xl font-bold ">
          Hola! Me presento 👋🏻 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"Soy Mateo"}
          </span>
        </h1>

        <div className="lg:w-2/3 md:w-full text-xl leading-9 text-gray-300 text-center lg:text-left">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>

        <div className="lg:w-2/3 md:w-full text-xl leading-9 text-gray-300 text-center lg:text-left">
          {text2.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10 + text.length * duration + delayBetweenTexts,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>

        <div className="lg:w-2/3 md:w-full text-xl leading-9 text-gray-300 text-center lg:text-left">
          {text3.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay:
                  i / 10 +
                  text.length * duration +
                  text2.length * duration +
                  2 * delayBetweenTexts,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>

        <hr className="invisible" />
        <hr className="invisible" />
        <hr className="invisible" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
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
          <div className="absolute bottom-5 sm:botton-14 left-0 sm:-left-10 hover:scale-110 transition-all">
            <Link
              href="https://drive.google.com/file/d/1Luq4qDG6N-xZZ3YrK9qom2AyZdGYQfiU/view?usp=drive_link"
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
    </section>
  );
}
