import Allherosection from "../components/Allherosection"
import HeaderImage from "../assets/header_bg_2.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"


const Contact = () => {
  return (
    <>
      <Allherosection  title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, a nam fuga similique nulla neque ad eveniet suscipit ratione, veniam veritatis ipsum dolores, non iste ea commodi repudiandae soluta facilis.
      </Allherosection>

      <section className="contact">
        <div className="container contact_container">
          <div className="contatct_wrapper">
              <a href="mailto:ansari.hasib99@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail/></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><BsMessenger/></a>
              <a href="https://wa.me/8130505609" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp/></a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact