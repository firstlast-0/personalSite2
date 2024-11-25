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

            <span className="title">DEV</span><h1>BUDDIES</h1>
            
            <div className="stack">

                <div>
                    <strong>Languages I speak</strong>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div>
                    <strong>Tools & Technologies</strong>
                    <ul>                       
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>NodeJS</li>   
                        <li>Git</li>                                             
                        <li>EJS</li>
                        <li>Webpack</li>
                        <li>Visual Studio Code</li>
                        <li>Jest</li>
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Skills;
