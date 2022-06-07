const axios = require('axios');
const URL = `http://localhost:8080/api`



function getProductById(id) {
    return axios.get(`${URL}/camping/products/${id}`);
}

function getAllProducts() {
    return axios.get(`${URL}/camping/products`)
}



// function createNewRoute(url, id) {
//     return axios.post(`${URL}/urls`, {
//         url, id
//         // url: url,

//         // id: id
//     })

// }


// function getUsersReadingList(userId) {
//     return axios.get(`${URL}/users/${userId}/favorites`)
// }



// function updateBook(updatedBook) {
//     return axios.put(`${URL}/books`, updatedBook)

// }

// function deleteBook(bookId) {
//     return axios.delete(`${URL}/books/${bookId}`)
// }

// function login(username, password) {
//     return axios.post(`${URL}/users/login`, { username, password });
// }

// /**
//  * sends a POST request to API t create a new user
//  * @param {{username:string, password: string}} user 
//  * @returns 
//  */
// //user is an object
// function createNewUser(user) {
//     return axios.post(`${URL}/users`, user);
// }
// //userId is a string
// function setFavoriteBook(bookId, userId) {
//     return axios.put(`${URL}/users/favorite/${bookId}`, { id: userId });
// }

// function getAllListsBookIsInByBookId(bookId) {
//     return axios.get(`${URL}/books/${bookId}/lists`);
// }

// function deleteAccount(userId) {

//     return axios.delete(`${URL}/users/${userId}`)
// }

// function addBookToReadingList(book, user) {

//     return axios.post(`${URL}/users/list`, { bookId: book.id, userId: user.id })
// }

const api = {

    getProductById,
    getAllProducts

    // getAllBooks,
    // getUsersReadingList,
    // createNewBook,
    // updateBook,
    // deleteBook,
    // login,
    // createNewUser,
    // setFavoriteBook,
    // getAllListsBookIsInByBookId,
    // deleteAccount,
    // addBookToReadingList

}

function useAxios() {

    return api;

}
export { useAxios };