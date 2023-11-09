import { useState } from "react"
import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"

const FAQ = ({question, answer}) => {
    const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  return (
    <div>
        <article className="faq" onClick={()=> setIsShowingAnswer(preve =>!preve)}>
            <div>
                <h4>{question}</h4>
                <button className="faq_icon" onClick={()=> setIsShowingAnswer(!isShowingAnswer)}>
                    {isShowingAnswer ? <FaMinus/> : <FaPlus/>}
                </button>
            </div>
            {isShowingAnswer && <p>{answer}</p>}
        </article>
    </div>
  )
}

export default FAQ