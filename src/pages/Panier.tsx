import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePanier } from '../contexts/PanierContext';

function Panier() {
    const {
        panier,
        supprimerProduit,
        calculerTotal
    } = usePanier();
    const navigate = useNavigate();

    // Si le panier est vide
    if (panier.length === 0) {
        return (
            <div className="text-center">
                <h2>Votre panier est vide</h2>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate('/')}
                >
                    Retourner à la boutique
                </button>
            </div>
        );
    }

    return (
        <div>
            <h2 className="mb-4">Votre Panier</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Prix unitaire</th>
                        <th>Quantité</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {panier.map(produit => (
                        <tr key={produit.id}>
                            <td>{produit.name}</td>
                            <td>{produit.price.toFixed(2)}€</td>
                            <td>{produit.quantite}</td>
                            <td>{(produit.price * produit.quantite).toFixed(2)}€</td>
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
                    <tr>
                        <td colSpan={3} className="text-end fw-bold">Total :</td>
                        <td colSpan={2} className="fw-bold">
                            {calculerTotal().toFixed(2)}€
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-3">
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate('/')}
                >
                    Continuer les achats
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => alert('Redirection vers le paiement...')}
                >
                    Commander
                </button>
            </div>
        </div>
    );
}

export default Panier;