import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useEffect, useState } from "react";
import {
  About,
  Art,
  Contact,
  Hero,
  Loader,
  Menus,
  Navbar,
  Popular,
} from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let timeoutId;

    const onWindowLoad = new Promise((resolve) => {
      if (document.readyState === "complete") return resolve();
      window.addEventListener("load", resolve, { once: true });
    });

    const onFontsReady = document.fonts?.ready || Promise.resolve();

    const minDelay = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 600);
    });

    Promise.all([onWindowLoad, onFontsReady, minDelay]).then(() => {
      setIsReady(true);
    });

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main>
      {!isReady && <Loader />}
      <Navbar />
      <Hero />
      <Popular />
      <About />
      <Art />
      <Menus />
      <Contact />
    </main>
  );
};

export default App;
