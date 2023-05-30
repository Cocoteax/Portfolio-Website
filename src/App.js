import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Skillsets from "./components/Skillsets";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Skillsets />
    </div>
  );
}

export default App;
