import github from '/github.svg';
import linkedin from '/linkedin.svg';
import email from '/email.svg';

function Contact() {
    return (
        <div className="contact">
            <a href="mailto:fvf.vinn@gmail.com" target='_blank' rel="noreferrer"><img src={email} className="icon grayFilter" alt="email" /></a>
            <a href="https://linkedin.com/in/vin-fajardo" target='_blank' rel="noreferrer"><img src={linkedin} className="icon grayFilter" alt="linkedin" /></a>
            <a href="https://github.com/firstlast-0" target='_blank' rel="noreferrer"><img src={github} className="icon grayFilter" alt="github" /></a>
        </div>
    );
}

export default Contact;
