import axios from 'axios';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router-dom';
import { BackgroundBanner, ContentBox, PageContainer, ContainerData, ContainerButton, Error } from './styles';
import { editUserDataSchema, editUserPasswordSchema} from './editUserDataSchema';

export default function ProfilePage(){
  const nameStorage = localStorage.getItem('name');
  const emailStorage = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  const history = useHistory();

  const [name, setName] = useState(nameStorage);
  const [email, setEmail] = useState(emailStorage);
  const [changingPassword, setChangingPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInvalidData, setIsInvalidData] = useState(false);

  function sendDataToServer() {
    setLoading(true);
    const body = changingPassword ? { name, email, password, confirmPassword } : { name, email };
    const isValidBody = changingPassword ? editUserPasswordSchema.validate(body).error : editUserDataSchema.validate(body).error;

    if (!isValidBody) {
      axios.post(`${process.env.API_BASE_URL}/clients/change-profile`, body, { headers: { 'x-access-Token': token } })
    .then(({ data }) => {
      setLoading(false);
      localStorage.setItem('name', data.name);
      localStorage.setItem('email', data.email);
      history.push('/home');
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
    } else {
      setLoading(false);
      setIsInvalidData(isValidBody);
    }
  }

  return (
    <PageContainer>
      <BackgroundBanner>
        <Avatar name={nameStorage} round={true} size="4em" maxInitials={2} />
        <h2> {nameStorage} </h2>
      </BackgroundBanner>
      <ContentBox>
        <ContainerData>
          <div className='inputBox'>
            <p>nome completo</p>
            <input 
              type='text'
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <p>e-mail</p>
            <input 
              type='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            {
              changingPassword &&
              <>
                <p>Senha</p>
                <input 
                  className='small'
                  type='password'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <p>repita a senha</p>
                <input
                  className='small'
                  type='password'
                  value={confirmPassword}
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                />
              </>
            }
          </div>
          <div className='image'>
            <Avatar name={nameStorage} round={true} size="9em" maxInitials={2} />
          </div>   
        </ContainerData>
        {
          isInvalidData && 
          <Error className='error'>{ JSON.stringify(isInvalidData.message) }</Error>
        }
        <ContainerButton>
          {
            !changingPassword &&
            <button className='password' disabled={loading} onClick={() => setChangingPassword(!changingPassword)}> Trocar senha</button>
          }
          <button className='save' onClick={sendDataToServer} disabled={loading}>
            {loading ? <img src='/assets/images/loading5.gif' alt="" /> :  'Salvar' }
          </button>            
        </ContainerButton>
      </ContentBox>
    </PageContainer>
  );
}
