import FAQs from "../components/FAQs"
import Hero from "../components/Hero"
import Programs from "../components/Programs"
import Testimonials from "../components/Testimonials"
import Values from "../components/Values"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    </div>
  )
}

export default Home