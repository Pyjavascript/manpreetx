import React from "react";

function Skills() {
  const categorizedSkills = {
    Frontend: [
      { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" }
    ],
    Backend: [
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
      { name: "Flask", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg" },
      { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Firebase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" }
    ],
    Tools: [
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
      { name: "Render", icon: "./render.svg" }
    ]
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white font-bold text-4xl">TECH STACK</h1>
        <span className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text tracking-widest">
          EXPLORE NOW
        </span>
      </div>

      {Object.entries(categorizedSkills).map(([category, skills], sectionIndex) => (
        <div key={sectionIndex} className="w-full flex flex-col items-center gap-4">
          <h2 className="font-light text-xl text-[#E1E1E1]">{category}</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="bg-black p-1.5 px-3 md:p-2 md:px-5 border border-[#585858] text-white rounded-full text-[0.7rem] md:text-sm flex items-center gap-2"
              >
                <div className="w-3 md:w-5">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`${["Express.js", "GitHub", "Flask",].includes(skill.name) ? "invert" : ""}`}
                  />
                </div>
                <p>{skill.name}</p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
