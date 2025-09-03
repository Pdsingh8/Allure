import Nav from "./Components/Nav.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Slideshow from "./Components/Slideshow.jsx";
import BestSelling from "./Components/BestSelling.jsx";
import NewLook from "./Components/NewLook.jsx";
import Collections from "./Components/Collections.jsx";
import Video from "./Components/Video.jsx";
// import SafariGl from "./Components/SafariGl.jsx";
import Poll from "./Components/Poll.jsx";
import Features from "./Components/Features.jsx";
import Spring from "./Components/Spring.jsx";
import Measure from "./Components/Measure.jsx";
import Brown from "./Components/Brown.jsx";
import NewSpring from "./Components/NewSpring.jsx";
import Perfect from "./Components/Perfect.jsx";
import Lright from "./Components/Lright.jsx";
import Footer from "./Components/Footer.jsx";
// import Testing from "./Components/Testing.jsx";
// import Safari from "./Components/Safari.jsx";
import ProductModal from "./Components/ProductModal.jsx";
import Tests from "./Components/Tests.jsx";
import News from "./Components/News.jsx";
import NewLooks from "./Components/NewLooks.jsx";
import Stops from "./Components/Stops.jsx";

function App() {
  return (
    <>
      <div className="">
        <Nav />
        <Navbar />
        <Slideshow />
        <BestSelling />
        <NewLooks/>
        {/* <NewLook /> */}
        <Collections />
        <Video />
        <Tests/>
        {/* <SafariGl /> */}
        <Poll />
        <Features />
        <Spring />
        {/* <Measure /> */}
        <Brown />
        <NewSpring />
        <Perfect />
        <Lright />
        <Footer />
        <ProductModal />
        <News/>
        
        
      </div>
    </>
  );
}

export default App;
