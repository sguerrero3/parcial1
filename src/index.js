import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMEssages from "./locales/en";

const userLocale = navigator.language || navigator.userLanguage; //Detectar el lenguaje del navegador
const messages = userLocale.startsWith('es') ? localeEsMessages : localeEnMEssages //Defnir que mensajes utilizar
const locale = userLocale.split('-')[0]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages= {messages}>
    <Header />
    <App />
    <Footer />
    </IntlProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
