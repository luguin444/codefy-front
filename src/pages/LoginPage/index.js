import React, {useState} from 'react';
import LoginForm from '../../components/LoginForm.js';
import Container from './styles';

export default function LoginPage () {
   const [registered, setRegistered] = useState(false);

   return (
       <Container>
           <img src='assets/images/logo.png' alt="" />
           <h2> learn. practice. code.</h2>
           <div className='loginBox'>
               <LoginForm registered={registered} setRegistered={setRegistered} />
               <button onClick={() => setRegistered(!registered)} className="footer"> 
                   { registered ?
                     "Primeira vez ? Crie uma conta!" :
                     "Já tem uma conta ? Faça login" 
                   }
               </button>
               <button className="footer">Esqueceu sua senha ?</button>
           </div>
       </Container>
   );
}
