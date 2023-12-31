import React from "react"
import Image from "next/image"
import Html from "@/public/assets/skills/html.png"
import Css from "@/public/assets/skills/css-3.png"
import Js from "@/public/assets/skills/js.png"
import Reactjs from "@/public/assets/skills/reactjs.png"
import Tailwind from "@/public/assets/skills/tailwind.png"
import Firebase from "@/public/assets/skills/firebase.png"
import Nodejs from "@/public/assets/skills/nodejs.png"
import Github from "@/public/assets/skills/github.png"

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                <h2>What I can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Html} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML5</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Css} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS-3</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Js} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Reactjs} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>ReactJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Tailwind} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Firebase} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Nodejs} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NodeJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Github} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GitHub</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills