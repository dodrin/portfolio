import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/Nav.css'
import './styles/Home.css'
import './styles/Skills.css'
import './styles/Contact.css'
import './styles/Footer.css'
import 'locomotive-scroll/dist/locomotive-scroll.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
