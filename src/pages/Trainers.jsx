import Allherosection from "../components/Allherosection"
import HeaderImage from "../assets/header_bg_5.jpg"
import {trainers} from "../data"
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import Trainer from "../components/Trainer"
// import {AiFillInstagram} from "react-icons/ai"
// import {AiFillLinkedin} from "react-icons/ai"

const Trainers = () => {
  console.log(trainers)
  return (
    <>
      <Allherosection title="OUR Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos non eius labore aut nisi molestiae quae assumenda.
      </Allherosection>
      <section className="traiers">
        <div className="container trainers_container">
          {
            trainers.map(({id, image, name, job, socials})=>{
              return(
                
                <Trainer key={id} image={image} name={name} job={job} socials={[
                  {icon: <AiFillInstagram/>, link: socials[0]},
                  {icon: <BsTwitter/>, link: socials[1]},
                  {icon: <AiFillFacebook/>, link: socials[2]},
                  {icon: <AiFillLinkedin/>, link: socials[3]}
                ]
                }  />
                
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers