import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    icons: [
      "/skills/html.svg",
      "/skills/javascript.svg",
      "/skills/react.svg",
    ],
    shortDescription: "I create modern, responsive, and engaging web interfaces.",
    description:
      "As a frontend developer, I craft highly interactive and visually appealing web interfaces that enhance user experiences. With expertise in React, Next.js, and cutting-edge tools, I ensure seamless performance and responsive designs. From landing pages to dynamic applications, I bring your vision to life with precision and creativity."
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/nextjs.png"
    ],
    shortDescription: "I create reliable and scalable backend infrastructures.",
    description:
      "I specialize in enhancing digital applications by building robust and scalable backend infrastructures. My expertise includes designing efficient database architectures, developing high-performance APIs, and configuring servers to optimize performance, security, and scalability. I ensure your applications can seamlessly handle high traffic and complex data management challenges, delivering a reliable and future-ready solution.",
  },
   {
    id: 3,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",

    ],
    shortDescription: "I specialize in optimizing and managing database systems.",
description: 
  "I am an expert in managing and optimizing database systems to deliver exceptional performance, reliability, and scalability. Skilled in both SQL and NoSQL databases, I design robust schemas, write efficient queries, and implement best practices for data integrity and security. My approach ensures your data is managed effectively, enabling seamless operations and data-driven decision-making."

  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
    ],
    shortDescription:
      "Defining goals, target audiences, and strategies for success.",
    description:
      "I specialize in crafting product strategies by defining clear goals, identifying target audiences, and developing actionable roadmaps for success. With expertise in product ideation and market analysis, I ensure your product aligns with user needs and business objectives, driving growth and unlocking its full potential. Empower your product with strategic planning for lasting impact.",
  }, 
];


export default services;
