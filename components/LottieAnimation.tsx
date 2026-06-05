"use client";

import Lottie from "lottie-react";
import animationData from "@/public/images/animation.json";

export default function LottieAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: 200, height: 200 }}
    />
  );
}
