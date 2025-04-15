import React, { FC, useState, useEffect } from "react";

const ISS_FACTS = [
  "The International Space Station (ISS) travels at approximately 28,000 km/h (17,500 mph).",
  "The ISS completes an orbit around Earth every 90 minutes.",
  "Astronauts aboard the ISS witness 16 sunrises and sunsets every day.",
  "The ISS is about the size of a football field — 109 meters end to end.",
  "It weighs roughly 420,000 kilograms (925,000 pounds).",
  "The ISS has been continuously inhabited since November 2000.",
  "The station orbits Earth at an altitude of approximately 400 km (250 miles).",
  "It's a joint project between NASA, Roscosmos, ESA, JAXA, and CSA.",
  "More than 240 individuals from 20 countries have visited the ISS.",
  "The ISS orbits Earth over 15 times a day.",
  "Solar arrays on the ISS provide up to 120 kilowatts of power.",
  "Astronauts must exercise around 2 hours a day to prevent muscle and bone loss.",
  "Data from ISS experiments have contributed to breakthroughs in medicine, materials, and agriculture.",
  "The station has a pressurized volume of 916 cubic meters (32,333 cubic feet).",
  "Cargo is delivered to the ISS using robotic spacecraft like SpaceX Dragon and Northrop Grumman Cygnus.",
  "The ISS can be seen from Earth with the naked eye — it's the third brightest object in the night sky.",
  "Water aboard the ISS is recycled from humidity, sweat, and even urine.",
  "The station has a robotic arm called Canadarm2, used for maintenance and docking operations.",
  "Internet access is available on the ISS, but heavily filtered and bandwidth-limited.",
  "One lap around Earth aboard the ISS takes less time than watching a full episode of a Netflix show.",
];

const ISSFunFacts: FC = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentFactIndex((prevIndex) => (prevIndex + 1) % ISS_FACTS.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition time
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevFact = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentFactIndex((prevIndex) =>
        prevIndex === 0 ? ISS_FACTS.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const handleNextFact = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % ISS_FACTS.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="absolute bottom-5 left-5 bg-black/70 text-white p-4 rounded-lg max-w-[300px] z-10 backdrop-blur border border-white/20">
      <h3 className="text-[#4da8ff] text-xl mb-2.5 font-medium flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
        ISS Fun Facts
      </h3>
      <div
        className={`min-h-[80px] flex items-center transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-sm leading-relaxed m-0">
          {ISS_FACTS[currentFactIndex]}
        </p>
      </div>
      <div className="flex justify-between mt-3">
        <button
          onClick={handlePrevFact}
          className="text-white/80 hover:text-white focus:outline-none transition-colors"
          aria-label="Previous fact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleNextFact}
          className="text-white/80 hover:text-white focus:outline-none transition-colors"
          aria-label="Next fact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ISSFunFacts;
