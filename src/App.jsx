import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import SettingsPage from './pages/SettingsPage';
import CertificatPage from './pages/CertificatPage';

function App() {
  const isAuthenticated = false; // Remplacez avec votre logique d'authentification

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<LoginPage isAuthenticated={isAuthenticated} />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/certificates" element={<CertificatPage />} />
        {/*<Route path="/reset-password" element={<h1>Réinitialiser le mot de passe</h1>} />*/}
        </Routes>
      </Router>
    </>
  )
}

export default App
