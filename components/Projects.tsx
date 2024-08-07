"use client";
import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiJavascript,
  SiNodedotjs,
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Title from "./Title";
import Link from "next/link";
import { cn } from "../lib/utils";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import ShinyButton from "./ui/shiny-button";

export default function Projects() {
  const projects = [
    {
      title: "Api Rick and Morty",
      description:
        "En este proyecto, hice un llamado a la API de Rick and Morty para permitir a los usuarios buscar y ver información sobre los personajes. La app incluye un campo de búsqueda y tres filtros, con opciones para eliminarlos y reiniciar la búsqueda. Está programado con React, Vite, GraphQL y TailwindCSS, la aplicación ofrece una interfaz de usuario moderna y responsiva. El proyecto está desplegado en Netlify para un acceso rápido y eficiente.",
      tech: [SiReact, SiVite, SiTailwindcss, SiGraphql],
      link: "https://api-rickmorty-vite.netlify.app/",
      cover: "/web13.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    },
    {
      title: "React Native Expo App",
      description:
        "Este proyecto, desarrollado con React Native y Expo, consumí la API de Metacritic para mostrar los juegos mejor puntuados. La app cuenta con rutas dinámicas y una navegación sencilla, brindando una experiencia de usuario fluida y agradable. La interfaz de usuario está diseñada con TailwindCSS, asegurando un diseño moderno y adaptable.",
      tech: [TbBrandReactNative, SiExpo, SiTailwindcss],
      link: "https://github.com/MateoDonino/react-native-app",
      cover: "/web12.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/react-native-app",
    },
    {
      title: "Lutin Studio",
      description:
        "Este proyecto, desarrollado como parte de la experiencia laboral, implicó la creación de un sitio web para promocionar NFTs (tokens no fungibles) para un cliente de Chile. La app cuenta con una interfaz moderna y atractiva, asegurando responsividad y facilidad de uso. Construido con HTML5, CSS, React, Vite y Bootstrap, el sitio web ofrece una experiencia de usuario fluida. El proyecto está alojado en Vercel para un rendimiento y accesibilidad óptimos.",
      tech: [SiHtml5, SiCss3, SiReact, SiVite, SiBootstrap],
      link: "https://lutin-varelacristianfacundo.vercel.app/",
      cover: "/web14.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/VarelaCristianFacundo/lutin",
    },
    {
      title: "Node.js Aplication",
      description:
        "Este es un ejemplo práctico de Node.js (JavaScript en el servidor) donde creé una aplicación web simple para entender cómo instalar módulos como Express.js y cómo usarlo para construir aplicaciones multipágina. También agregué estilos CSS y frameworks como Bootstrap 5 sirviendo archivos estáticos. En este proyecto, cubrí las mejores prácticas para estructurar la aplicación y gestionar dependencias.",
      tech: [SiJavascript, SiCss3, SiNodedotjs],
      link: "https://nodejs-project-chyw.onrender.com/",
      cover: "/web15.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/nodejs-project",
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center">
      <Title
        text={"Proyectos 🗂️"}
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target={project.target}>
              <div
                className={cn(
                  "p-2 rounded-2xl border-double border-8 border-black",
                  project.background
                )}
              >
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5 bg-black bg-opacity-85 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>

              <div className="text-center mt-5 cursor-default ">
                {project.description}
              </div>

              <div className="flex justify-center mt-5 hover:scale-110 transition-all">
                <Link href={project.github} target="_blank">
                  <ShinyButton />
                </Link>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
