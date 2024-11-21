"use client";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/mateo-donino-583035192/",
      label: "LinkedIn",
      Icon: SiLinkedin,
      target: "_blank",
    },

    {
      link: "https://github.com/MateoDonino?tab=overview&from=2024-05-01&to=2024-05-05",
      label: "Github",
      Icon: SiGithub,
      target: "_blank",
    },
  ];

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        <nav
          className={cn(
            " py-10 flex justify-between items-center flex-col sm:flex-row",
            className
          )}
        >
          <div className="hover:scale-125 transition-all text-2xl font-bold underline underline-offset-8 decoration-pink-600 -rotate-2">
            <Link href="#">Portfolio 👩🏻‍💻</Link>
          </div>
          <div className="py-3 flex justify-center items-center gap-12">
            <Link
              href="#experience"
              className="hover:scale-110 transition-all hover:text-violet-400 text-lg font-bold  decoration-gray-500 "
            >
              Expereriencia
            </Link>
            <Link
              href="#skills"
              className="hover:scale-110 transition-all hover:text-pink-400 text-lg font-bold  decoration-gray-500"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:scale-110 transition-all hover:text-violet-400 text-lg font-bold  decoration-gray-500"
            >
              Proyectos
            </Link>
          </div>
          <div className="flex items-center gap-5 py-2 sm:flex-row">
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <Link
                  href={social.link}
                  key={index}
                  aria-label={social.label}
                  target={social.target}
                >
                  <Icon className="w-5 h-5 hover:scale-150 transition-all" />
                </Link>
              );
            })}
          </div>
        </nav>
      </motion.div>
    </section>
  );
}
