import React from 'react';
import Container from '../LoginPage/styles';
import RecoverPasswordForm from '../../components/RecoverPasswordForm/index';
import { useHistory } from 'react-router-dom';

export default function recoverPasswordPage () {
    const history = useHistory();

    return (
      <Container>
        <img src='/assets/images/logo.png' alt="" />
        <h2> learn. practice. code.</h2>
        <div className='loginBox'>
          <RecoverPasswordForm />
          <button className="footer" onClick={() => history.push('/')}>Voltar para o login</button>
        </div>
      </Container>
    );
}
