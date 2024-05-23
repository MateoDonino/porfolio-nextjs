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
  SiGithub,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import { FaCode } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      title: "Api Rick and Morty",
      description:
        "Api de Rick and Morty que permite a los usuarios buscar y visualizar informacion sobre los personajes. Consta de un campo busqueda y 3 filtros, como asi tambien poder borrarlos y resetear la busqueda, desplegada en Vercel.",
      tech: [SiReact, SiVite, SiTailwindcss, SiGraphql],
      link: "https://dev-challenge-rickymorty.vercel.app/",
      cover: "/web1.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    },
    {
      title: "Lutin Studio",
      description:
        "Proyecto como Freelance, cración de una Página Web sobre la promoción de NFT (tokens no fungibles) para un cliente de Chile. El equipo consistió de dos Diseñadores Gráficos y dos Desarrolladores Web. Desplegada en Vercel.",
      tech: [SiHtml5, SiCss3, SiReact, SiVite, SiBootstrap],
      link: "https://lutin-varelacristianfacundo.vercel.app/",
      cover: "/web4.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/VarelaCristianFacundo/lutin",
    },
    {
      title: "Aplicación Node.js",
      description:
        "Aplicación Web simple con NodeJS, la cual nos permite ir de pagina en pagina, la interfaz es ligera y rapida, y está diseñada para usuarios que buscan una navegacion eficaz y sencilla, desplegada en Render.",
      tech: [SiJavascript, SiNodedotjs, SiCss3],
      link: "https://nodejs-project-chyw.onrender.com/",
      cover: "/web2.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/nodejs-project",
    },
    {
      title: "Portfolio Web",
      description:
        "Si, este mismo proyecto. Portfolio Web con mi resumen, donde se pueden encontrar mis proyectos, como tambien el poder interactuar para poder descargar mi CV, ir a mi LinkedIn, Github y más. Desplegada en Vercel.",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text={"Proyectos 🗂️"}
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
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

              <div className="text-center mt-2 cursor-default">
                {project.description}
              </div>

              <Link href={project.github} target="_blank">
                <p className="mt-3 flex flex-row gap-2 text-xl justify-center hover:text-green-500">
                  Codigo en GitHub <SiGithub className="mt-1 w-5 h-5" />
                </p>
              </Link>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/*

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
  SiGithub,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import { FaCode } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      title: "Api Rick and Morty",
      tech: [SiReact, SiVite, SiTailwindcss, SiGraphql],
      link: "https://dev-challenge-rickymorty.vercel.app/",
      cover: "/web1.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    },
    {
      title: "Lutin Studio",
      tech: [SiHtml5, SiCss3, SiReact, SiVite, SiBootstrap],
      link: "https://lutin-varelacristianfacundo.vercel.app/",
      cover: "/web4.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/VarelaCristianFacundo/lutin",
    },
    {
      title: "Portfolio Web",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
    {
      title: "Portfolio Web",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
    {
      title: "Portfolio Web",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://porfolio-nextjs-eight.vercel.app/",
      cover: "/web7.png",
      background: "bg-slate-900/[0.8]",
      target: "_blank",
      github: "https://github.com/MateoDonino/porfolio-nextjs",
    },
  ];

  const [visibleProjects, setVisibleProjects] = React.useState(4);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleProjects(4);
  };

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text={"Proyectos 🗂️"}
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.slice(0, visibleProjects).map((project, index) => {
          return (
            <Link href={project.link} key={index} target={project.target}>
              <div className={cn("p-2 rounded-2xl", project.background)}>
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
              <Link href={project.github} target="_blank">
                <p className="mt-3 flex flex-row gap-2 text-xl justify-center hover:text-green-500">
                  Codigo en GitHub <SiGithub className="mt-1 w-5 h-5" />
                </p>
              </Link>
            </Link>
          );
        })}
      </div>
      {visibleProjects < projects.length && (
        <div className="mt-5 flex justify-center">
          <button
            className="border rounded-lg  px-4 py-2 text-xl hover:text-green-500"
            onClick={handleShowMore}
          >
            Mostrar Más
          </button>
        </div>
      )}
      {visibleProjects > 4 && (
        <div className="flex justify-center">
          <button
            className="border rounded-md px-4 py-2 text-xl hover:text-green-500"
            onClick={handleShowLess}
          >
            Ver Menos
          </button>
        </div>
      )}
    </div>
  );
}

*/
