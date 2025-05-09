'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Background, { BackgroundSphereHandle } from  "../components/Background";
import HandControlPanel, { GestureAction } from "../components/HandControlPanel";
import * as THREE from 'three';


const Home = () => {
    const [gestureMode, setGestureMode] = useState(false);
    const sphereRef = useRef<THREE.Mesh>(null);
    const controlRef = useRef<BackgroundSphereHandle>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleGesture = (gesture: GestureAction) => {
        if (!sphereRef.current) return;
        if (!controlRef.current) return;

        if (gesture.action === 'scale-to') {
            const newScale = gesture.value || 1;
            controlRef.current.applyScale(newScale);
        }
        if (gesture.action === 'rotate-by') {
            controlRef.current.applyRotation(gesture.value);
        }
        if (gesture.action === 'flick-rotate') {
            controlRef.current.applyFlick(gesture.value);
        }
        if (gesture.action === 'color-change') {
            controlRef.current.applyColorIntensity(gesture.value);
        }
    };

    const handleToggleGestureMode = () => {
        setGestureMode(prev => !prev);

        if (videoRef.current?.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
    };
    
    return (
        <main className={`min-h-screen bg-[#1d2628]`}>
            <Background sphereRef={sphereRef} controlRef={controlRef} materialRef={materialRef} cameraOn={gestureMode} />
            <div className={`pt-10 px-6 text-[#f7fffd] grid grid-cols-1 max-w-[1280px] mx-auto relative z-11 lg:grid-cols-2`}>
                <section className={`relative h-screen`}>
                    <div className={`pt-10 px-6 fixed top-20`}>
                        <h1 className={`font-bold text-[32px] text-[#f7fffd]`}>Wonjun Jang</h1>
                        <h2 className={`text-lg mt-2`}>Software Engineer</h2>
                        <p className={`font-light text-[#90a9a3] mt-3`}>Your average tech bro,<br/> software engineer based in St.Louis, MO</p>

                        <ul className={`flex gap-3 mt-6`}>
                            <li>
                                <Link href="https://github.com/Wonjuny0804" target="_blank">
                                    <Image src="/icons/github-mark-white.svg" alt="github" width={24} height={24} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/wonjun-jang-0a8597a7/" target="_blank">
                                    <Image src="/icons/linkedin-app-white-icon.svg" alt="github" width={24} height={24} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/_wonjoon_jang/" target="_blank">
                                    <Image src="/icons/instagram-white-icon.svg" alt="github" width={24} height={24} />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <button 
                    onClick={handleToggleGestureMode} 
                    className={`hidden md:block cursor-pointer rounded fixed bottom-20 left-65 bg-[#141515] text-[#ffffff] hover:text-[#e1fcf5] font-semibold px-6 py-2 mt-20 hover:translate-y-[-2px] transition-all duration-300`}>
                        {gestureMode ? 'Disable Gesture Mode' : 'Play with sphere'}
                    </button>
                    {gestureMode && (
                        <>
                        <div className={`fixed bottom-4 right-4 z-50 px-3 py-1 bg-green-600 text-white text-xs rounded shadow animate-pulse`}>
                            🎥 Gesture Control Active
                        </div>
                        <div className="fixed top-6 left-6 z-50 bg-black/70 text-white p-4 rounded-xl text-sm max-w-sm transition-opacity duration-500 animate-fade-in-out">
                            Try pinching your fingers, rotating your hand, or flicking to spin the sphere.
                        </div>
                        </>
                    )}
                    {gestureMode && <HandControlPanel onGesture={handleGesture} videoRef={videoRef}/>}
                </section>
                <section className={`mt-20 font-light text-[#90a9a3] mb-20`}>
                    <h3 className={'font-semibold uppercase text-[14px] text-[#e1fcf5] font-stretch-150%'}>intro</h3>
                    <p className={`mt-6`}>
                    I’m a software engineer who thrives at the intersection of product, performance, and polish. From crafting sleek frontends to architecting AI-powered backends, I build systems that are as thoughtful as they are scalable.
                    </p>
                    <p className={`mt-10`}>
                    Most recently, I worked at <span className={`text-[#e1fcf5] font-medium`}>Paula’s Choice</span> as a Frontend Developer for the Korea and Japan markets, leading UI initiatives and shipping accessible, high-performance features to a global user base. 
                    Before that, I helped build both frontend and backend systems at an <span className={`text-[#e1fcf5] font-medium`}>early-stage proptech startup</span>, and earlier, contributed as a QA intern at a large enterprise. While finishing my degree, I worked on perception AI projects—experimenting with object detection and anomaly detection models.
                    Currently, I’m building automation tools powered by AI agents—fast-moving products that blend smart UX with serious technical depth.
                    </p>
                    <p className={`mt-10`}>
                    Outside of work, you’ll find me doing <span className={`text-[#e1fcf5] font-medium`}>CrossFit</span>, logging long runs, <span className={`text-[#e1fcf5] font-medium`}>swimming</span> or geeking out on side projects. I’m always chasing growth—whether it’s building better software, stronger habits.
                    </p>


                    <section className={`mt-20`}>
                        <ol>
                            <li className={`py-6 group cursor-pointer`}>
                                <Link href={`https://paulaschoice.co.kr`} target="_blank" className={`grid gap-2`}>
                                    <span className={`block font-medium text-xs text-[#90a9a3] group-hover:text-[#c3fcf2] transition-colors duration-300 uppercase mt-1`}>aug 2022 - oct 2024</span>
                                    <div>
                                        <div className={`flex items-center justify-between gap-2`}>
                                            <div className={`flex gap-2`}>
                                                <h3 className={`font-semibold text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>Paula’s Choice</h3>
                                                <p className={`text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>Frontend Developer</p>
                                            </div>
                                        </div>
                                        <p className={`mt-5 text-sm text-[#90a9a3] group-hover:text-[#f7fffd] transition-colors duration-400`}>Led engineering efforts across UI/UX for the KR/JP region while coordinating closely with global teams. My work spanned product optimization, data-driven experimentation, and cross-functional collaboration—shaping features that drove real revenue impact. I built and shipped tools used by customers worldwide, tackled high-priority bugs under pressure, and acted as the technical bridge between regions to ensure smooth product rollouts.</p>

                                        <ul className={`mt-5 flex gap-2 flex-wrap `}>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>React</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Typescript</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>styled-components</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Storybook</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Figma</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Salesforce</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Node.js</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Azure</li>
                                        </ul>
                                    </div>
                                </Link>
                            </li>
                            <li className={`py-6 group cursor-pointer`}>
                                <Link href={`https://stay.enkor.kr/`} target="_blank" className={`grid gap-2`}>
                                    <span className={`block font-medium text-xs text-[#90a9a3] group-hover:text-[#c3fcf2] transition-colors duration-300 uppercase mt-1`}>jun 2021 - aug 2022</span>
                                    <div>
                                        <div className={`flex items-center justify-between gap-2`}>
                                            <div className={`flex gap-2`}>
                                                <h3 className={`font-semibold text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>Proptech Startup(EnkorWithUs)</h3>
                                                <p className={`text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>Full Stack Developer</p>
                                            </div>
                                        </div>
                                        <p className={`mt-5 text-sm text-[#90a9a3] group-hover:text-[#f7fffd] transition-colors duration-400`}>
                                        Joined as one of the first full-time engineer and helped take the product from zero to a fully operational housing platform. I built and scaled the entire stack—from map-based property search to host onboarding tools—while working closely with users and non-technical stakeholders. I led key product iterations based on real customer feedback, developed internal tooling to support growth, and contributed directly to an 8x revenue increase during my time there.
                                        </p>

                                        <ul className={`mt-5 flex gap-2 flex-wrap `}>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Next.js</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Typescript</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Tailwind CSS</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Storybook</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Figma</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Node.js</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>AWS</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Stripe</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>PostgreSQL</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>NestJS</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Contentful</li>
                                        </ul>
                                    </div>
                                </Link>
                            </li>
                            <li className={`py-6 group`}>
                                <div className={`grid gap-2`}>
                                    <span className={`block font-medium text-xs text-[#90a9a3] group-hover:text-[#c3fcf2] transition-colors duration-300 uppercase mt-1`}>jul 2020 - aug 2020</span>
                                    <div>
                                        <div className={`flex items-center justify-between gap-2`}>
                                            <div className={`flex gap-2`}>
                                                <h3 className={`font-semibold text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>Concentrix</h3>
                                                <p className={`text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>QA Assistant</p>
                                            </div>
                                        </div>
                                        <p className={`mt-5 text-sm text-[#90a9a3] group-hover:text-[#f7fffd] transition-colors duration-400`}>
                                        Testing and ensuring the quality of software products. I worked closely with developers and product managers to identify and resolve issues, and provided feedback to improve the overall quality of the product.
                                        </p>

                                        <ul className={`mt-5 flex gap-2 flex-wrap `}>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Cypress</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Jira</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Confluence</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Outlook</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Excel</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={`py-6 group`}>
                                <div className={`grid gap-2`}>
                                    <span className={`block font-medium text-xs text-[#90a9a3] group-hover:text-[#c3fcf2] transition-colors duration-300 uppercase mt-1`}>sep 2019 - jan 2020</span>
                                    <div>
                                        <div className={`flex items-center justify-between gap-2`}>
                                            <div className={`flex gap-2`}>
                                                <h3 className={`font-semibold text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>Hana Vision Tech</h3>
                                                <p className={`text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-300`}>Software Engineer Intern</p>
                                            </div>
                                        </div>
                                        <p className={`mt-5 text-sm text-[#90a9a3] group-hover:text-[#f7fffd] transition-colors duration-400`}>
                                        Worked as a research assistant, developed real-time anomaly detection systems for smart surveillance use cases. I built data pipelines to preprocess surveillance footage and benchmarked traditional ML models against deep learning approaches like YOLO and CNNs. The deep learning models consistently outperformed legacy techniques—delivering over 94% accuracy and proving viable for production deployment.
                                        </p>

                                        <ul className={`mt-5 flex gap-2 flex-wrap `}>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>YOLO</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>CNN</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Python</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Numpy</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Pandas</li>
                                            <li className={`text-xs font-medium text-[#90a9a3] mb-1 bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full group-hover:text-[#c3fcf2] transition-colors duration-400`}>Pytorch</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </section>

                    <section className={`mt-20`}>
                        <ul>
                            <li >
                                <Link className={`grid grid-cols-[200px_1fr] gap-4 group transition-colors duration-400`} href="/lab/orbit-chat">
                                    <Image className={`rounded`} src="/images/iss-tracker-img.png" alt="iss-tracker" width={200} height={200} />
                                    <div>
                                        <h3 className={`font-semibold uppercase text-[14px] text-[#e1fcf5] group-hover:text-[#c3fcf2] transition-colors duration-400`}>ISS tracker in 3d</h3>
                                        <p className={`mt-2 text-sm text-[#90a9a3] group-hover:text-[#f7fffd] transition-colors duration-400`}>Simple 3d ISS tracker using react three fiber. Using ISS TLE data to calculate ISS position. Added fun facts about ISS and globe visualization.</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </section>
                </section>
            </div>
        </main>
    );
};

export default Home;