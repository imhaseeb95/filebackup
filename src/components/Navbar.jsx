import {useState} from "react" 
import {Link, NavLink} from "react-router-dom";
import Logo from "../assets/logo.svg";
import {links} from "../data" 
import {FaBars} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo"><img src={Logo} alt="logo" onClick={()=> setIsNavShowing(false)} /></Link>
        
        <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          {
            links.map(({name,path}, index)=>{
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""} onClick={()=>setIsNavShowing(preve => !preve)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(preve => !preve)}>{
          isNavShowing ?  <RxCross2/> : <FaBars/> 
        }
        </button>
      </div>

    </nav>
  )
}

export default Navbar