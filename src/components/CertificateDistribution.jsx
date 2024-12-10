import { chartData } from '../constants';

const CertificateDistribution = () => {
    return (
        <>
        <div className="mb-4 lg-6">
            <div className="card">
                <div className="card-body">
                    <h2 className="cart-title">Répartition des Certificats</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {chartData.labels.map((label, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: chartData.datasets[0].backgroundColor[index],
                                        marginRight: '8px',
                                    }}
                                ></span>
                                <strong>{label}:</strong> {chartData.datasets[0].data[index]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default CertificateDistribution