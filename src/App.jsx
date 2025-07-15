import Navbar from './Components/Navbar';
import './App.css'
import Accueil from './Pages/Accueil';
import Services from './Pages/Services';
import APropos from './Pages/Pourquoichoisir';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}

export default App
