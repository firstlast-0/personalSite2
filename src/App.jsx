import Nav from './components/nav';
import Contact from './components/contact';
import odin from '/odin.png';
import './App.css';

function App() {
    return (
        <>            
            <div className="about">
                <h1>hello, <span>world</span>!</h1>
                <br />
                My name is <strong>Vincent</strong> - a <strong>Fullstack Web Developer</strong> based in the Philippines.
                <br />
                I learned Fullstack Development by completing the JavaScript path of <a href="https://theodinproject.com/" className='odin' target='_blank' rel="noreferrer"><strong>the Odin Project <img src={odin} className="icon" alt="odin" /></strong></a>
            </div>

            <Nav></Nav>
            <Contact></Contact>
        </>
    );
}

export default App;
