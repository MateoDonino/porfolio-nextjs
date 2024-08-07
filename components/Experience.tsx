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
          text={"Experience 💼"}
          className="flex flex-col items-center justify-center rotate-6"
        />
      </div>
      <ul className=" mt-14 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle ">
            {" "}
            <div className="timeline-start mb-5 ">
              <div className="text-2xl font-bold">
                Internship in the Commercial Area of Movistar Telefónica
              </div>
              <div className="text-lg text-green-500">MOVISTAR TELEFÓNICA</div>
              <time className="text-sm">January - June 2019</time>
              <div className="text-[#ADB7BE] text-md text-justify">
                <p className=" mt-1 ">
                  · I was in charge of supervising and controlling stock at
                  various physical sales points in the city of Santa Fe.
                </p>
                <p className=" mt-2">
                  · Efficient teamwork, responsibility, and excellent
                  communication.
                </p>

                <p className=" mt-2">
                  · Worked closely with cross-functional teams to ensure
                  alignment on objectives and deliverables.
                </p>
                <p className=" mt-2">
                  · Participated in regular team meetings to discuss goals,
                  progress, and challenges, fostering a collaborative
                  environment.
                </p>
              </div>
            </div>
          </div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end mb-10 mt-5">
            <div className="text-2xl font-bold">Frontend Web Developer</div>
            <div className="text-lg text-green-500">LUTIN STUDIOS</div>
            <time className="text-sm">August - November 2022</time>
            <div className="text-[#ADB7BE] text-md text-justify border-l-green-500 ">
              <p className="mt-1">
                · I collaborated on a Freelance project for a client from Chile.
                It involved creating a promotional NFT (Non-Fungible Tokens)
                Website.
              </p>
              <p className="mt-2">
                · Development and design of the user interface using
                technologies such as HTML, CSS, ReactJS, and Bootstrap.
              </p>
              <p className="mt-2">
                · The teamwork consisted of two Graphic Designers and two Web
                Developers. Excellent communication and collaboration.
              </p>
              <p className="mt-2">
                · Effective Communication. Throughout the project, I maintained
                open channels of communication with my team members. We
                regularly discussed progress, challenges, and ideas, ensuring
                everyone was on the same page.
              </p>
              <p className="mt-2">
                · Excelent Adaptability and Flexibility, as the project evolved,
                we remained flexible. We adjusted our approach when necessary,
                accommodating changes in requirements or unexpected obstacles.
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
