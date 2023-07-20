
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

window.addEventListener('selectstart', (event) => { 
    event.preventDefault()
})


const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);