import './App.css';
import About from './Section/About';
import Projects from './Section/Projects';
import ProjectDetails from './Section/ProjectDetails'; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Projects />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
