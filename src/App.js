import React, {useState} from 'react';
import { createGlobalStyle } from "styled-components";

import Header from './components/Header';
import Home from './pages/Home';
//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default function App () {
    return(
        <>
            <GlobalStyle />
            <Header />
            <Home />
        </>
    )
}

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    background: #E5E5E5;
  }

  button, input, textarea, select {
    outline: none;
    border: none;
    background: none;
    color: inherit;
    padding: 0px;
  }
`;