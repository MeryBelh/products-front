import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PanierProvider } from './contexts/PanierContext';
import Header from './composants/Header';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Panier from './pages/Panier';

function App() {
    return (
        <PanierProvider>
            <BrowserRouter>
                <div>
                    <Header />
                    <main className="container mt-4">
                        <Routes>
                            <Route path="/" element={<Accueil />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/panier" element={<Panier />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </PanierProvider>
    );
}

export default App;