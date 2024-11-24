import { Link } from "react-router-dom";

function Skills() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>
            </nav>

            <h1>Skills</h1>
            
        </>
    );
}

export default Skills;
