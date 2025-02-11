import React from 'react';
import { usePanier } from '../contexts/PanierContext';
import { Product } from '../types';

function ListeProduits() {
    const { ajouterProduit } = usePanier();

    const produits: Product[] = [
        {
            id: 1,
            code: "produit-1",
            name: "Produit 1",
            description: "Description product 1",
            image: "https://placehold.co/300x200",
            category: "cat-1",
            price: 39.99,
            quantity: 50,
            internalReference: "REF-001",
            shellId: 1,
            inventoryStatus: "INSTOCK",
            rating: 4.5,
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
        {
            id: 2,
            code: "produit-002",
            name: "Produit 2",
            description: "Description product 2",
            image: "https://placehold.co/300x200",
            category: "cat-2",
            price: 49.99,
            quantity: 30,
            internalReference: "REF-002",
            shellId: 1,
            inventoryStatus: "LOWSTOCK",
            rating: 4.2,
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
        {
            id: 3,
            code: "produit-003",
            name: "Produit 3",
            description: "Description product 3",
            image: "https://placehold.co/300x200",
            category: "cat-3",
            price: 45.99,
            quantity: 0,
            internalReference: "REF-003",
            shellId: 1,
            inventoryStatus: "OUTOFSTOCK",
            rating: 4.8,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    ];

    return (
        <div className="row g-4">
            {produits.map(produit => (
                <div key={produit.id} className="col-md-4">
                    <div className="card h-100">
                        <img
                            src={produit.image}
                            className="card-img-top"
                            alt={produit.name}
                        />
                        <div className="card-body d-flex flex-column">
                            <div className="mb-auto">
                                <h5 className="card-title">{produit.name}</h5>
                                <p className="card-text text-muted">{produit.description}</p>
                            </div>
                            <div className="mt-3">
                                <p className="h5 mb-3">{produit.price.toFixed(2)} €</p>
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => {
                                        ajouterProduit(produit);
                                        //alert('Produit ajouté au panier !');
                                    }}
                                    disabled={produit.inventoryStatus === "OUTOFSTOCK"}
                                >
                                    {produit.inventoryStatus === "OUTOFSTOCK"
                                        ? "Rupture de stock"
                                        : "Ajouter au panier"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListeProduits;