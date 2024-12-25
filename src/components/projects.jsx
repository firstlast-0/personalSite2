import Nav from './nav.jsx';
import Contact from './contact';
import eye from '/eye.svg';
import github from '/github.svg';

function Projects() {
    return (
        <>            
            <span className="title">FEATURED</span><h1>PROJECTS</h1>
            <div className="projects">

                <div className="project">
                    <strong>Odin-Book</strong>
                    <div>Social media type Express app with the following features: users, profiles, followers, posts, comments, likes</div>
                
                    <div className="links">
                        <a href="https://odin-book-1uek.onrender.com/" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/odin-book" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div>

                <div className="project">
                    <strong>E-commerce Website</strong>
                    <div>E-commerce type React app that has a shopping cart feature, uses data from an external API</div>
                
                    <div className="links">
                        <a href="https://ec-ws.netlify.app" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/shopping-cart" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div>                

                <div className="project">
                    <strong>Admin Dashboard</strong>
                    <div>Frontend focused project showcasing my CSS capabilities</div>

                    <div className="links">
                        <a href="https://firstlast-0.github.io/dashboard/" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/dashboard" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div>

                <div className="project">
                    <strong>Inventory App</strong>
                    <div>This inventory management app utilizes a MongoDB database which allows users to perform all CRUD operations on items & categories</div>
                    
                    <div className="links">
                        <a href="https://inventory-app-0rel.onrender.com/" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/inventory_app" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div>

                <div className="project">
                    <strong>Members Only</strong>
                    <div>This Express app showcases my ability to give users different abilities and permissions</div>
                    <div className="links">
                        <a href="https://members-only-3pau.onrender.com/" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/members-only" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div>

                {/* <div className="project">
                    <strong>Memory Card</strong>
                    <div>This React app which utilizes an external API allows users to play a memory game</div>
                    <div className="links">
                        <a href="https://mem-card.netlify.app/" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/memoryCard" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div> */}

                <div className="project">
                    <strong>Etch-a-Sketch</strong>
                    <div>This app is an implementation of the toy of the same name</div>
                    
                    <div className="links">
                        <a href="https://firstlast-0.github.io/odin-sketch/" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/odin-sketch" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div>

            </div>
            <br />
            <div className="footnote">For a complete list, visit my <a href="https://github.com/firstlast-0" target='_blank' rel="noreferrer">Github</a></div>

            <Nav></Nav>
            <Contact></Contact>
        </>
    );
}

export default Projects;
