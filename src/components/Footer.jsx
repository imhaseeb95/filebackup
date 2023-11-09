import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
const Footer = () => {
    
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="footerLogo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident libero quasi alias ab fuga laborum. Voluptatibus praesentium, ab vero iure assumenda similique nemo numquam velit commodi sunt quam sapiente incidunt?
                </p>
                <div className="footer_social">
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/about'>Blog</Link>
                <Link to='/plans'>Case Studies</Link>
                <Link to='/trainers'>Events</Link>
                <Link to='/gallery'>Communities</Link>
                <Link to='/contact'>{`FAQ's`}</Link>
            </article>
            <article>
                <h4>Get Touch</h4>
                <Link to='/about'>Contact Us</Link>
                <Link to='/plans'>Support</Link>
                <Link to='mailto:ansari.hasib99@gmail.com' className="linkmail">ansari.hasib99@gmail.com</Link>
                <Link to='tel:+91 8130505609' className="linkmail">+91 8130505609</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 webbetle &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer