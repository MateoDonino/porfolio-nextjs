"use client";
import React, { useRef } from "react";
import Title from "./Title";
import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiExpo,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  const skills = [
    {
      text: "HTML5",
      Icon: SiHtml5,
    },
    {
      text: "CSS3",
      Icon: SiCss3,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React Native",
      Icon: TbBrandReactNative,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },

    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Vite",
      Icon: SiVite,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "Expo",
      Icon: SiExpo,
    },
    {
      text: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <section id="skills" className="max-w-5xl mx-auto px-8">
      <Title
        text={"Skills 🎓"}
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={skills} />
    </section>
  );
}
