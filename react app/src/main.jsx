import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './app.css'
import Header from './components/Header'
import App from './App'

// import Usercard from './components/Usercard.jsx'

createRoot(document.getElementById('root')).render(
        <App/>
)
