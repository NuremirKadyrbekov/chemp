import "./App.css";
import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
