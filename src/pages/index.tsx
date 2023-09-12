import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import AnimatedLines from "components/common/AnimatedLines";
import AnimatedWords from "components/common/AnimatedWords";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import Link from "next/link";

const Layout = dynamic(() => import("../components/common/Layout/Layout"));

const Home = () => {
  const pic1Ref = useRef<HTMLImageElement>(null);
  const project1Ref = useRef<HTMLImageElement>(null);

  const [profileImageRef, setProfileImageRef] =
    useState<HTMLImageElement | null>(null);
  const [project1ImageRef, setProject1ImageRef] =
    useState<HTMLImageElement | null>(null);

  useEffect(() => {
    setProfileImageRef(pic1Ref.current);
    setProject1ImageRef(project1Ref.current);

    window.addEventListener("scroll", () => {
      //parallax effect
      if (profileImageRef) {
        profileImageRef.style.transform = `translateY(${
          window.scrollY * -0.1
        }px)`;
      }

      if (project1ImageRef) {
        project1ImageRef.style.transform = `translateY(${
          window.scrollY * -0.05
        }px)`;
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        //parallax effect
        if (profileImageRef) {
          profileImageRef.style.transform = `translateY(${
            window.scrollY * -0.1
          }px)`;
        }

        if (project1ImageRef) {
          project1ImageRef.style.transform = `translateY(${
            window.scrollY * -0.05
          }px)`;
        }
      });
    };
  }, [profileImageRef]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.GA_ID || process.env.NEXT_PUBLIC_GA_ID
        }`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){window.dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', '${
           process.env.GA_ID || process.env.NEXT_PUBLIC_GA_ID
         }');
        `}
      </Script>
      <Layout
        metaData={{
          title: "Wonjun Jang",
          description:
            "A main page for the wojoon.dev site. Where you can find the newest information for technology and programming.",
        }}
        noFooter
      >
        <div className="px-5 text-white font-customFont">
          <AnimatedLines
            sentence={[
              "I help designers and",
              "developers to create",
              "beautiful and seamless",
              "web applications",
            ]}
            className="flex flex-col gap-y-1 text-lg uppercase w-[255px] lg:w-full mt-[130px]"
          />
          <h2 className="uppercase text-[56px] leading-[3rem] mt-20">
            <AnimatedWords word={["s", "o", "f", "t", "w", "a", "r", "e"]} />
            <br />
            <AnimatedWords word={["e", "n", "g", "i", "n", "e", "e", "r"]} />
          </h2>
          <section className="overflow-hidden mt-10 relative h-[300px]">
            <div className="bg-primary-dark h-[340px] z-[2] absolute top-0 w-full animate-imageOpen animation-delay-300"></div>
            <Image
              src="/../public/assets/landing_pic1.webp"
              width={290}
              height={300}
              alt="picture of me"
              ref={pic1Ref}
              className=""
            />
          </section>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div
                className={`uppercase text-[56px] leading-[0.9] mt-10 opacity-0 translate-y-[-20px] ${
                  inView ? "animate-charsIn" : ""
                }`}
                ref={ref}
              >
                wonjoon <br />
                jang <span className={`text-[56px] w-[56px] h-[56px] `}>↓</span>
              </div>
            )}
          </InView>

          <section id="aboutme" className="mt-10">
            <h3 className="uppercase grid grid-cols-[30%_1fr] pb-[100px]">
              <span className="block text-xl">01/</span>
              <span className="block text-xl">
                <span>about</span>
                <span>me</span>
              </span>
            </h3>

            <div className={`relative`}>
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <h3
                    className="absolute left-[4px] top-[20px] text-[32px] capitalize leading-[1.1] w-full"
                    ref={ref}
                  >
                    <div className="w-full">
                      <span className="hidden" aria-hidden>
                        developer
                      </span>
                      <span className="relative block w-full">
                        <span className="opacity-0">D</span>
                        <span className="opacity-0">e</span>
                        <span className="opacity-0">v</span>
                        <span className="opacity-0">e</span>
                        <span className="opacity-0">l</span>
                        <span className="opacity-0">o</span>
                        <span className="opacity-0">p</span>
                        <span className="opacity-0">e</span>
                        <span className="opacity-0">r</span>
                        <span className="absolute top-0 left-0  overflow-y-hidden clip-path-animated-chars w-full">
                          <span
                            className={`inline-block translate-y-[30px] ${
                              inView && "animate-charsIn"
                            }`}
                          >
                            D
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-100 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            e
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-200 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            v
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-300 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            e
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-400 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            l
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-500 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            o
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-600 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            p
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-700 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            e
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-800 ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            r
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="hidden" aria-hidden>
                        entrepreneur
                      </span>
                      <span className="relative block w-full">
                        <span className="opacity-0">E</span>
                        <span className="opacity-0">n</span>
                        <span className="opacity-0">t</span>
                        <span className="opacity-0">r</span>
                        <span className="opacity-0">e</span>
                        <span className="opacity-0">p</span>
                        <span className="opacity-0">r</span>
                        <span className="opacity-0">e</span>
                        <span className="opacity-0">n</span>
                        <span className="opacity-0">e</span>
                        <span className="opacity-0">u</span>
                        <span className="opacity-0">r</span>
                        <span className="absolute top-0 left-0 overflow-y-hidden clip-path-animated-chars w-full">
                          <span
                            className={`inline-block translate-y-[30px] animation-delay-[1000ms] ${
                              inView && "animate-charsIn"
                            }`}
                          >
                            E
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1100ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            n
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1200ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            t
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1300ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            r
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1400ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            e
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1500ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            p
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1600ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            r
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1700ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            e
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1800ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            n
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[1900ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            e
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2000ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            u
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2100ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            r
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="hidden" aria-hidden>
                        quality
                      </span>
                      <span className="relative block w-full">
                        <span className="opacity-0">Q</span>
                        <span className="opacity-0">u</span>
                        <span className="opacity-0">a</span>
                        <span className="opacity-0">l</span>
                        <span className="opacity-0">i</span>
                        <span className="opacity-0">t</span>
                        <span className="opacity-0">y</span>
                        <span className="absolute top-0 left-0 overflow-y-hidden clip-path-animated-chars w-full">
                          <span
                            className={`inline-block translate-y-[30px] animation-delay-[2100ms] ${
                              inView && "animate-charsIn"
                            }`}
                          >
                            Q
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2200ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            u
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2300ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            a
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2400ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            l
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2500ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            i
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2600ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            t
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[2700ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            y
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="hidden" aria-hidden>
                        value
                      </span>
                      <span className="relative block w-full">
                        <span className="opacity-0">v</span>
                        <span className="opacity-0">a</span>
                        <span className="opacity-0">l</span>
                        <span className="opacity-0">u</span>
                        <span className="opacity-0">e</span>
                        <span className="absolute top-0 left-0 overflow-y-hidden clip-path-animated-chars w-full">
                          <span
                            className={`inline-block translate-y-[30px] animation-delay-[3000ms] ${
                              inView && "animate-charsIn"
                            }`}
                          >
                            V
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[3100ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            a
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[3200ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            l
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[3300ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            u
                          </span>
                          <span
                            className={`inline-block translate-y-[30px] lowercase animation-delay-[3400ms] ${
                              inView && "animate-charsIn "
                            }`}
                          >
                            e
                          </span>
                        </span>
                      </span>
                    </div>
                  </h3>
                )}
              </InView>

              <p className="mt-10 hidden">
                Application that's a joy to use and a pleasure to look at.
              </p>

              <video autoPlay muted loop className={`pointer-events-none`}>
                <source src={"/IMG_7331.mp4"} type="video/mp4" />
              </video>

              <InView triggerOnce>
                {({ inView, ref }) => (
                  <>
                    <div
                      ref={ref}
                      className={`bg-primary-dark w-full h-[600px] absolute top-0 right-0 z-[2] ${
                        inView && "animate-primaryOpenRight"
                      } `}
                    ></div>
                    <div
                      ref={ref}
                      className={`bg-primary-dark w-full h-[600px] absolute top-0 left-0 z-[2]  ${
                        inView && "animate-primaryOpenLeft"
                      }`}
                    ></div>
                  </>
                )}
              </InView>
            </div>
          </section>

          {/*
          Introduction about me..
          1. projects or recent works..
          2. what I do and pictures I took
           */}
          <section id="projects" className="mt-20 w-full">
            <h3 className="uppercase grid grid-cols-[30%_1fr] pb-[100px]">
              <span className="block text-xl">02/</span>
              <span className="block text-xl">
                <span>recent</span>
                <span>projects</span>
              </span>
            </h3>

            <h4 className="text-[56px] uppercase underline w-full">
              <span className="relative clip-path-animated-chars overflow-hidden w-full">
                <span className="hidden">enkor</span>
                <span aria-hidden="true" className="opacity-0">
                  e
                </span>
                <span aria-hidden="true" className="opacity-0">
                  n
                </span>
                <span aria-hidden="true" className="opacity-0">
                  k
                </span>
                <span aria-hidden="true" className="opacity-0">
                  o
                </span>
                <span aria-hidden="true" className="opacity-0">
                  r
                </span>
                <span className="absolute left-0 whitespace-nowrap">
                  <InView>
                    {({ inView, ref }) => (
                      <span
                        ref={ref}
                        className={`inline-flex translate-y-[80%] ${
                          inView
                            ? "animate-charsIn animation-delay-[300ms]"
                            : ""
                        }`}
                      >
                        e
                      </span>
                    )}
                  </InView>
                  <InView>
                    {({ inView, ref }) => (
                      <span
                        ref={ref}
                        className={`inline-flex translate-y-[80%] ${
                          inView
                            ? "animate-charsIn animation-delay-[350ms]"
                            : ""
                        }`}
                      >
                        n
                      </span>
                    )}
                  </InView>
                  <InView>
                    {({ inView, ref }) => (
                      <span
                        ref={ref}
                        className={`inline-flex translate-y-[80%] ${
                          inView
                            ? "animate-charsIn animation-delay-[400ms]"
                            : ""
                        }`}
                      >
                        k
                      </span>
                    )}
                  </InView>
                  <InView>
                    {({ inView, ref }) => (
                      <span
                        ref={ref}
                        className={`inline-flex translate-y-[80%] ${
                          inView
                            ? "animate-charsIn animation-delay-[450ms]"
                            : ""
                        }`}
                      >
                        o
                      </span>
                    )}
                  </InView>
                  <InView>
                    {({ inView, ref }) => (
                      <span
                        ref={ref}
                        className={`inline-flex translate-y-[80%] ${
                          inView
                            ? "animate-charsIn animation-delay-[500ms]"
                            : ""
                        }`}
                      >
                        r
                      </span>
                    )}
                  </InView>
                  <InView>
                    {({ inView, ref }) => (
                      <span
                        ref={ref}
                        className={`absolute bottom-[6px] left-0 w-0 h-[12px] bg-white ${
                          inView
                            ? "animate-[primaryUnderline_1s_cubic-bezier(0.62,0.05,0.01,0.99)_forwards] animation-delay-[1050ms]"
                            : ""
                        }`}
                      ></span>
                    )}
                  </InView>
                </span>
              </span>
            </h4>

            <InView>
              {({ inView, ref }) => (
                <div
                  className="mt-10 h-[500px] overflow-hidden relative"
                  ref={ref}
                >
                  <div
                    className={`bg-primary-dark w-full h-[350px] top-0 absolute ${
                      inView ? "animate-imageOpen animation-delay-[1150ms]" : ""
                    }`}
                  ></div>
                  <Link
                    className="relative grid justify-center items-center h-[500px]"
                    href="/about/enkor" //FIXME: For now we'll let it go to stay.enkor.kr
                  >
                    <Image
                      src="/../public/assets/enkor-mb.png"
                      alt="enkor"
                      priority
                      ref={project1Ref}
                      className="absolute"
                      width={335}
                      height={500}
                    />
                    <span
                      className={`w-[140px] h-[140px] rounded-[100%] 
                     bg-white text-primary-dark
                    flex justify-center items-center text-[22px] z-[2]
                    `}
                    >
                      See more
                    </span>
                  </Link>
                </div>
              )}
            </InView>
          </section>

          <section id="work-with-me" className="mt-20 w-full">
            <h3 className="uppercase grid grid-cols-[30%_1fr] pb-[100px]">
              <span className="block text-xl">03/</span>
              <span className="block text-xl">
                <span>Want to work</span>
                <span>together?</span>
              </span>
            </h3>

            <p className="text-[32px] uppercase leading-[1.1]">
              <span>
                Reach out to me <br />
              </span>
              <span>
                for anything creative project
                <br />
              </span>
              <span>
                you want to build
                <br />
              </span>
              <span>
                and let's shape the reality together.
                <br />
              </span>
            </p>
          </section>

          <section id="info">
            <h3 className="text-xl capitalize mt-10">
              wonjoon jang
              <br />
              Software Engineer
            </h3>

            <div className="mt-10 mb-10 flex gap-2 capitalize text-xl">
              <Link href="/instagram">instagram</Link>
              <Link href="/github">github</Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
