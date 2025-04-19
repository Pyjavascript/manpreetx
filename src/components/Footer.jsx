import React from "react";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-center w-full pb-5">
        <div className="flex gap-5 md:gap-10">
          <a href="https://github.com/Pyjavascript" className="cursor-pointer">
            <img src="./github.svg" className="w-5 md:w-8" alt="" />
          </a>
          <img src="./insta.svg" className="w-5 md:w-8 cursor-pointer" alt="" />
          <a href="https://www.linkedin.com/in/manpreet-singh-698130270/">
            <img
              src="./link.svg"
              className="w-5 md:w-8 cursor-pointer"
              alt=""
            />
          </a>
          <img
            src="./twitter.svg"
            className="w-5 md:w-8 cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
