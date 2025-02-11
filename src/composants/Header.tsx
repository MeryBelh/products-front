import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePanier } from '../contexts/PanierContext';

function Header() {
    const navigate = useNavigate();
    const { panier } = usePanier();

    let nombreArticles = 0;
    for (let article of panier) {
        nombreArticles += article.quantite;
    }

    return (
        <nav className="navbar bg-white border-bottom">
            <div className="container">
                <div className="d-flex align-items-center gap-4">
                    <Link to="/" className="text-black text-decoration-none">Accueil</Link>
                    <Link to="/contact" className="text-black text-decoration-none">Contact</Link>
                </div>
                <button
                    className="btn btn-dark"
                    onClick={() => navigate('/panier')}
                >
                    Panier ({nombreArticles})
                </button>
            </div>
        </nav>
    );
}

export default Header;