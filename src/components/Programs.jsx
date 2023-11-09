import Sectionheading from "./Sectionheading"
import {FaCrown} from 'react-icons/fa'
import {programs} from "../data" 
import Card from "../UI/Card"
import { Link } from "react-router-dom"
import {BiSolidRightArrow} from "react-icons/bi"

const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs_container">
            <Sectionheading icon={<FaCrown/>} title="Programs"  />
        
        <div className="programs_wrapper">
          {
            programs.map(({id, icon,title, info, path})=>{
              return(
                <Card key={id} className="programs_program">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">Learn More <BiSolidRightArrow/></Link>
                </Card>
              )

            })
          }
        </div>
        </div>
    </section>
  )
}

export default Programs