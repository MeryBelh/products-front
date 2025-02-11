import React from 'react';
import ListeProduits from '../composants/ListeProduits';

const Boutique: React.FC = () => {
    return (
        <div className="container">
            <h1 className="mb-4">Notre Boutique</h1>
            <ListeProduits />
        </div>
    );
};

export default Boutique;