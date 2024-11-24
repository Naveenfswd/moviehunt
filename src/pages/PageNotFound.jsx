
import { Link } from "react-router-dom"
import pagenotfound from "../assets/pagenotfound.webp"
export const PageNotFound = () => {
  return <div className="container">
<div className="d-flex justify-content-center">
<img src={pagenotfound} className="img-fluid" style={{width:"600px",height:"450px"}} alt="" />

</div>

<p className="text-center">
  <Link to="/" className="btn btn-danger">Goto Home Page</Link>

</p>
  </div>
}


