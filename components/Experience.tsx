"use client";
import React from "react";
import Link from "next/link";
import Title from "./Title";
import ShinyButton, { ShinyButton2 } from "./ui/shiny-button";

export default function Experience() {
  return (
    <section id="experience">
      {" "}
      <div className="max-w-7xl mx-auto px-8">
        <Title
          text={"Experiencia 💼"}
          className="flex flex-col items-center justify-center rotate-6"
        />
      </div>
      <ul className=" mt-14 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle ">
            {" "}
            <div className="timeline-start mb-5 ">
              <div className="text-2xl font-bold">
                Pasantía en el Área Comercial de Movistar Telefónica
              </div>
              <div className="text-xl text font-medium">
                MOVISTAR TELEFÓNICA
              </div>
              <time className="text-md">Enero - Junio 2019</time>
              <div className="text-[#ADB7BE] text-lg text-justify">
                <p className=" mt-1 ">
                  · Estuve a cargo de supervisar y controlar el stock en varios
                  puntos de venta físicos en la ciudad de Santa Fe.
                </p>
                <p className=" mt-2">
                  · Trabajo en equipo eficiente, responsabilidad y excelente
                  comunicación.
                </p>

                <p className=" mt-2">
                  · Trabajé en estrecha colaboración con equipos
                  multifuncionales para asegurar la alineación en objetivos y
                  entregables.
                </p>
                <p className=" mt-2">
                  · Participé en reuniones regulares de equipo para discutir
                  metas, progreso y desafíos, fomentando un ambiente
                  colaborativo.
                </p>
              </div>
            </div>
          </div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end mb-10 mt-5">
            <div className="text-2xl font-bold">
              Desarrollador Web Front End
            </div>
            <div className="text-xl text font-medium">LUTIN STUDIOS</div>
            <time className="text-md">Agosto - Noviembre 2022</time>
            <div className="text-[#ADB7BE] text-lg text-justify border-l-green-500 ">
              <p className="mt-1">
                · Colaboré en un proyecto Freelance para un cliente de Chile,
                que consistió en la creación de un sitio web promocional de NFTs
                (Tokens No Fungibles).
              </p>
              <p className="mt-2">
                · Desarrollo y diseño de la interfaz de usuario utilizando
                tecnologías como HTML, CSS, ReactJS y Bootstrap.
              </p>
              <p className="mt-2">
                · El equipo de trabajo estaba compuesto por dos Diseñadores
                Gráficos y dos Desarrolladores Web. Excelente comunicación y
                colaboración.
              </p>
              <p className="mt-2">
                · Buena comunicación efectiva, a lo largo del proyecto, mantuve
                canales abiertos de comunicación con mis compañeros de equipo.
                Regularmente discutíamos el progreso, desafíos e ideas,
                asegurando que todos estuviéramos en pos de llegar al objetivo.
              </p>
              <p className="mt-2">
                · Excelente adaptabilidad y flexibilidad, a medida que el
                proyecto evolucionaba, nos mantuvimos flexibles. Ajustamos
                nuestro enfoque cuando fue necesario, acomodándonos a cambios en
                los requisitos u obstáculos inesperados.
              </p>
            </div>
            <div className="mt-5 gap-5 flex md:flex-row flex-col">
              <div className="hover:scale-110 transition-all">
                <Link
                  href="https://lutin-varelacristianfacundo.vercel.app/"
                  target="_blank"
                >
                  <ShinyButton2 />
                </Link>
              </div>
              <div className="hover:scale-110 transition-all">
                <Link
                  href="https://github.com/VarelaCristianFacundo/lutin"
                  target="_blank"
                >
                  <ShinyButton />
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
