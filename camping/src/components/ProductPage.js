
import React, { useState, useEffect, createContext } from 'react'
import { useAxios } from '../services/axios.service'
import { useLocalStorage } from '../services//localStorage.service'
import { BrowserRouter, useParams } from 'react-router-dom';
// import './NavBar/NavBar'
import './TentProductCard.css'
import ProductPageCard from './TentProductCard';
import NavBar from './NavBar/NavBar';



export const Context = createContext();


function ProductPage() {

    let { category } = useParams()
    const [products, setProducts] = useState([])
    const ls = useLocalStorage();
    let user = ls.getUser();
    // use params ???

    const http = useAxios();

    function getProductByCategory(category) {
        http.getProductByCategory(category)
            .then(res => {
                console.log(res.data)
                setProducts(res.data.products);
            })
            .catch(err => {
                console.error(err)
            });
    }

    useEffect(() => {
        getProductByCategory(category);
    }, [])

    return (

        <div className="tents">
            <h1 className='header'>"Let's Go Camping!!! </h1>

            <div className='products-container'>

                {products.map(tent => <ProductPageCard key={tent.id} {...tent} />)}
            </div>

            {/* array.map data => cards */}
        </div>



    );
}

export default ProductPage;
