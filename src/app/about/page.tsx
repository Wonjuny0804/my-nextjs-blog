import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";

const AboutPage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#about");
  }, [router]);

  return null;
};

export default AboutPage;
