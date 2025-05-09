'use client';

import React from "react";
import { NextPage } from "next";
import OrbitChat from "../../../components/lab/orbit-chat/OrbitChat";

const OrbitChatPage: NextPage = () => {
  return (
      <main className="flex flex-col items-center justify-center h-screen">
        <OrbitChat />
      </main>
  );
};

export default OrbitChatPage;
