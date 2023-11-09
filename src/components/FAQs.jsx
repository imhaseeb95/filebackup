import Sectionheading from "./Sectionheading"
import {MdOutlineQuestionMark} from "react-icons/md"
import {faqs} from "../data"
import FAQ from "./FAQ"

const FAQs = () => {
    
  return (
    <section>
        <div className="container faqs_container">
            <Sectionheading icon={<MdOutlineQuestionMark/>}  title="FAQs" />
            <div className="faqs_wrapper">
                {
                    faqs.map(({id, question, answer}) =>{
                        return <FAQ key={id} question={question} answer={answer} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs