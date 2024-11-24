import { Link } from "react-router-dom";

function Projects() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>
            </nav>

            <h1>Projects</h1>
            
        </>
    );
}

export default Projects;
