import './Home.css';
import avatar from '../images/bodhi-formal-pic.jpg'; 
import SocialMediaBar from './SocialMediaBar.js';

export default function HeroSection() {
    return (
        <div className="hero-section d-flex align-items-center justify-content-center">
            <div className="text-center">
                <img 
                    src={avatar} 
                    alt="Your Name" 
                    className="hero-avatar mb-4" 
                />
                <h1 className="hero-title">Bodhidharma Ong</h1>
                <h2 className="hero-subtitle">Junior Backend Developer</h2>
                <p className="hero-tagline">
                    Crafting innovative and scalable solutions for the web
                </p>
                <SocialMediaBar/>
            </div>
        </div>
    );
}