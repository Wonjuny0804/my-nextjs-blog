import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <main className={` bg-[#1d2628] p-2`}>
            <div className={` text-white grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto h-screen`}>
                {/* Hero Section */}
                <section className={`flex flex-col gap-2 my-20 px-4 justify-center`}>
                    <Image src="/assets/landing_pic1.webp" alt="landing_pic1" width={300} height={300} />
                    <p className={`font-medium text-2xl`}>Wonjun Jang</p>
                </section>
                {/* About Section */}
                
                {/* Contact Section */}
                <section className={`py-20 px-4 overflow-y-auto`}>
                    <h2 className={`font-medium text-2xl`}>Introduction</h2>
                    <p className={``}>
                        A software engineer and founder based in St. Louis, MO. I build AI‑powered SaaS products that automate messy workflows for small businesses and creators.
                        My toolbox includes <span className={`font-medium italic`}>React, TypeScript, FastAPI, Supabase and Rust</span>— anything that helps me move fast without sacrificing maintainability. Over the past two years I’ve shipped multi‑agent automation tools like Tamma (video‑editing workflows) and Landlord Assistant Bot (tenant management).
                        I believe great software blends technical rigor with real‑world impact. When I’m not coding, you’ll find me blogging about Terraform & AWS, hunting down new CrossFit PRs, or plotting my next side‑project.
                        Let’s build something together — email <a href="mailto:wonwonjun@gmail.com">wonwonjun@gmail.com</a> or connect on <Link className={'underline'} href="https://www.linkedin.com/in/wonjun-jang-0a8597a7/">LinkedIn</Link>.
                    </p>
                    <h2 className={`font-medium text-2xl mt-20 mb-2`}>Experiences</h2>
                    <ul className={`flex flex-col gap-4`}>
                        <li>
                            <div>
                                <div className={`flex justify-between`}>
                                    <div className={`flex gap-2`}>
                                        <h3 className={`font-medium`}>Paula's Choice Skincare</h3>
                                        <h3 className={`font-light italic`}>Frontend Developer</h3>
                                    </div>
                                    <div className={`font-light italic`}>08.2022 ~ 10.2024</div>
                                </div>
                                <p className={``}>Led regional UI/UX engineering and cross-regional IT coordination, delivering global product rollouts, significant revenue impact, and critical
                                bug resolution under high visibility.</p>
                                <ul className={`pl-5 text-sm`}>
                                    <li>• Led UI/UX Team & Optimized Checkout Flow:
                                        <p>Directed a cross-functional UI/UX team, collaborating with design, marketing, and product to lead A/B testing initiatives. Improved checkout completion by 30% with ~99% statistical confidence by removing cart step from flow.</p>
                                    </li>
                                    <li>• Launched Global Ingredient Analyzer Tool:
                                        <p>Built a React/TypeScript frontend and Node.js backend and .NET micro services integrated with Azure OCR for image-based skincare ingredient analysis. Empowered users globally while collaborating with stakeholders across regions to align on rollout scope and feature priorities.</p>
                                    </li>
                                    <li>• Resolved $20K/year Payment Bug Within First Month:
                                        <p>Diagnosed and fixed a high-priority payment failure edge case related to promotional orders, saving ~$5K/month in lost revenue.</p>
                                    </li>
                                    <li>• Regional Tech Lead & Global IT Liaison:
                                        <p>Acted as communication bridge between APAC KRJP and U.S. teams. Delivered business requirements, coordinated global feature rollouts, and led region-specific development priorities across infrastructure and product.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className={`flex justify-between`}>
                                    <div className={`flex gap-2`}>
                                        <h3 className={`font-medium`}>Paula's Choice Skincare</h3>
                                        <h3 className={`font-light italic`}>Frontend Developer</h3>
                                    </div>
                                    <div className={`font-light italic`}>08.2022 ~ 10.2024</div>
                                </div>
                                <p className={``}>Led regional UI/UX engineering and cross-regional IT coordination, delivering global product rollouts, significant revenue impact, and critical
                                bug resolution under high visibility.</p>
                                <ul className={`pl-5 text-sm`}>
                                    <li>• Led UI/UX Team & Optimized Checkout Flow:
                                        <p>Directed a cross-functional UI/UX team, collaborating with design, marketing, and product to lead A/B testing initiatives. Improved checkout completion by 30% with ~99% statistical confidence by removing cart step from flow.</p>
                                    </li>
                                    <li>• Launched Global Ingredient Analyzer Tool:
                                        <p>Built a React/TypeScript frontend and Node.js backend and .NET micro services integrated with Azure OCR for image-based skincare ingredient analysis. Empowered users globally while collaborating with stakeholders across regions to align on rollout scope and feature priorities.</p>
                                    </li>
                                    <li>• Resolved $20K/year Payment Bug Within First Month:
                                        <p>Diagnosed and fixed a high-priority payment failure edge case related to promotional orders, saving ~$5K/month in lost revenue.</p>
                                    </li>
                                    <li>• Regional Tech Lead & Global IT Liaison:
                                        <p>Acted as communication bridge between APAC KRJP and U.S. teams. Delivered business requirements, coordinated global feature rollouts, and led region-specific development priorities across infrastructure and product.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className={`flex justify-between`}>
                                    <div className={`flex gap-2`}>
                                        <h3 className={`font-medium`}>Paula's Choice Skincare</h3>
                                        <h3 className={`font-light italic`}>Frontend Developer</h3>
                                    </div>
                                    <div className={`font-light italic`}>08.2022 ~ 10.2024</div>
                                </div>
                                <p className={``}>Led regional UI/UX engineering and cross-regional IT coordination, delivering global product rollouts, significant revenue impact, and critical
                                bug resolution under high visibility.</p>
                                <ul className={`pl-5 text-sm`}>
                                    <li>• Led UI/UX Team & Optimized Checkout Flow:
                                        <p>Directed a cross-functional UI/UX team, collaborating with design, marketing, and product to lead A/B testing initiatives. Improved checkout completion by 30% with ~99% statistical confidence by removing cart step from flow.</p>
                                    </li>
                                    <li>• Launched Global Ingredient Analyzer Tool:
                                        <p>Built a React/TypeScript frontend and Node.js backend and .NET micro services integrated with Azure OCR for image-based skincare ingredient analysis. Empowered users globally while collaborating with stakeholders across regions to align on rollout scope and feature priorities.</p>
                                    </li>
                                    <li>• Resolved $20K/year Payment Bug Within First Month:
                                        <p>Diagnosed and fixed a high-priority payment failure edge case related to promotional orders, saving ~$5K/month in lost revenue.</p>
                                    </li>
                                    <li>• Regional Tech Lead & Global IT Liaison:
                                        <p>Acted as communication bridge between APAC KRJP and U.S. teams. Delivered business requirements, coordinated global feature rollouts, and led region-specific development priorities across infrastructure and product.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default Home