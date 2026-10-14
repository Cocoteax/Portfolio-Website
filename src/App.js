import FadeIn from "./components/FadeIn";
import "./App.css";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Skillsets from "./components/Skillsets";
import "animate.css";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Banner />
      {/* <Skills /> */}
      <Skillsets />
      <FadeIn duration={3}>
        <Experience />
      </FadeIn>
    </div>
  );
}

export default App;
