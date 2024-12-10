import { useState } from "react";

const Settings = () => {
    const [contractAddress, setContractAddress] = useState("");
    const [network, setNetwork] = useState("Mainnet");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Adresse du Smart Contract :", contractAddress);
        console.log("Réseau sélectionné :", network);
        // Ajoutez ici la logique pour enregistrer les paramètres
    };

    return (
        <div className="container mt-4">
            <h1>Paramètres</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="contractAddress" className="form-label">
                        Adresse du Smart Contract
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="contractAddress"
                        placeholder="0x1234...abcd"
                        value={contractAddress}
                        onChange={(e) => setContractAddress(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="network" className="form-label">
                        Réseau Blockchain
                    </label>
                    <select
                        className="form-select"
                        id="network"
                        value={network}
                        onChange={(e) => setNetwork(e.target.value)}
                    >
                        <option>Mainnet</option>
                        <option>Testnet</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Enregistrer
                </button>
            </form>
        </div>
    );
};

export default Settings;
