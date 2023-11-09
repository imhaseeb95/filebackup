import Allherosection from "../components/Allherosection"
import HeaderImage from "../assets/header_bg_4.jpg"
import {plans} from "../data"
import Card from "../UI/Card"

const Plans = () => {
  return (
    <>
    <Allherosection title="Memberdhip Plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque qui hic, exercitationem dolor aut nam error mollitia.
    </Allherosection>
    <section className="plans">
      <div className="container plans_container">
        {
          plans.map(({id, name, desc, price, features})=>{
            return(
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h2>{`$ ${price}`}</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) =>{
                    return(
                      <p key={index} className={!available ? 'disbale' : ''}>{feature}</p>
                    )
                  })
                }
                <button className="btn lg">Choose Plan</button>
              </Card>
            )
          })
        }
      </div>

    </section>
    </>
  )
}

export default Plans