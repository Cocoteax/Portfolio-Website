import "./App.css";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Skillsets from "./components/Skillsets";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Skillsets />
      <Experience />
      <Timeline />
    </div>
  );
}

export default App;
