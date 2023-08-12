import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

const Layout = dynamic(() => import("../components/common/Layout/Layout"));

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [mainPhrase, setMainPhrase] = useState<string[]>([]);
  const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    const mainPhrase = [
      "Die Vögel kämpfen sich aus dem Ei. Das Ei ist die Welt. Wer geboren werden will, muss die Welt zerstören.",
      "The bird fights its way out of the egg. The egg is the world. Who would be born must destroy a world.",
      "새는 알을 통해 밖으로 나가기 위해 싸운다. 그 알은 세계다. 누구든 태어나기 위해선, 한 세계를 파괴해야 한다.",
    ];

    setMainPhrase(mainPhrase);

    timerRef.current = setInterval(() => {
      setPhraseIndex((prev) => {
        if (prev === mainPhrase.length - 1) return 0;
        return prev + 1;
      });
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

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
          title: "wonjoon.dev",
          description:
            "A main page for the wojoon.dev site. Where you can find the newest information for technology and programming.",
        }}
      >
        <div className={`min-h-[calc(100vh-160px)] p-10 md:p-10 grid `}>
          <p
            className={`text-white bg-[#1e1e1e] text-3xl leading-[1.3] text-left word-wrap break-keep relative`}
          >
            {mainPhrase.map((phrase, index) => (
              <span
                key={`mainPhrase-${index}`}
                className={`absolute opacity-0 ${
                  phraseIndex === index ? "animate-fadeInOut" : ""
                }`}
                aria-current={phraseIndex === index}
                data-index={phraseIndex === index ? "current" : "not-current"}
              >
                {phrase}
              </span>
            ))}
          </p>
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
