import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import Brand from "./Pages/Home/Brand/Brand";
import Collaborate from "./Pages/Home/Collaborate/Collaborate";
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
      </div>
    </div>
  );
}

export default App;
