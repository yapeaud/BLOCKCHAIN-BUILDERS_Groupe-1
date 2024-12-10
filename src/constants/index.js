// Exemple de données pour le tableau et les graphiques
export const stats = {
    issued: 120,
    validated: 95,
    pending: 25,
};

export const recentActivity = [
    { id: 1, name: "Certificat A", date: "2024-12-01" },
    { id: 2, name: "Certificat B", date: "2024-12-03" },
    { id: 3, name: "Certificat C", date: "2024-12-04" },
];

export const chartData = {
    labels: ["Émis", "Validés", "En attente"],
    datasets: [
        {
            label: "Répartition des certificats",
            data: [stats.issued, stats.validated, stats.pending],
            backgroundColor: ["#007bff", "#28a745", "#ffc107"],
        },
    ],
};

export const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

