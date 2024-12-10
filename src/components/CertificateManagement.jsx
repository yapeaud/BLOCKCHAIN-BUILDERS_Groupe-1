/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"


const CertificateManagement = () => {
    const [certificates, setCertificates] = useState([
        {
            id: 1,
            owner: "0x123...abc",
            description: "Certificat de formation",
            issueDate: "01/12/2024",
            status: "Validé",
        },
        {
            id: 2,
            owner: "0x456...def",
            description: "Attestation de travail",
            issueDate: "28/11/2024",
            status: "En Attente",
        },
    ]);

    const handleEdit = (id) => {
        console.log(`Modifier le certificat avec l'ID : ${id}`);
        // Ajoutez ici votre logique de modification
    };

    const handleDelete = (id) => {
        console.log(`Supprimer le certificat avec l'ID : ${id}`);
        setCertificates(certificates.filter((cert) => cert.id !== id));
    };
    return (
        <>
            <div className="container mt-4">
                <h1>Gestion des Certificats</h1>
                <button className="btn btn-primary my-3">Créer un Nouveau Certificat</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Propriétaire</th>
                            <th>Description</th>
                            <th>Date d'Émission</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>0x123...abc</td>
                            <td>Certificat de formation</td>
                            <td>01/12/2024</td>
                            <td><span className="badge bg-success">Validé</span></td>
                            <td>
                                <button className="btn btn-sm btn-info">Modifier</button>&nbsp;&nbsp;
                                <button className="btn btn-sm btn-danger">Supprimer</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>0x456...def</td>
                            <td>Attestation de travail</td>
                            <td>28/11/2024</td>
                            <td><span className="badge bg-warning text-dark">En Attente</span></td>
                            <td>
                                <button className="btn btn-sm btn-info">Modifier</button>&nbsp;&nbsp;
                                <button className="btn btn-sm btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CertificateManagement