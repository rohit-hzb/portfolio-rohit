import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  
  {
    id: "Course shalling app ",
    title: "Course shalling app",
    description:
      "An Course shalling app Website built with Next.js, featuring fast performance, dynamic routing, and a seamless shopping experience.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    url: "#",
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
  {
    id: "MERN Auth Panel",
    title: "Secure API-Driven Panel",
    description:
      "A MERN stack application with user authentication, API integration, and dynamic table creation.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    url: "#",
    tags: ["react.js", "mongodb", "node.js", "express.js"],
  },
  {
    id: "Todo-List",
    title: "Todo-List App",
    description:
      "A ToDo-List is a simple app for managing tasks, allowing users to add, edit, delete, and mark tasks as completed. It helps organize and track tasks efficiently.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    url: "#",
    tags: ["react.js", "javascript", "html", "css"],
  },
 
];
export default projects;
