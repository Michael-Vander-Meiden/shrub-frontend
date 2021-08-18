import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a to="/"
                    style = {{color: "#456E3F"}}>POLICIES</a>
                <a to="/exchange"
                    style = {{color: "#456E3F"}}>EXCHANGE</a>
                <a to="/mint"
                    style = {{color: "#456E3F"}}>MINT</a>
                <a to="/dashboard"
                   style = {{
                       color: "white",
                       backgroundColor: "#456E3F",
                       borderRadius: "8px",
                   }}
                   >DASHBOARD</a>

            </div>
        </nav>
     );
}
 
export default Navbar;