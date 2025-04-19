import React from "react";

function Bg() {
  return (
    <video
      src="/bgVideo.mp4"
      alt="background"
      autoPlay
      loop
      muted
      preload="auto"
      className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none -z-10"
    ></video>
  );
}

export default Bg;
