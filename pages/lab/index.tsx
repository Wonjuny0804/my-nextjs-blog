import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const LabMainPage = dynamic(
  () => import("../../components/lab/LabMainPage")
) as any;

const NavBar = dynamic(() => import("../../components/common/NavBar")) as any;

const LabPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <LabMainPage />
    </>
  );
};

export default LabPage;
