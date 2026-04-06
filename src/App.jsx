import Navbar from './components/Navbar'
import About from './sections/About'
import Home from './sections/Home'
import Project from "./sections/Project"
import Experience from "./sections/Experience"
import Testimonial from "./sections/Testimonial"
import Skills from "./sections/Skills"
import Footer from "./sections/Footer"
import Contact from "./sections/Contact"
import ParticleBackground from "./components/ParticleBackground"
import Customcursor from './components/Customcursor'


function App() {
 

  return (
    <>
      <div className='relative gradient text-white'>
       <ParticleBackground></ParticleBackground>
       <Customcursor></Customcursor>

        <Navbar></Navbar>
      <About></About>
      <Home></Home>
      <Skills></Skills>
       <Project></Project>
       <Experience></Experience>
       <Testimonial></Testimonial>
       <Contact></Contact>
       <Footer></Footer>
      </div>

    </>
  )
}

export default App
