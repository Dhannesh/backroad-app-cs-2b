import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Tours />
      <Footer />
      <script src="./js/app.js"></script>
    </>
  );
};

export default App;
