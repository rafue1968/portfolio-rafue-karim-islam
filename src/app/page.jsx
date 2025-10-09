"use client";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ShowProjects from "./components/ShowProjects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const projectList = [
    {
        id: 0,
        name: "AI-Powered Interview Coach",
        description: "Designed and developed a prototype system that combines Large Language Models (LLMs) with sentiment analysis to support jobseekers in interview preparation. The system delivers adaptive questioning, STAR-based feedback, and emotional cue detection (confidence and anxiety), creating a more realistic and supportive interview practice environment."
    },
    {
      id: 1,
      name: "Sleeping AI",
      description: ""
    }
  ]
  
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <ShowProjects projectlist={projectList} />
      <Contact />
      <Footer />
    </div>
  );
}
