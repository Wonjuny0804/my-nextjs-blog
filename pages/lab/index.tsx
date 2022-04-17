import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import LabMainPage from "../../components/lab/LabMainPage";
const LandingHeader = dynamic(
  () => import("../../components/Landing/LandingHeader")
);

const LabPage: NextPage = () => {
  return (
    <>
      <LandingHeader />
      <LabMainPage />
    </>
  );
};

export default LabPage;
