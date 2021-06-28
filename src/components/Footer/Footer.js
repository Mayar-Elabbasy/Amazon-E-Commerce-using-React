import '../../public/css/Footer.css';
import { FaHeart, FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

function Footer() {
    const email = "mayarelabbasy2016@gmail.com";

    return (
        <div className="footer">
            <div className="footer__info">
                This project was made with <FaHeart className="footer__heart" /> by Mayar Elabbasy 
            </div>
            <div className="footer__important-links">
                <a href={`mailto:${email}`}>
                    <FaEnvelopeSquare size={25} color={"white"} />
                </a>
                <a href="https://github.com/Mayar-Elabbasy" rel="noreferrer" target="_blank">          
                    <FaGithubSquare size={25} color={"white"} />
                </a>
                <a href="https://www.linkedin.com/in/mayar-elabbasy-453b0917b/" 
                    rel="noreferrer" target="_blank">
                    <FaLinkedin size={25} color={"white"} />  
                </a>
            </div>
        </div>
    )
}

export default Footer;