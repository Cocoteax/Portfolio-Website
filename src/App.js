import ScrollAnimation from "react-animate-on-scroll";
import "./App.css";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Skillsets from "./components/Skillsets";
import "animate.css";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Banner />
      {/* <Skills /> */}
      <Skillsets />
      <ScrollAnimation
        animateIn="animate__animated animate__fadeIn"
        duration="3"
      >
        <Experience />
      </ScrollAnimation>
    </div>
  );
}

export default App;
