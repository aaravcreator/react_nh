import { useState } from 'react'
import {Routes,Route , Link , useParams} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather'




function App() {
  return (
    <div>
      <div >
        <Link className='nav_link' to="/" >Home</Link>
        <Link className='nav_link' to="/weather" >Weather</Link>
        <Link className='nav_link' to="/about" >About</Link>

      </div>

      <Routes>
        <Route path="/" element={<h1>THIS IS HOME</h1>} />
        <Route path="/weather" element={<Weather/>} />
        
        <Route path="/about" element={<h1>THIS About Page</h1>} />
        <Route path="/contact" element={<h1>THIS Contact Page</h1>} />

        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
              </Routes>
      {/* <Weather/> */}
    </div>
  )
}

export default App


function Products(){

  const [products,setProducts] = useState([
    {
      id:1,
      name:"ICE"
    }
    ,
    {
      id:2,
      name:"MILK"
    },
    {
      id:3,
      name:"CHEESE"
    }
  ])
  return (
    <div>

      {products.map((product)=>{
        return <div className='weather' style={{margin:"10px"}}>
          <h2>{product.id}</h2>
          <h1>{product.name}</h1>

        </div>
      })}

    </div>
  )
}

function ProductDetail(){

  const { id } = useParams()
  return (<div>


    <h1>The product is {id} </h1>
  </div>)
}