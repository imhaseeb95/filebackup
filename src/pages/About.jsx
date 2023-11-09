import Allherosection from "../components/Allherosection"
import HeaderImage from "../assets/header_bg_1.jpg"
import StoryImage from "../assets/about1.jpg"
import VisionImage from "../assets/about2.jpg"
import MissionImage from "../assets/about3.jpg"


const About = () => {
  return (
    <>
      <Allherosection title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti magnam dolorem eaque ipsa dignissimos, nihil velit hic non expedita molestias ipsum. 
      </Allherosection>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="our story" />
        </div>
        <div className="about_section-content">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio atque placeat aut tempore esse deleniti dicta aliquid nulla necessitatibus sequi numquam deserunt pariatur ex eum quam, officia ipsum excepturi fugiat.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti magnam dolorem eaque ipsa dignissimos, nihil velit hic non expedita molestias ipsum. 
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
       
        <div className="about_section-content">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio atque placeat aut tempore esse deleniti dicta aliquid nulla necessitatibus sequi numquam deserunt pariatur ex eum quam, officia ipsum excepturi fugiat.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti magnam dolorem eaque ipsa dignissimos, nihil velit hic non expedita molestias ipsum. 
          </p>
          
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="our vision story" />
        </div>
      </div>
    </section>

    <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="our mission" />
        </div>
        <div className="about_section-content">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio atque placeat aut tempore esse deleniti dicta aliquid nulla necessitatibus sequi numquam deserunt pariatur ex eum quam, officia ipsum excepturi fugiat.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti magnam dolorem eaque ipsa dignissimos, nihil velit hic non expedita molestias ipsum. 
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

    </section>

    </>
  )
}

export default About