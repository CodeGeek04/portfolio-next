"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Linklee",
    description:
      "Your one-stop solution for all links, with a unique subdomain",
    image: "/images/projects/linklee.png",
    tag: ["All", "Web"],
    gitUrl: "https://linklee.in",
    previewUrl: "https://linklee.in",
  },
  {
    id: 2,
    title: "Universal Terminal Using AI",
    description: "Run commands for any OS anywhere using this terminal",
    image: "/images/projects/universal-terminal.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CodeGeek04/Universal-Terminal.git",
    previewUrl: "https://github.com/CodeGeek04/Universal-Terminal.git",
  },
  {
    id: 3,
    title: "Arena",
    description:
      "Compare performance and memory of your favourite programming languages",
    image: "/images/projects/arena.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CodeGeek04/arena",
    previewUrl: "https://langarena.vercel.app/",
  },
  {
    id: 4,
    title: "Cyberdost",
    description:
      "AI Chatbot application for spreading awareness in cybersecurity",
    image: "/images/projects/cyberdost.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://chat.cyberdost.in/",
    previewUrl: "https://chat.cyberdost.in/",
  },
  {
    id: 5,
    title: "Homeland Group FMS",
    description: "Flow Management System for Homeland Group",
    image: "/images/projects/homeland.png",
    tag: ["All", "Web"],
    gitUrl: "https://asap.homelandgroup.org/",
    previewUrl: "https://asap.homelandgroup.org/",
  },
  {
    id: 6,
    title: "M68k Compiler",
    description: "Compiler made in C for M68 Compiler",
    image: "/images/projects/m68k.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CodeGeek04/M68k-C-Compiler",
    previewUrl: "https://github.com/CodeGeek04/M68k-C-Compiler",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
