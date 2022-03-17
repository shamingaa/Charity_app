import "./styles/App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Donate from "./components/Donate";
import WorkSection from "./components/WorkSection";
import SecondBanner from "./components/SecondBanner";
import Service from "./components/Service";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Donate />
      <WorkSection />
      {/* <SecondBanner /> */}
      <Service />
    </div>
  );
}

export default App;
