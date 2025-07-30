import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";
import { About, Art, Hero, Navbar, Popular } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Popular />
      <About />
      <Art />
    </main>
  );
};

export default App;
