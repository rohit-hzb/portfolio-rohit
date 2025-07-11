import React from "react";
import ResponsiveBox from "./core/ResponsiveBox";
import ConstrainedBox from "./core/constrained-box";
import SectionTitle from "./common/SectionTitle";
import Image from "next/image";
import { Badge } from "./Badge";

const About = ({ id }: { id: string }) => {
    return (
        <ResponsiveBox
            classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] py-10 items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] rounded-md"
            id={id}
        >
            <ConstrainedBox classNames="p-4 py-16 z-20">
                <SectionTitle>About Me</SectionTitle>
                <div className="flex justify-evenly items-center">
                    <Image
                        src="/about.png"
                        alt="about"
                        height={300}
                        width={300}
                        className="h-full w-full hidden md:block"
                    />

                    <div className="flex flex-col p-4">
                        <div className="justify-center text-gray-400 py-6 items-center">
                            <p className="text-center sm:text-start">
                                Hi, This is{" "}
                                <span className="font-semibold">
                                    Rohit  kumar
                                </span>
                                , a Full Stack Web Developer passionate about
                                creating user-friendly and scalable web
                                applications. With expertise in both front-end
                                and back-end technologies, I specialize in
                                delivering end-to-end solutions using modern
                                frameworks like the MERN stack (MongoDB,
                                Express.js, React, and Node.js).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">
                                Education
                            </h2>
                            <p className="text-gray-300">
                                <strong>
                                    Bachelor of Computer Application (BCA)
                                </strong>
                                <br />
                                Aisect  University, Hazaribag, Jharkhand
                                <br />
                                <span className="italic text-gray-500">
                                    September 2022 - 2025.
                                </span>
                            </p>
                        </div>
                        <div className="mt-16 sm:mt-6 flex sm:items-center sm:justify-center w-full">
                            <Badge
                                href="https://docs.google.com/document/d/1tqhSBn30cNfPd3S4LTWKAs788tmTMo6bHzpukZM4Inc/edit?usp=sharing"
                                text="Download Resume"
                                icon={<DownloadIcon />}
                            />
                        </div>
                    </div>
                </div>
            </ConstrainedBox>
        </ResponsiveBox>
    );
};

export default About;

const DownloadIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-download"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 11l5 5l5 -5"></path>
            <path d="M12 4l0 12"></path>
        </svg>
    );
};
