import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Accueil from './Pages/Accueil';
import Services from './Pages/Services';
import PourquoiChoisir from './Pages/Pourquoichoisir';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <BrowserRouter> 
      <Navbar />
       <Accueil />
        <Services />
         <PourquoiChoisir />
          <Contact />
           <Footer />
            <App/>
    </BrowserRouter>
  </React.StrictMode>
)
