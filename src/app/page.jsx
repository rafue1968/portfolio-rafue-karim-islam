"use client";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ShowProjects from "./components/ShowProjects";
import Contact from "./components/Contact";

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
      description: "Developed a wellbeing-focused web application that uses generative AI to create personalised bedtime stories based on users’ selected genres or original ideas. The system allows users to read their generated stories and listen to them through an integrated text-to-speech narration feature, promoting relaxation and creativity before sleep."
    },
    {
      id: 2,
      name: "Gaming Tournament Management System",
      description: "This project involved developing a web application using React that allows university students and other users to search for, register, and manage their participation in gaming tournaments."
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
