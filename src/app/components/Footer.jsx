import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white">
      <div className="container mx-auto p-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            Shivam Mittal
          </Link>
          <p className="text-sm text-gray-400 mt-2">
            Crafting robust backend solutions and innovative AI applications
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="https://github.com/CodeGeek04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-500 transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shivam-mittal-559752225/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-500 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://x.com/shivam_mittal21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-500 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/shivam_mittal_21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-500 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-400 border-t border-[#33353F]">
        © {new Date().getFullYear()} Shivam Mittal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
