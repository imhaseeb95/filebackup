import { useState } from "react"
import Card from "../UI/Card"
import Sectionheading from "./Sectionheading"
import {testimonials} from "../data"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { BsFillArrowLeftCircleFill} from "react-icons/bs"
import {ImQuotesLeft} from "react-icons/im"


const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const {name, quote, job, avatar} = testimonials[index];

    const nextHandel = () =>{
        setIndex(preve => preve + 1);

        if(index >= testimonials.length - 1){
            setIndex(0);
        }
    }

    const prevHandel = () =>{
        setIndex(preve => preve - 1);

        if(index <= 0){
            setIndex(testimonials.length - 1);
        }
    }
  return (
    <section className="testimonials">
        <div className="container testimonial_container">
        <Sectionheading icon={<ImQuotesLeft/>} title="Testimonials" className="testimonial_head" />
        <Card className="testimonial">
            <div className="testimonial_avatar">
                <img src={avatar} alt={name} />
            </div>
            <p className="testimonial_quote">{`"${quote}"`}</p>
            <h5>{name}</h5>
            <small className="testimonial_title">{job}</small>
        </Card>
        <div className="testimonials_btn-container">
            <button className="testimonials_btn" ><BsFillArrowLeftCircleFill onClick={prevHandel}/></button>
            <button className="testimonials_btn"><BsFillArrowRightCircleFill onClick={nextHandel} /></button>
        </div>
        </div>
        
    </section>
  )
}

export default Testimonials