import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <h1>Shrub</h1>
            </Link>
            <h2>0.2 ETH</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                
                <Link className="nav-link active" to="/buycover">
                    <li className="nav-item">
                        Buy Cover
                    </li>
                </Link>
                <Link className="nav-link active" to="/steak">
                    <li className="nav-item">
                        Stake
                    </li>
                </Link>
                <Link className="nav-link active" to="/buycover">
                    <li className="nav-item">
                        About
                    </li>
                </Link>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default Navbar