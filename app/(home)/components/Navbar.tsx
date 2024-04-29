"use client";
import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/mateo-donino-583035192/",
      label: "LinkedIn",
      Icon: SiLinkedin,
      target: "_blank",
    },

    {
      link: "https://github.com/MateoDonino",
      label: "Github",
      Icon: SiGithub,
      target: "_blank",
    },

    {
      link: "",
      label: "Mail",
      Icon: IoMdMail,
      target: "",
    },
  ];

  const handleMailClick = () => {
    const email = "mateodonino@gmail.com";
    const message = `Para más información, comunicate a mi correo electrónico: ${email}`;
    alert(message);
  };

  return (
    <nav className={cn(" py-10 flex justify-between items-center", className)}>
      <a
        href="#"
        className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"
      >
        Portfolio 👩🏻‍💻
      </a>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target={social.target}
            >
              <Icon
                className="w-5 h-5 hover:scale-125 transition-all"
                onClick={social.label === "Mail" ? handleMailClick : undefined}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
