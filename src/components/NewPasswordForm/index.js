import axios from 'axios';
import React, { useState } from 'react';
import Form from '../Form';
import Button from '../Button';
import { useParams } from 'react-router-dom';

export default function RecoverPasswordForm () {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {token} = useParams();
    const [loading, setLoading] = useState(false);

    function sendRequestNewPassword(event) {
        event.preventDefault();
        setLoading(true);
        const bodyRequest = { password, confirmPassword, token };
        axios.post(`${process.env.API_BASE_URL}/clients/new-password`, bodyRequest).then(() => {
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
      <Form onSubmit={(event) => sendRequestNewPassword(event)}>
        <input
          placeholder="nova senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          placeholder="repite sua senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button disabled={loading}>
          Redefinir senha
        </Button>
      </Form>
    );
}
