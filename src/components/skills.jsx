import Nav from './nav.jsx';
import Contact from './contact';

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

            <Nav></Nav>
            <Contact></Contact>        
        </>
    );
}

export default Skills;
