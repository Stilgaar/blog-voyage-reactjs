import './navbar.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Navbar () {
    return (
        <div className="navigation">
            
            <div className="navi">
        <Router>
           <Link to="/" className="element">Retour à l'Acceuil </Link>
            <Link to="/voyages" className="element">Voyages</Link>
            <Link to="/malin" className="element">Malin !</Link>
            <Link to="/hotelResto" className="element">Hotels et Resto</Link>
        </Router>
            </div>

        </div>
    );
}

export default Navbar;