import Nav from './nav.jsx';
import Contact from './contact';
import eye from '/eye.svg';
import github from '/github.svg';

function Projects() {
    return (
        <>            
            <span className="title">MY</span><h1>PROJECTS</h1>
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

                {/* <div className="project">
                    <strong>Shopping Cart</strong>
                    <div>This React app simulates the shopping cart feature on e-commerce websites</div>
                    <div className="links">
                        <div>
                            <img src={eye} className="icon" alt="eye" />
                            <a href="https://fancy-hamster-3ca8ca.netlify.app/" target='_blank'> Live Preview</a>
                        </div>
                        <div>
                            <img src={github} className="icon" alt="github" />
                            <a href="https://github.com/firstlast-0/shopping-cart" target='_blank'> Github Repo</a>
                        </div>
                    </div>
                </div> */}

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

                <div className="project">
                    <strong>Memory Card</strong>
                    <div>This React app which utilizes an external API allows users to play a memory game</div>
                    <div className="links">
                        <a href="https://quiet-pixie-4e5b8b.netlify.app/" target='_blank'>
                            <img src={eye} className="icon" alt="eye" />Live Preview
                        </a>
                        <a href="https://github.com/firstlast-0/memoryCard" target='_blank'>
                            <img src={github} className="icon" alt="github" />Github Repo
                        </a>
                    </div>
                </div>

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
