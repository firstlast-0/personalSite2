import github from '/github.svg';
import linkedin from '/linkedin.svg';

function Contact() {
    return (
        <div className="contact">
            <a href="https://linkedin.com/in/vin-fajardo" target='_blank' rel="noreferrer"><img src={linkedin} className="icon" alt="linkedin" /></a>
            <a href="https://github.com/firstlast-0" target='_blank' rel="noreferrer"><img src={github} className="icon" alt="github" /></a>
        </div>
    );
}

export default Contact;
