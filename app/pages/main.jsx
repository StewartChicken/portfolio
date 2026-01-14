import React from 'react'
import { useEffect } from "react";

import Intro from "../components/Intro";
import Projects from "../components/Projects";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Intro />
        <Projects />
    </div>
  )
}

export default Main