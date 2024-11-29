import Nav from './components/nav';
import Contact from './components/contact';
import './App.css';

function App() {
    return (
        <>                       
            <div className="about">
                <h1>hello, world!</h1>
                <br />
                My name is <strong>Vincent</strong> - a <strong>Fullstack Web Developer</strong> based in the Philippines.
                <br />
                I learned Fullstack Development by completing the JavaScript path of <a href="https://theodinproject.com/" target='_blank' rel="noreferrer"><strong>the Odin Project</strong></a>.
            </div>

            <Nav></Nav>
            <Contact></Contact>
        </>
    );
}

export default App;
