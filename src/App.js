import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      Portfolio is working fine.
      <Navigation />
      {/* Home */}
      <Home />
      {/* about */}
      <About />
      {/* Skills */}
      <Skills />
      {/* Portfolio */}
      <Portfolio />
      {/* Contact */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
