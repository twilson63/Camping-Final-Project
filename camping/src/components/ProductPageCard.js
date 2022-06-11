import React, { useState, useEffect } from 'react'
import { useAxios } from '../services/axios.service'
import { useApi } from '../services/axios.service'
import { useLocalStorage } from '../services/localStorage.service';



export default function ProductPageCard({ id, name, price, brand, color, style, description, image, rating, quantity, product_id, customer_id, total }) {
    const http = useAxios();
    const ls = useLocalStorage();
    let user = ls.getUser();

    function addItemToCart() {
        if (user) {
            http.addItemToCart(user.id, id, price)
                .then(results => {
                    console.log(results);
                    // maybe make a little toast message or something
                })
                .catch(error => {
                    console.log(error.response)
                });
        } else {
            console.log('no user')
        }
    }

    function requestUserLogin() {
        window.alert("Please Log In To Add Item to Cart")
    }



    return (
        <div className='product-card'>

            <img className='image' src={image} />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h4 className='brand'>{brand}</h4>
                <h4 className='price'>${price}</h4>
                <h4 className='description'>{description}</h4>

                <button
                    onClick={addItemToCart}
                    className='add-button'
                >
                    <span> Add to Cartasdsfgd</span>
                </button>
            </div>
        </div>
    )

}
