import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePanier } from '../contexts/PanierContext';

function Panier() {
    const { panier, supprimerProduit } = usePanier();
    const navigate = useNavigate();

    if (panier.length === 0) {
        return (
            <div className="text-center">
                <h2>Votre panier est vide</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/')}
                >
                    Retourner à la boutique
                </button>
            </div>
        );
    }

    return (
        <div>
            <h2>Votre Panier</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {panier.map(produit => (
                    <tr key={produit.id}>
                        <td>{produit.name}</td>
                        <td>{produit.price}€</td>
                        <td>{produit.quantite}</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => supprimerProduit(produit.id)}
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="text-end">
                <button className="btn btn-success">Commander</button>
            </div>
        </div>
    );
}

export default Panier;