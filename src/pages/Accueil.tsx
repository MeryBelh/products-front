import React from 'react';
import ListeProduits from '../composants/ListeProduits';

function Accueil() {
    return (
        <div>
            <h1 className="mb-4">Notre Boutique</h1>
            <ListeProduits />
        </div>
    );
}

export default Accueil;