import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import './Components/Navbar/Navbar.css'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <>
    <StrictMode>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </StrictMode>
    </>
)
