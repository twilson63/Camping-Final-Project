
// import React, { useState, useEffect, createContext } from 'react'
// import { useAxios } from '../services/axios.service'
// import { useLocalStorage } from '../services//localStorage.service'
// import { BrowserRouter } from 'react-router-dom';
// // import './NavBar/NavBar'
// import './ProductCard.css'
// import ProductCard from './ProductCard';
// import NavBar from './NavBar/NavBar';



// export const Context = createContext();


// function Tents() {


//     const [tents, setTents] = useState([])
//     const ls = useLocalStorage();
//     let user = ls.getUser();
//     // use params ???

//     const http = useAxios();

//     function getProductByCategoryTents() {
//         http.getProductByCategoryTents()
//             .then(res => {
//                 console.log(res.data.tents)
//                 setTents(res.data.tents);
//             })
//             .catch(err => {
//                 console.error(err)
//             });
//     }

//     useEffect(() => {
//         getProductByCategoryTents();
//     }, [])

//     return (

//         <div className="tents">
//             <h1 className='header'>"Let's Go Camping!!!!!!</h1>

//             <div className='products-container'>

//                 {tents.map(tent => <ProductCard key={tent.id} {...tent} />)}
//             </div>

//             {/* array.map data => cards */}
//         </div>



//     );
// }

// export default Tents;
