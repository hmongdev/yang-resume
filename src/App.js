import NavBar from './components/NavBar';
import Home from './components/Home';
import Socials from './components/Socials';

function App() {
    return (
        <div className="bg-gradient-to-b from-black via-black to-gray-800">
            <NavBar />
            <Home />
            <Socials />
        </div>
    );
}

export default App;
