import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import { useAxios } from './services/axios.service'
import './components/NavBar/NavBar.css'

import CampingProductCard from './components/CampingProductCard';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [products, setProducts] = useState([])
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

      <div>


        <h1>App</h1>

        <>
          {products.map(({ id, brand, name, category, size }) => (
            <p key={id}>  Product Info = {brand} {category} in a {size} size. and Id: {id}</p>
          ))}
        </>

      </div>


    </div>
  );
}

export default App;
