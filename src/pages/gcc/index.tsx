import Layout from "components/common/Layout";
import NaverMap from "components/common/NaverMap";
import React from "react";

const GCCHomePage = () => {
  return (
    <Layout>
      <div className={`h-[calc(100vh-48px)] flex justify-center items-center`}>
        <h1 className={`text-[42px] text-white font-notoSans`}>
          강남 코딩 클럽에 오신 것을 환영합니다.
        </h1>

        <NaverMap />
      </div>
    </Layout>
  );
};

export default GCCHomePage;
