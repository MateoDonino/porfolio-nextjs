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
        "This project, developed as part of a development challenge, utilizes the Rick and Morty API to allow users to search for and view information about characters. The app includes a search field and three filters, with options to delete them and reset the search. Built with React, Vite, GraphQL, and TailwindCSS, the application offers a modern and responsive user interface. The project is deployed on Netlify for fast and efficient access.",
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
        "This project, developed with React Native and Expo, utilizes the Metacritic API to display the highest-rated games. The app features dynamic routes and simple navigation, providing a smooth and enjoyable user experience. The user interface is designed with TailwindCSS, ensuring a modern and adaptive design.",
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
        "This project, developed as a freelance assignment, involved creating a website promoting NFTs (non-fungible tokens) for a client from Chile. The development team comprised two Web Developers and two Graphic Designers UX/UI, working collaboratively to achieve a modern and engaging design. The website is built using HTML5, CSS, React, Vite, and Bootstrap, ensuring responsiveness and user-friendliness. The project is hosted on Vercel for optimal performance and accessibility",
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
        "This is a practical example or tutorial of Node.js (JavaScript on the server) where we will create a simple web application to understand how to install modules like Express.js and how to use it to build multi-page applications. We will also learn to add CSS styles and frameworks like Bootstrap 5 by serving static files. This tutorial will cover best practices for structuring your application and managing dependencies.",
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
