import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import AnimatedLines from "components/common/AnimatedLines";
import AnimatedWords from "components/common/AnimatedWords";
import Image from "next/image";

const Layout = dynamic(() => import("../components/common/Layout/Layout"));

const Home = () => {
  const pic1Ref = useRef<HTMLImageElement>(null);
  const [reference, setReference] = React.useState<HTMLImageElement | null>(
    null
  );

  useEffect(() => {
    setReference(pic1Ref.current);

    window.addEventListener("scroll", () => {
      //parallax effect
      if (reference) {
        reference.style.transform = `translateY(${window.scrollY * -0.1}px)`;
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        //parallax effect
        if (reference) {
          reference.style.transform = `translateY(${window.scrollY * -0.1}px)`;
        }
      });
    };
  }, [reference]);

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
              "developers to create a",
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
            <div className="bg-primary-dark h-[340px] z-[2] absolute top-0 w-full animate-imageOpen"></div>
            <Image
              src="/../public/assets/landing_pic1.webp"
              width={290}
              height={300}
              alt="picture of me"
              ref={pic1Ref}
              className=""
            />
          </section>

          <div className="uppercase text-[56px] leading-[0.9] mt-10">
            wonjoon <br />
            jang <span>↓</span>
          </div>

          {/*
          Introduction about me..
          1. projects or recent works..
          2. what I do and pictures I took
           */}
          <section id="projects" className="mt-20 w-full">
            <h3 className="uppercase grid-cols-[30%_1fr] pb-[100px]">
              <span className="block">02/</span>
              <span className="block">
                <span>recent</span>
                <span>projects</span>
              </span>
            </h3>

            <h4 className="text-[56px] uppercase underline">
              <span className="relative clip-path-animated-chars overflow-hidden">
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
                <span className="absolute left-0">
                  <span
                    id="project1-e"
                    className="inline-flex translate-y-[80%] animate-charsIn"
                  >
                    e
                  </span>
                  <span className="">n</span>
                  <span className="">k</span>
                  <span className="">o</span>
                  <span className="">r</span>
                </span>
              </span>
            </h4>
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
