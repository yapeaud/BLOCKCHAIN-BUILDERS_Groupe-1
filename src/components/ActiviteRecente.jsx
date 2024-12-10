import { recentActivity } from "../constants"

const ActiviteRecente = () => {
    return (
        <>
            <div>
                <div className="mb-4 lg-6">
                    <div className='card'>
                        <div className="card-body">
                            <h2 className="card-title">Activité Récente</h2>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nom</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentActivity.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActiviteRecente