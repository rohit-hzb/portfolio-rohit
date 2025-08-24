import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  
  {
    id: "Doctor-appointment-application ",
    title: "Doctor-appointment-application",
    description:
      "The Doctor Appointment Application is a user-friendly web and mobile-based platform designed to simplify the process of booking medical consultations. The system enables patients to schedule, reschedule, or cancel appointments with doctors conveniently without long waiting times or physical visits",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rohit-hzb/Doctor-Appointment-Application",
    url: "https://github.com/rohit-hzb/Doctor-Appointment-Application",
    tags: ["React.js", "tailwindcss", "javascript"],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://portfolioinfo-sandy.vercel.app/",
    url: "https://portfolioinfo-sandy.vercel.app/",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  // {
  //   id: "MERN Auth Panel",
  //   title: "Secure API-Driven Panel",
  //   description:
  //     "A MERN stack application with user authentication, API integration, and dynamic table creation.",
  //   icon: "/skills/nextjs.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "#",
  //   url: "#",
  //   tags: ["react.js", "mongodb", "node.js", "express.js"],
  // },
  {
    id: "Todo-List",
    title: "Todo-List App",
    description:
      "A ToDo-List is a simple app for managing tasks, allowing users to add, edit, delete, and mark tasks as completed. It helps organize and track tasks efficiently.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rohit-hzb/To-Do-App",
    url: "https://to-do-app-five-woad.vercel.app/",
    tags: [ "javascript", "html", "css"],
  },
 
];
export default projects;
