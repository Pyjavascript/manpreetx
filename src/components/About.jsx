import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white font-bold text-4xl">ABOUT ME</h1>
        <span className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text tracking-widest">
          EXPLORE NOW
        </span>
      </div>
      <p className="text-[#E1E1E1] text-center px-2 text-[0.7rem] md:text-sm">
        As a passionate web developer, I love blending logic with creativity to
        build meaningful digital experiences. I'm currently focused on mastering
        the world of modern web development, especially with{" "}
        <span className="font-bold">React and Firebase</span>, where I bring
        ideas to life through clean, responsive, and user-friendly interfaces.
        <br />
        <br /> Whether it's designing elegant UIs or solving backend challenges,
        I enjoy turning concepts into working code. I’m always learning,
        experimenting, and pushing myself to create smoother, faster, and more
        intuitive web applications.
      </p>
    </div>
  );
}

export default About;
