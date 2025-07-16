import './App.css'
import About from './Section/About'
import Projects from './Section/Projects'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  

  return (
    <main>
      <About />
      <Projects />
    </main>
  )
}

export default App
