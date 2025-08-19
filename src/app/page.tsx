"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  // const initialProjectCount = 2;
  // const visibleProjects = isProjectsExpanded ? projects : projects.slice(0, initialProjectCount);
  const visibleProjects = projects;

  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const initialExperienceCount = 2;
  const visibleExperience = isExperienceExpanded
    ? experience
    : experience.slice(0, initialExperienceCount);

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16">
      <AnimateIn variant="fadeUp">
        <section className="mb-12">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-8 flex items-baseline justify-between">
              <span>Hey, I&apos;m Nikhil</span>
              <ThemeToggle />
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.4}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
              Software Developer specializing in building scalable APIs and
              secure backend systems. Experienced with{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                Node.js
              </span>
              ,{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                Express
              </span>
              , and{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                MongoDB
              </span>
              , and passionate about delivering robust, high-performance
              solutions.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="flex items-center gap-5 justify-between">
              <SocialMedia />
              <a
                href="/Nikhil's Resume.pdf"
                download
                className="flex items-center gap-2 px-2 py-1 rounded-md text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm font-medium"
                style={{
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Resume
              </a>
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.2}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.3}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
              Projects
            </h2>
          </AnimateIn>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleProjects.map((project, index) => {
                // const delay = 0.3 + (index < initialProjectCount ? index : index - initialProjectCount) * 0.1;
                const delay = 0.3 + index * 0.1;
                return (
                  <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="text-md font-medium">{project.title}</h3>
                        <div className="flex flex-row gap-2">
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              GitHub <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              View <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {project.description.replace("'", "&apos;")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs text-zinc-400 dark:text-zinc-500"
                          >
                            {tech}
                            {techIndex < project.technologies.length - 1
                              ? " /"
                              : ""}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>
            {/* {projects.length > initialProjectCount && (
              <button
                onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto"
              >
                {isProjectsExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Projects <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )} */}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.4}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.5}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
              Experience
            </h2>
          </AnimateIn>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleExperience.map((job, index) => {
                const delay =
                  0.5 +
                  (index < initialExperienceCount
                    ? index
                    : index - initialExperienceCount) *
                    0.1;
                return (
                  <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                        <h3 className="text-md font-medium">
                          {job.role} {job.role === "Freelance" ? "" : "at"}{" "}
                          {job.company}
                        </h3>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs text-zinc-400 dark:text-zinc-500"
                          >
                            {tech}
                            {techIndex < job.technologies.length - 1
                              ? " /"
                              : ""}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>
            {experience.length > initialExperienceCount && (
              <button
                onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto"
              >
                {isExperienceExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Experience <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.6}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.7}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
              Tools & Stack
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-y-6 gap-x-4">
            {tools.map(({ logo, title }, index) => (
              <AnimateIn key={index} variant="scale" delay={0.7 + index * 0.03}>
                <div className="flex flex-col items-center group">
                  <div className="relative h-6 w-6 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <Image
                      src={logo}
                      alt={`${title} logo`}
                      fill
                      className="object-contain drop-shadow-md"
                      loading="eager"
                    />
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">
                    {title}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.7}>
        <section className="mb-4">
          <AnimateIn variant="reveal" delay={0.8}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
              Contact Me
            </h2>
          </AnimateIn>
          <div className="space-y-6">
            <AnimateIn variant="fadeUp" delay={0.9}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={1.0}>
              <ContactForm />
            </AnimateIn>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>Nikhil Pahuja</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [
  {
    title: "DataFlow – Database Migration Studio",
    description:
      "A web app that automates MySQL database migration to PostgreSQL and MongoDB. Features intelligent schema analysis and automated type mapping.",
    link: "https://datafloww.vercel.app",
    github: "https://github.com/nikhilpahujaa/portfolio-New",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "AriGato – Learn Japanese with AI",
    description:
      "An interactive Japanese learning platform (JLPT N5–N1) with AI-powered pronunciation practice, spaced repetition flashcards, and gamification features including XP system and achievement badges.",
    link: "https://arigatoo.vercel.app/",
    github: "https://github.com/nikhilpahujaa/AriGato",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn/ui",
      "Framer Motion",
      "Web Speech API",
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, Next.js, and Tailwind CSS. Showcases my work, skills, and experience with a clean UI.",
    link: "https://pahuja.vercel.app/",
    github: "https://github.com/nikhilpahujaa/portfolio-New",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Voting App",
    description:
      "A secure backend API for voting with JWT authentication and robust user management. Built for scalability using Node.js, Express, and MongoDB.",
    link: null,
    github: "https://github.com/nikhilpahujaa/voting-app",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Finance Tracker",
    description:
      "Backend for a finance app enabling real-time transaction management and analytics. Ensures fast, reliable, and secure data handling.",
    link: null,
    github: "https://github.com/nikhilpahujaa/personal-finance-tracker",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Hotel Website",
    description:
      "A responsive front-end for a hotel booking platform. Delivers an intuitive user experience and seamless navigation.",
    link: "https://nikhilpahujaa.github.io/Hotel-Website/",
    github: "https://github.com/nikhilpahujaa/Hotel-Website",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "Shephertz",
    period: "July 2024 - Present",
    description:
      "Engineered robust backend microservices and core modules for SaaS products WAnywhere and Talent Anywhere, leveraging Node.js, Express, and secure JWT authentication.",
    technologies: ["Node.js", "Express", "RESTful APIs", "JWT"],
  },
  {
    role: "Developer Intern",
    company: "HERE Technologies",
    period: "June 2023 - July 2023",
    description:
      "Built and maintained web scraping tools using Python and Scrapy to collect 30+ Points of Interest (POI) data for location-based services.",
    technologies: ["Python", "Scrapy", "Data Collection"],
  },
  {
    role: "Researcher Intern",
    company: "Technoshala Foundation",
    period: "June 2021 - July 2021",
    description:
      "Conducted research on educational technologies, contributing to the development of data-driven reports and improved teaching strategies.",
    technologies: ["Research", "Data Analysis", "Communication"],
  },
];

const tools = [
  { logo: "/logos/javascript.svg", title: "JavaScript" },
  { logo: "/logos/nodejs.svg", title: "Node.js" },
  { logo: "/logos/express.svg", title: "Express" },
  { logo: "/logos/mongodb.svg", title: "MongoDB" },
  { logo: "/logos/git.svg", title: "Git" },
  { logo: "/logos/github.svg", title: "GitHub" },
  { logo: "/logos/vscode.svg", title: "VS Code" },
  { logo: "/logos/postman.svg", title: "Postman" },
  { logo: "/logos/react.svg", title: "React" },
  { logo: "/logos/nextjs.svg", title: "Next.js" },
  { logo: "/logos/tailwindcss.svg", title: "Tailwind CSS" },
  { logo: "/logos/vercel.svg", title: "Vercel" },
  { logo: "/logos/html.svg", title: "HTML" },
  { logo: "/logos/css.svg", title: "CSS" },
];

const ContactForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Set isMounted to true after the component mounts
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderEmail, message }),
      });
      if (response.ok) {
        setStatus("success");
        setSenderEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div>
        <label
          htmlFor="senderEmail"
          className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-200"
        >
          Your Email
        </label>
        {isMounted && (
          <input
            type="email"
            id="senderEmail"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
            className="w-full bg-transparent border-0 border-b border-zinc-300 dark:border-zinc-700 focus:border-b-2 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
            placeholder="Enter your email address"
          />
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-200"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={1}
          className="w-full bg-transparent border-0 border-b border-zinc-300 dark:border-zinc-700 focus:border-b-2 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 resize-none"
          placeholder="Type your message here..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 px-4 py-2 rounded bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-xs mt-2">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-400 text-xs mt-2">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
};
