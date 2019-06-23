import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import axios from 'axios';
import {fetchData} from './utils.js'
import styled, { createGlobalStyle } from 'styled-components';

// Configure global styles.
const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
        
    }
`;
const baseURL = 'http://localhost:8080/api';
// Top-level styles.
const AppContainer = styled.div`
    padding: 30px;
    padding-top: 10px;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh
`;

const App = () => {
 // hook const [variableName, setVariableName] = useState(default value)
    
 // Wrapper functions to to modify state i.e. actions  const incrementer = () => setCount(count + 1);


//    useEffect(() => {
//       const fetchData = async () => {
//         const result =  await axios(baseURL)
//         setData(result)  
//     }
//     fetchData()
//    }, [])

  return (
    <AppContainer>
      <GlobalStyle />
    <h1>Hello world! </h1>
    </AppContainer>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}