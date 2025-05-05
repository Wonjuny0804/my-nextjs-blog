'use client';

import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import OrbitChat from "../../../components/lab/orbit-chat/OrbitChat";
import NavBar from "../../../components/common/NavBar";

const OrbitChatPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Orbit Chat | ISS Tracker</title>
        <meta
          name="description"
          content="Track the International Space Station in real-time and chat with others"
        />
      </Head>
      <NavBar />
      <main className="mt-8 flex flex-col items-center justify-center h-screen">
        <OrbitChat />
      </main>
    </>
  );
};

export default OrbitChatPage;
