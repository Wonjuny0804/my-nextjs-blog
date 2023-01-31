import React, { useEffect } from "react";
import NaverMapService from "../../services/navermap";

const NaverMap = () => {
  useEffect(() => {
    const naverMapServiceInstance = new NaverMapService({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLOUD_CLIENT_ID || "",
    });

    naverMapServiceInstance.load();
  }, []);

  return <div id="map"></div>;
};

export default NaverMap;
