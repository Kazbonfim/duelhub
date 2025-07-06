import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header';
import Steps from './components/Steps';
import Forms from './components/Forms';
import Information from './components/Information';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Agreement from './components/Agreement';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Steps />
    <Forms />
    <Agreement/>
    {/* <App /> */}
  </StrictMode>,
)
