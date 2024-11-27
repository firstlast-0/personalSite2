import { Link } from "react-router-dom";
import github from '/github.svg';
import linkedin from '/linkedin.svg';
import './App.css';

function App() {
    return (
        <>                       
            <div className="about">
                <h1>hello, world!</h1>
                <br />
                My name is <strong>Vincent</strong> - a <strong>Fullstack Web Developer</strong> based in the Philippines.
                <br />
                I learned Fullstack Development by completing the JavaScript path of <a href="https://theodinproject.com/" target='_blank' rel="noreferrer"><strong>the Odin Project</strong></a>.
            </div>

            <nav>
                <ul>
                    <li><Link to="/"><span className="initial">A</span>BOUT</Link></li>
                    <li><Link to="/projects"><span className="initial">P</span>ROJECTS</Link></li>
                    <li><Link to="/skills"><span className="initial">S</span>KILLS</Link></li>
                </ul>
            </nav>

            <div className="contact">
                <a href="https://linkedin.com/in/vin-fajardo" target='_blank' rel="noreferrer"><img src={linkedin} className="icon" alt="linkedin" /></a>
                <a href="https://github.com/firstlast-0" target='_blank' rel="noreferrer"><img src={github} className="icon" alt="github" /></a>                
            </div>
        </>
    );
}

export default App;
