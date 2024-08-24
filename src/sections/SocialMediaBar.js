import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaBar.css';

export default function SocialMediaBar() {
    return (
        <div className="social-media-bar d-flex justify-content-center">
            <a href="https://www.instagram.com/bodhiong" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/bodhidharma-ong-483839150/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.github.com/BodhiOng" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
}