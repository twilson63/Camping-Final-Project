module.exports = (app) => {

    const products = require('../controller/products.controller');


    app.get('/api/urls/:id', urls.getRouteById);

    app.get('/api/urls/', urls.getAllUrls);

    app.post('/api/urls', urls.createNewRoute);


    // app.get('/api/users/:userId/favorites', books.getUsersFavoritesList);



    // app.put('/api/books', books.updateBook);          
    // app.delete('/api/books/:id', books.deleteBookById);  
}