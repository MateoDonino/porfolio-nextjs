"use client";
import React, { useRef } from "react";
import Title from "./Title";
import { HoverEffect } from "../../../components/ui/card-hover-effect";
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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

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
      text: "ReactJS",
      Icon: SiReact,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Java",
      Icon: FaJava,
    },
    {
      text: "MySQL ",
      Icon: SiMysql,
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
      text: "Bootstrap",
      Icon: SiBootstrap,
    },
    {
      text: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text={"Skills 🎓"}
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={skills} />
    </div>
  );
}
