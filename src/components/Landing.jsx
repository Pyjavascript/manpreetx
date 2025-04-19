function Landing() {
  return (
    <>
    <div className="flex flex-col items-center gap-6 overflow-hidden py-10">
          <div className="h-30 md:h-35 w-30 md:w-35">
            <img src="./person.svg" alt="" />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-white font-bold text-3xl md:text-4xl overflow-visible">
              Manpreet Singh!
            </h1>
            <p className="text-[#C9C9C9] font-semibold">
              I do Code &{" "}
              <span className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text">
                Chill
              </span>{" "}
              🍿
            </p>
          </div>
          <p className="text-[#E1E1E1] text-center text-[0.7rem] md:text-sm">
            Passionate Web Developer with a focus on React and modern UI,
            dedicated
            <br /> to building clean, responsive, and user-friendly web
            experiences.
          </p>
          <button className="bg-black p-3 px-7 border border-[#585858] text-white rounded-full text-sm cursor-pointer">
            Download CV
          </button>
        </div>
    </>
  );
}

export default Landing;