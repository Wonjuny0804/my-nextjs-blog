import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const LabMainPage = dynamic(
  () => import("../../components/lab/LabMainPage")
) as any;

const LandingHeader = dynamic(
  () => import("../../components/Landing/LandingHeader")
) as any;

const LabPage: NextPage = () => {
  return (
    <>
      <LandingHeader />
      <LabMainPage />
    </>
  );
};

export default LabPage;
