import { Link } from "react-router-dom"
import Image from "../assets/main_header.png"

function Hero() {
  return (
    <>
    <section className="main_header">
        <div className="container main_header-container">
            <div className="main_header-left">
                <h4>#100 Days of Workout </h4>
                <h1>Join The Legends of The Fitness World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint praesentium nemo dolore, voluptas reiciendis dignissimos.
                </p>
                <Link to="/plans" className="btn lg">Get Start</Link>
            </div>

            <div className="main_header-right">
                <div className="main_header-circle"></div>
                <div className="main_header-image">
                    <img src={Image} alt="heroimage" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero