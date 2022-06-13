import logo from './logo.svg';
import React, { useState, useEffect, createContext } from 'react'
import { useAxios } from './services/axios.service'
import { useLocalStorage } from './services/localStorage.service'
import './components/NavBar/NavBar.css'
import './App.css'
import ProductCard from './components/ProductCard';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

export const Context = createContext();

function App() {

  const [products, setProducts] = useState([])
  const ls = useLocalStorage();
  let user = ls.getUser();

  const http = useAxios();

  function getAllProducts() {
    http.getAllProducts()
      .then(res => {
        console.log(res.data.products)
        setProducts(res.data.products);
      })
      .catch(err => {
        console.error(err)
      });
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  return (

    <div className="App">
      {/* <h1 className='header'>test</h1> */}

      <div className='products-container'>

        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>

      {/* array.map data => cards */}
    </div>



  );
}

export default App;
