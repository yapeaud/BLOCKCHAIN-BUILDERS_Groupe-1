/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ isAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Redirection si l'utilisateur est déjà connecté
    if (isAuthenticated) {
        navigate("/dashboard");
        return null;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // Logique de gestion de la connexion (API, validation, etc.)
        console.log("Email:", email, "Password:", password);
        navigate("/dashboard");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">Se connecter</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-2">
                        Se connecter
                    </button>
                </form>
                {/* <div className="d-flex justify-content-between align-items-center">
                    <a href="/reset-password" className="text-decoration-none">
                        Mot de passe oublié ?
                    </a>
                </div>*/}
                <div className="text-center mt-4">
                    <span>Pas de compte ?</span>
                    <button
                        onClick={() => navigate("/signup")}
                        className="btn btn-outline-secondary w-100 mt-2"
                    >
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
