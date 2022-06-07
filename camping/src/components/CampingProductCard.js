import React, { useState, useEffect } from 'react'
import { useAxios } from '../services/axios.service'



export default function Camping(id) {

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

    // http.getAllProducts().then(res => {
    //     // URL shortened successfully
    //     console.log(res);

    // }).catch((err) => {
    //     let errno = err?.response?.data?.error?.errno;
    //     console.log("here1!!!")

    //     if (errno == 1062) {
    //         console.log("here2!!!")
    //         // setIsInvalid(true)
    //     }
    //     // console.log(err?.esponse?.data?.error?.errno);

    // })

    // http.getProductById('04944926-d854-11ec-902c-ef6a451bb744')
    //     .then(res => {
    //         // URL shortened successfully
    //         console.log(res);

    //     }).catch((err) => {
    //         let errno = err?.response?.data?.error?.errno;
    //         console.log("here1!!!")

    //         if (errno == 1062) {
    //             console.log("here2!!!")
    //             // setIsInvalid(true)
    //         }
    //         // console.log(err?.esponse?.data?.error?.errno);

    //     })


    return (
        <div>
            <h1>Products</h1>

            <>
                {products.map(({ id, brand, name, category, size }) => (
                    <p key={id}>  Product Info = {brand} {category} in a {size} size. and Id: {id}</p>
                ))}
            </>

        </div>
    )
}
