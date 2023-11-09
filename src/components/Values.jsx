import Image from "../assets/values.jpg"
import Sectionheading from "./Sectionheading"
import {BsFillDiamondFill} from "react-icons/bs"
import {values} from "../data"
import Card from "../UI/Card"


const Values = () => {
  return (
    <section className="values">
        <div className="container values_container">
            <div className="values_left">
                <img src={Image} alt="valuesimage" className="values_image" />
            </div>
            <div className="values_right">
                <Sectionheading icon={<BsFillDiamondFill/>} title="Values" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum modi consequatur quasi consequuntur vel dicta quis tempora quibusdam dolor exercitationem.
                </p>
                <div className="values_wrapper">
                    {
                        values.map(({id,icon,title,desc})=>{
                            return(
                                <Card key={id} className="values_value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Values