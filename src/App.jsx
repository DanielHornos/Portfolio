import { useState } from "react";

import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Menu from "./components/menu/menu";
import Experience from "./components/experience/experience";

import './app.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={"app " + (darkMode && 'dark-mode')}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </ div>
  );
}

export default App;
