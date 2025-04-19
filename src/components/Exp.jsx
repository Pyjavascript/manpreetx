import React from "react";

function Exp() {
  const companies = [
    {
      name: "NullClass",
      logo: "./companies/nullclass.png",
      designation: "Web Developer",
      type: "Remote | Internship",
      start: "Feb 2025",
      end: "Apr 2025",
      description:
        "Contributed to the development of a full-stack web application. Worked on building responsive interfaces, creating backend APIs, and integrating real-time features. Gained practical experience in modern web development and collaborative workflows.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white font-bold text-4xl uppercase">Experience</h1>
        <span className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text tracking-widest">
          EXPLORE NOW
        </span>
      </div>
      {/* Parent Div */}
      <div className="">
        {companies.map((elem, ind) => (
          <div key={ind}>
            {/* Card */}
            <div className="text-white flex flex-col gap-3 md:gap-7" key={ind}>
              {/* top level */}
              <div className="flex justify-between">
                {/* parent top */}
                <div className="flex flex-col">
                  {/* left top */}
                  <div className="flex items-start gap-2">
                    <div className="md:w-7 rounded-sm overflow-hidden">
                      <img src={elem.logo} alt="" className="w-full" />
                    </div>
                    <div>
                      <p className="font-bold text-[0.7rem] md:text-2xl">
                        {elem.designation} at {elem.name}
                      </p>
                      <p className="text-[#E1E1E1] text-[0.5rem] md:text-sm">
                        {elem.type}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-[0.7rem]  md:text-md">
                  {elem.start} - {elem.end}
                </p>
              </div>
              <p className="text-[#E1E1E1] text-[0.5rem] md:text-sm">
                {elem.description}
              </p>
              <div className="flex gap-2 md:gap-4">
              {elem.tech.map((logo, ind) => (
                <div key={ind}>
                  <img
                  
                    src={logo}
                    alt=""
                    className={`w-4 h-4 md:w-6 md:h-6 transition duration-300 hover:scale-110 
                      ${logo.includes("express") ? "invert" : ""}`}
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exp;
