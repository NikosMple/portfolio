import Navbar from "./ui/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./ui/Footer";
import SocialBar from "./ui/SocialBar";

export default function App() {
  return (
    <div className="screen-full">
      <Navbar />
      <SocialBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
