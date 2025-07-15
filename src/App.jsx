
import './App.css'
import Accueil from './Pages/Accueil';
import Services from './Pages/Services';
import Realisations from './Pages/Realisations';
import APropos from './Pages/Pourquoichoisir';
import Contact from './Pages/Contact';

function App() {
    return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
