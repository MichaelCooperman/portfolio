import About from "./components/about/About";
import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
};

export default App;
