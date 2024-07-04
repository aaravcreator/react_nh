import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Weather from './components/Weather.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Weather from './components/Weather.jsx'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <BrowserRouter>
      
      <App />

      </BrowserRouter>
    


    {/* <Home/> */}
    {/* <Header title="Mero Header" subtitle="Welecome to Header"  color="green" /> */}
    {/* <Header title="Mero 2" subtitle="Welecome to  Header 2"  color="orange" /> */}
    {/* <Header title="Arko" subtitle="Welecome to  Header 2"  color="green" /> */}
    {/* <Footer/> */}
    {/* <Weather/> */}
    
   
   
  </React.StrictMode>,
)
