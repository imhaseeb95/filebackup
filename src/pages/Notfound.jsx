import { Link } from "react-router-dom"


const Notfound = () => {
  return (
    <>
      <section className="conatiner notfound_container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">Go Back Home</Link>
      </section>
    </>
  )
}

export default Notfound