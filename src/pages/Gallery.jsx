import Allherosection from "../../src/components/Allherosection"
import HeaderImage from "../assets/header_bg_3.jpg"

const Gallery = () => {
  const gallerylenght = 16;
  const assets = [];

  for(let i = 1; i < gallerylenght; i++){
    assets.push(`images/gallery${i}.jpg`)
  }
  
  return (
    <>
      <Allherosection title="Our Gallery" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis molestias deserunt iusto explicabo.
      </Allherosection>

      <section className="gallery">
        <div className="container gallery_container">
          {
            assets.map((assets, index)=>{
              return (
                <article key={index}>
                    <img src={assets} alt={`Gallery Image${index + 1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery