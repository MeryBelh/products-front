import React, { createContext, useState, useContext } from 'react';
import { Product, ArticlePanier } from '../types';

type ContextePanier = {
    panier: ArticlePanier[];
    ajouterProduit: (produit: Product) => void;
    supprimerProduit: (produitId: number) => void;
    modifierQuantite: (produitId: number, quantite: number) => void;
    calculerTotal: () => number;
    nombreProduits: () => number;
};

const PanierContext = createContext<ContextePanier | undefined>(undefined);

export function PanierProvider({ children }: { children: React.ReactNode }) {
    const [panier, setPanier] = useState<ArticlePanier[]>([]);

    const ajouterProduit = (produit: Product) => {
        setPanier(panierActuel => {
            const produitExistant = panierActuel.find(p => p.id === produit.id);

            if (produitExistant) {
                return panierActuel.map(p =>
                    p.id === produit.id
                        ? { ...p, quantite: p.quantite + 1 }
                        : p
                );
            }
            return [...panierActuel, { ...produit, quantite: 1 }];
        });
    };

    const supprimerProduit = (produitId: number) => {
        setPanier(panier.filter(p => p.id !== produitId));
    };

    const modifierQuantite = (produitId: number, nouvelleQuantite: number) => {
        if (nouvelleQuantite <= 0) {
            supprimerProduit(produitId);
            return;
        }

        setPanier(panier.map(p =>
            p.id === produitId
                ? { ...p, quantite: nouvelleQuantite }
                : p
        ));
    };

    const calculerTotal = () => {
        return panier.reduce((total, p) => total + (p.price * p.quantite), 0);
    };

    const nombreProduits = () => {
        return panier.reduce((total, p) => total + p.quantite, 0);
    };

    return (
        <PanierContext.Provider value={{
            panier,
            ajouterProduit,
            supprimerProduit,
            modifierQuantite,
            calculerTotal,
            nombreProduits
        }}>
            {children}
        </PanierContext.Provider>
    );
}

export const usePanier = () => {
    const context = useContext(PanierContext);
    if (!context) {
        throw new Error("usePanier doit être utilisé dans un PanierProvider");
    }
    return context;
};