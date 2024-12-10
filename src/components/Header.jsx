import { NavLink } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { logo } from "../assets";

/*import { Bar } from 'react-chartjs-2';
import { stats, recentActivity, chartData, chartOptions } from '../constants';}*/


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="Bootstrap" width={30} height={24} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/dashboard"}>Tableau de Bord</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/certificates"}>Certificats</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/settings"}>Paramètres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/"}>Déconnexion</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header