"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <div className="image-text-grid">
        <Image
          src="/portfolio-rafue-image.JPG"
          width={220}
          height={220}
          className="image-container hero-image"
          alt="Rafue Karim Islam"
          priority
        />
        <div className="text-container">
          <h1 className="hero-title">
            Hi, I'm <span>Rafue Karim Islam</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer
          </p>
          <button
            className="hero-button"
          >
            <a 
            href="https://www.linkedin.com/in/rafue-karim-islam-887a2b216"
            target="_blank"
            rel="noopener noreferrer"
            >
                View My LinkedIn
            </a>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
