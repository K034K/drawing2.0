import React from 'react'

import { createRoot } from 'react-dom/client'

import App from './App.jsx'
//import 98.css
import '98.css'


window.addEventListener('selectstart', (event) => { 
    event.preventDefault()
})

//rendering the app
const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);