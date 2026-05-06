import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewvwe";
import Showcase from "./components/three/Showcase";
import Performace from "./components/Performace";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Features />
      <Performace />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
