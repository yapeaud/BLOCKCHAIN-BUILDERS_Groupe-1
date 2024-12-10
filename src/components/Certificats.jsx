import { stats } from "../constants"


const Certificats = () => {
    return (
        <>
            <div className="row mb-4">
                <div className='col-md-4'>
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 className="card-title">Certificats Émis</h2>
                            <h3>{stats.issued}</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className=" card text-center">
                        <div className="card-body">
                            <h2 className="card-title">Certificats Validés</h2>
                            <h3>{stats.validated}</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 className="card-title">Certificats en Attente</h2>
                            <h3>{stats.pending}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Certificats