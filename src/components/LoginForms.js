import React, { useState } from 'react'
import styled from 'styled-components'


export default function LoginForm (props) {

    const { registered } = props;

    return (
        <Form>
            {registered ? '' : 
                <input
                    placeholder = "nome completo"
                    type = "email"
                    required
                />
            }
           <input
                placeholder = "e-mail"
                type = "email"
                required
           />
            <input
                placeholder = "senha"
                type = "password"
                required
           />
           {registered ? '' : 
                <input
                        placeholder = "repetir senha"
                        type = "password"
                        required
                />
            }
           <button>
                 { registered ? "Entrar" : "Cadastrar" }
           </button>
        </Form>
    );
  }

  const Form = styled.form`

    input {
        border: 1px solid #B4B4B4;
        width: 100%;
        height: 3rem;
        margin: 0.5rem 0;
        border-radius: 0.5rem;
        padding-left: 1rem;
        font-size: 1.1rem;
        font-family: Roboto;
        font-weight: bold;
    }

    button {
        width: 100%;
        height: 3rem;
        background: #46A7D4;
        border-radius: 0.5rem;
        outline: 0;
        border: 0;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 1.1rem;
        color: #FFFFFF;
    }
  `