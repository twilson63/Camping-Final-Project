module.exports = (app) => {

    const products = require('../controller/products.controller');


    app.get('/api/camping/products/:id', products.getProductById);
    app.get('/api/camping/products/', products.getAllProducts);
    app.get('/api/camping/products/category/tents', products.getProductByCategoryTents);
    app.get('/api/camping/products/category/sleepingbags', products.getProductByCategorySleepingBags);
    app.get('/api/camping/products/category/backpacks', products.getProductByCategoryBackPacks);
    app.get('/api/camping/products/category/accesories', products.getProductByCategoryAccesories);






}