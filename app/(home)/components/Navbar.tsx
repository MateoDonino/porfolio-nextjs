import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";

export default function Navbar() {
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
  ];

  return (
    <nav className=" py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Porfolio 👩🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
