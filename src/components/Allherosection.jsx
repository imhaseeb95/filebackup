

function Allherosection({title, image, children}) {
  return (
    <div className="header">
        <div className="header_container">
            <div className="header_container-bg">
                <img src={image} alt="Header Background Bg" />
            </div>
            <div className="header_content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </div>
  )
}

export default Allherosection