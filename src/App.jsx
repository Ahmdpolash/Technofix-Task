import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import Brand from "./Pages/Home/Brand/Brand";
import BuiltTeam from "./Pages/Home/BuiltTeam/BuiltTeam";
import BuiltWork from "./Pages/Home/BuiltWork.jsx/BuiltWork";
import Collaborate from "./Pages/Home/Collaborate/Collaborate";
import Connect from "./Pages/Home/Connect/Connect";
import Relationship from "./Pages/Home/Relationship/Relationship";
import Testimonials from "./Pages/Home/Testimonials/Testimonials";
import Work from "./Pages/Home/Work/Work";

function App() {
  return (
    <div className="bg-[#ffffff]">
      <Navbar />
      <div className="px-6 md:px-14 lg:px-28 py-5 lg:py-10">
        <Banner />
        <Brand />
        <Collaborate />
        <Work />
        <Connect />
        <Relationship />
        <BuiltWork />
        <BuiltTeam />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
