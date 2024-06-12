"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "./Title";

export default function Experience() {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        {" "}
        <div className="max-w-5xl mx-auto px-8">
          <Title
            text={"Experiencia 💼"}
            className="flex flex-col items-center justify-center rotate-6"
          />
        </div>
        <ul className=" mt-16 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle"></div>
            <div className="timeline-start mb-5 ">
              <div className="text-xl font-bold">
                Pasantía en Area Comercial de Movistar Telefonica
              </div>
              <div className="text-lg text-green-500">MOVISTAR TELEFÓNICA</div>
              <time className="text-sm">Enero - Junio 2019</time>
              <div className="text-[#ADB7BE] text-justify">
                <p className=" mt-1 ">
                  · Estuve a cargo de la supervisión y control de stock en los
                  distintos puntos fisicos de venta de la ciudad de Santa Fe.
                </p>
                <p className=" mt-2">
                  · Eficiente trabajo en equipo, resposnabilidad y gran
                  comunicación.
                </p>
                <p className=" mt-2">
                  · Excelente cumplimiento de atención al cliente.
                </p>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end mb-10 mt-5">
              <div className="text-xl font-bold">
                Desarrollador Web Frontend
              </div>
              <div className="text-lg text-green-500">LUTIN STUDIOS</div>
              <time className="text-sm">Agosto - Noviembre 2022</time>
              <div className="text-[#ADB7BE] text-justify">
                <p className="mt-1">
                  · Colaboré en un proyecto Freelance para un cliente de Chile.
                  Consistió en la creación de una Página Web de promoción de NFT
                  (Tokens no Fungibles).
                </p>
                <p className="mt-2">
                  · Desarrollo y diseño en la interfaz de usuario utilizando
                  tecnologías como HTML, CSS, ReactJS y Bootstrap.
                </p>
                <p className="mt-2">
                  · El trabajo de equipo fue de dos Disenadores Graficos y dos
                  Programadores Web. Excelente comunicación y trabajo en equipo.
                </p>
              </div>
              <Link
                href="https://lutin-varelacristianfacundo.vercel.app/"
                target="_blank"
                className=" mt-3 flex gap-2 items-center"
              >
                <li className="cursor-default">Página Web.</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 hover:scale-125 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
              <Link
                href="https://github.com/VarelaCristianFacundo/lutin"
                target="_blank"
                className=" mt-1 flex gap-2 items-center "
              >
                <li className="cursor-default">Código Github.</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 hover:scale-125 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
