import ActiviteRecente from "../components/ActiviteRecente"
import CertificateDistribution from "../components/CertificateDistribution"
import Certificats from "../components/Certificats"
import Footer from "../components/Footer"
import Header from "../components/Header"

//import RepartitionCertificats from "../components/RepartitionCertificats"



const DashboardPage = () => {
    return (
        <>
        <Header />
            <div className="container mt-4">
                <Certificats />
                <ActiviteRecente />
                <CertificateDistribution />
            </div>
        <Footer />
        </>
    )
}

export default DashboardPage