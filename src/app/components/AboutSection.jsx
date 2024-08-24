"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
        <li className="text-base">Node.js</li>
        <li className="text-base">Express</li>
        <li className="text-base">PostgreSQL</li>
        <li className="text-base">Sequelize</li>
        <li className="text-base">JavaScript</li>
        <li className="text-base">React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-base mb-2">Fullstack Academy of Code</li>
        <li className="text-base">University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-base mb-2">AWS Cloud Practitioner</li>
        <li className="text-base">Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] mb-6">
            I'm a{" "}
            <span className="text-blue-600 font-semibold">
              backend developer
            </span>{" "}
            specializing in building robust{" "}
            <span className="text-green-600 font-semibold">
              server-side applications
            </span>{" "}
            and <span className="text-red-600 font-semibold">APIs</span>.
            Proficient in{" "}
            <span className="text-yellow-600 font-semibold">
              multiple programming languages
            </span>
            , I excel at{" "}
            <span className="text-cyan-600 font-semibold">
              containerization
            </span>
            ,{" "}
            <span className="text-purple-600 font-semibold">
              system integration
            </span>
            , and{" "}
            <span className="text-pink-600 font-semibold">
              cloud deployment
            </span>
            . While not focused on frontend, I'm passionate about creating
            efficient, scalable{" "}
            <span className="text-orange-600 font-semibold">
              backend solutions
            </span>{" "}
            that power modern applications, handling everything from{" "}
            <span className="text-teal-600 font-semibold">
              database management
            </span>{" "}
            to{" "}
            <span className="text-indigo-600 font-semibold">
              third-party service integration
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
