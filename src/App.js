import Navbar from './components/Navbar';
import Home from './components/Home';
import Socials from './components/Socials';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-gradient-to-b from-black via-black to-gray-800">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Tools />
            <Contact />
            <Socials />
        </div>
    );
}

export default App;
