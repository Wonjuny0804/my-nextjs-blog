import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import AnimatedLines from "components/common/AnimatedLines";
import Link from "next/link";
import IntroTopMobile from "components/Landing/IntroTopMobile";
import IntroTopDesktop from "components/Landing/IntroTopDesktop";

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
        <div className="px-5 text-white font-customFont lg:px-0">
          <section className="lg:mt-40 lg:px-20">
            <AnimatedLines
              sentence={[
                "I help designers and",
                "developers to create",
                "beautiful and seamless",
                "web applications",
              ]}
              className="flex flex-col gap-y-1 uppercase w-[255px] lg:w-full mt-[130px] lg:hidden"
            />

            <IntroTopMobile pic1Ref={pic1Ref} />
            <IntroTopDesktop />
          </section>

          <section id="info" className="lg:px-20 lg:flex lg:py-5 lg:gap-3">
            <h3 className="text-xl capitalize mt-10 lg:mt-0">
              wonjoon jang
              <br />
              Software Engineer
            </h3>

            <div className="mt-10 mb-10 flex gap-2 capitalize text-xl lg:mt-0 lg:mb-0 lg:self-end">
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
