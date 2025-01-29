import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function Nav() {
    let location = useLocation();
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        if (location.pathname === '/') {
            aboutRef.current.className = 'selected';
        } else if (location.pathname === '/projects') {
            projectsRef.current.className = 'selected';
        } else {
            skillsRef.current.className = 'selected';
        }
    }, [location]);

    return (
        <nav>
            <ul>
                <li ref={aboutRef}><Link to="/"><div data-label="ABOUT"></div></Link></li>
                <li ref={projectsRef}><Link to="/projects"><div data-label="PROJECTS"></div></Link></li>
                <li ref={skillsRef}><Link to="/skills"><div data-label="SKILLS"></div></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
