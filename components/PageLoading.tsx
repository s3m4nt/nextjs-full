"use client";

import Lottie from "lottie-react";
import animationData from "@/public/images/lottie-page-loading.json";

export default function PageLoading() {
  return (
    <div className="flex-col-c height-full bg-white">
      
      <h1 className="mb-0">LOADING ...</h1>
      
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}
