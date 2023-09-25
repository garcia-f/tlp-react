import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
import './App.css';



import { NavbarApp } from './NavbarApp.jsx';
import { MainApp } from './MainApp.jsx';
import { FooterApp } from './FooterApp.jsx';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <NavbarApp />
    <MainApp />s
    <FooterApp />
  </React.StrictMode>,
)
