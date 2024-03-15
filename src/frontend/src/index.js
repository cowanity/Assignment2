import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createStore from 'react-auth-kit/createStore';
 import AuthProvider from 'react-auth-kit';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider store={store}>  

  <BrowserRouter>
    <App />
  </BrowserRouter>

  
  </AuthProvider>   
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
