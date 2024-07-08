import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Light from './component/Light.jsx'
import Header from "./component/header.jsx"
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <Header/>
  <Light/>
  </div>
)
