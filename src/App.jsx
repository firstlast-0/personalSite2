import { Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <>           
            <div className="container">

                <div className="main">
                    <h1>hello, world!</h1>
                    <br />
                    My name is Vincent - a Fullstack Web Developer based in the Philippines.
                </div>

                

            </div>

            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default App;
