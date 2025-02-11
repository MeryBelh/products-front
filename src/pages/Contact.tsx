import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageEnvoye, setMessageEnvoye] = useState(false);

    const gererEnvoi = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && message && message.length <= 300) {
            setMessageEnvoye(true);
            setEmail('');
            setMessage('');
            setTimeout(() => setMessageEnvoye(false), 3000);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1 className="text-center mb-4">Contactez-nous</h1>

                {messageEnvoye && (
                    <div className="alert alert-success">
                        Demande de contact envoyée avec succès
                    </div>
                )}

                <form onSubmit={gererEnvoi}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            rows={5}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            maxLength={300}
                            required
                        />
                        <div className="form-text">
                            {message.length}/300 caractères
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;