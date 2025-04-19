import React, { useState } from "react";
import { Bg, Landing, Navigation, About, Exp,Skills,Projects,Footer,Contact } from "./components";
import "./App.css";

function App() {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <main className="relative min-h-screen w-screen bg-black p-5 py-5 pb-0 md:p-10 md:px-72 overflow-hidden z-20 flex flex-col gap-14 md:gap-20">
        <Bg />
        <Navigation onContactClick={() => setShowContact(true)} />
        <Contact showContact={showContact} setShowContact={setShowContact} />
        <Landing />
        <About />
        <Skills/>
        <Projects/>
        <Exp />
        <Footer/>

      </main>
    </>
  );
}

export default App;
