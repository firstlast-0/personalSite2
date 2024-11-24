import { Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>
            </nav>

            <h1>Hello, World!</h1>
            My name is Vincent - a Fullstack Web Developer.
        </>
    );
}

export default App;
