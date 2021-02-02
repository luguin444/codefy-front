import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

import Form from './styles';
import Button from '../Button';

export default function LoginForm (props) {

    const {registered} = props;
    const history = useHistory();
    const {setUser} = useContext(UserContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function sendDataToServer(event) {
        event.preventDefault();
        setLoading(true);
        registered ? signInRoute() : signUpRoute();
    }

    function signInRoute() {
        const bodyRequest = {email, password};
        axios.post('route', bodyRequest).then(({data}) => {
            setLoading(false);
            setUser(data);
            history.push('/home');
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    function signUpRoute() {
        const bodyRequest = {name, email, password, confirmPassword};
        axios.post('route', bodyRequest).then(() => {
            setLoading(false);
            history.push('/home');
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
        <Form onSubmit={sendDataToServer}>
            {registered ? '' : 
            <input
                placeholder="nome completo"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            }
            <input
                placeholder="e-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                placeholder="senha"
                type="password"
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
                required
           />
            {registered ? '' : 
            <input
                placeholder="repetir senha"
                type="password"
                value={confirmPassword}
                onChange={ (e) => setConfirmPassword(e.target.value)}
                required
            />
            }
            <Button disabled={loading}>
                {registered ? "Entrar" : "Cadastrar"}
            </Button>
        </Form>
    );
}