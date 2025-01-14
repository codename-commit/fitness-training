import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="footer_socials">
                    <a href="https://linkedin.com/" target="_blank" rel="norefferer noopner"><FaLinkedin/></a>
                    <a href="https://Facebook.com/" target="_blank" rel="norefferer noopner"><FaFacebook/></a>
                    <a href="https://Twitter.com/" target="_blank" rel="norefferer noopner"><FaXTwitter/></a>
                    <a href="https://Instagram.com/" target="_blank" rel="norefferer noopner"><FaInstagram /></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer_copyright">
                <small>Fitness Training &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer