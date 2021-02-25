import axios from 'axios';
import React, { useState } from 'react';
import Form from '../Form';
import Button from '../Button';

export default function RecoverPasswordForm () {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    function sendRequestRecoverPassword(event) {
        event.preventDefault();
        setLoading(true);
        const bodyRequest = { email };
        axios.post(`${process.env.API_BASE_URL}/clients/recover-password`, bodyRequest).then(() => {
            setLoading(false);
            alert('Entre no link enviado para o email inserido');
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
      <Form onSubmit={(event) => sendRequestRecoverPassword(event)}>
        <input
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        <Button disabled={loading}>
          Recuperar Senha
        </Button>
      </Form>
    );
}

// depois trocar um estado e mudar o forms para ter inputs como senhas
//criar pagina com /:token 
