import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";




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
                    <a href="https://Instagram.com/" target="_blank" rel="norefferer noopner"><FaInstagramSquare/></a>
                </div>
            </article>
        </div>
    </footer>
  )
}

export default Footer