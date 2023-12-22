import { Link } from "react-router-dom"
import Image from "../images/main_header.png"

const Header = () => {
  return (
    <header className="main_header">
      <div className="container main_header_container">
        <div className="main_header_left">
            <h4>#100DaysOfWorkout</h4>
            <h1>Join The Legends Of The Fitness World</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header_right">
            <div className="main_header_circle">
            </div>
            <div className="main_header_image">
              <img src={Image} alt="Main Header"/>
            </div>

        </div>
      </div>
    </header>
  )
}

export default Header