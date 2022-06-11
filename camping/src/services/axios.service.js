const axios = require('axios');
const URL = `http://localhost:8080/api`



function getProductById(id) {
    return axios.get(`${URL}/camping/products/${id}`);
}

function getAllProducts() {
    return axios.get(`${URL}/camping/products`)
}
function getProductByCategoryTents() {
    return axios.get(`${URL}/camping/products/category/tents`)
}
function getProductByCategory(category) {
    return axios.get(`${URL}/camping/products/category/${category}`)
}



// cart/transaction specific service functions
function addItemToCart(userId, itemId, itemPrice) {
    return axios.post(`${URL}/carts`, { userId, itemId, itemPrice });
}
function getUserShoppingCartById(customerId) {
    return axios.get(`${URL}/carts/${customerId}`);
}




function createNewUser(user) {
    return axios.post(`${URL}/users`, user);
}
function login(user) {
    return axios.post(`${URL}/users/login`, user);
}


function decreaseQtyInCart(itemId, userId) {
    return axios.put(`${URL}/carts/decrease`, { itemId, userId })
}

function increaseQtyInCart(itemId, userId) {
    return axios.put(`${URL}/carts/increase`, { itemId, userId })
}


const api = {

    getProductById,
    getAllProducts,
    getProductByCategoryTents,
    getProductByCategory,
    addItemToCart,
    getUserShoppingCartById,
    createNewUser,
    login,
    decreaseQtyInCart,
    increaseQtyInCart
    // deleteAccount,


}

function useAxios() {

    return api;

}
export { useAxios };