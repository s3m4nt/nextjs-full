"use client";

import Lottie from "lottie-react";
import animationData from "@/public/images/animation.json";

export default function LottieAnimation() {
  return (
    <div className="flex-col-c w-48 aspect-square overflow-hidden">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
