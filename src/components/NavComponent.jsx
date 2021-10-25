import { useContext } from "react/cjs/react.development"
import { EcommerceContext } from "../context/EcommerceContext"
import { CartComponent } from "./CartComponent";

const NavComponent = () => {
    const { fetchData } = useContext(EcommerceContext)
    const inputKeyPress = (e) => {
        // console.log(e.key)
        if (e.key === "Enter"){
            fetchData(e.target.value);
        }
    }
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#Nav">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#a">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#disabled" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <input onKeyPress={(e) => inputKeyPress(e)} id="navbar_input" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button onClick={() => fetchData(document.getElementById("navbar_input").value)} className="btn btn-outline-success" type="button">Search</button>
                </div>
                </div>
            </div>
            <CartComponent />
            </nav>
        </div>
    )
}
export default NavComponent;