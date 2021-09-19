import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Works from "./components/works/works";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
