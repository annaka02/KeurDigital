import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Accueil from './Pages/Accueil.jsx';
import Services from './Pages/Services.jsx';
import APropos from './Pages/Pourquoichoisir.jsx';
import Contact from './Pages/Contact.jsx';
import Footer from './Pages/Footer.jsx';
import PourquoiChoisir from './Pages/Pourquoichoisir.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Accueil />
      <Services />
      <PourquoiChoisir />
      <Contact />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
