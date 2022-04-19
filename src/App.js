import "./scss/app.scss";

// components
import Header from "./components/Header";
// import SectionTwo from "./components/SectionTwo";
// import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import Footer from "./components/Footer";
import HowItWork from "./components/HowItWork";
import WeAreTrusted from "./components/WeAreTrusted";
import DemoVideo from "./components/DemoVideo";
import CoreServices from "./components/CoreServices";
import AwesomeTeam from "./components/AwesomeTeam";

function App() {
  return (
    <>
      <Header />
      <main>
        <HowItWork />
        {/* <SectionTwo /> */}
        {/* <SectionThree /> */}
        <WeAreTrusted />
        <SectionFour />
        <SectionFive />
        <DemoVideo />
        <CoreServices />
        <AwesomeTeam />
      </main>
      <Footer />
    </>
  );
}

export default App;
