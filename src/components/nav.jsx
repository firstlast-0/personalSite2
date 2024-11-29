import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/"><span className="initial">A</span>BOUT</Link></li>
                <li><Link to="/projects"><span className="initial">P</span>ROJECTS</Link></li>
                <li><Link to="/skills"><span className="initial">S</span>KILLS</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
