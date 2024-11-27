import { Link } from "react-router-dom";
import github from '/github.svg';
import linkedin from '/linkedin.svg';

function Skills() {
    return (
        <>            
            <span className="title">DEV</span><h1>BUDDIES</h1>
            
            <div className="stack">

                <div>
                    <strong>Languages I speak</strong>
                    <ul className="languages">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div>
                    <strong>Tools & Technologies</strong>
                    <ul className="tools">                       
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>NodeJS</li>   
                        <li>Git</li>                                             
                        <li>EJS</li>
                        <li>Webpack</li>
                        <li>VS Code</li>
                        
                    </ul>
                </div>

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

export default Skills;
