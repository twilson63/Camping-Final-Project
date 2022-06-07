module.exports = (app) => {

    const transactions = require('../controller/transactions.controller');


    app.post('/api/transactions', transactions.createTransaction);


    app.get('/api/transactions/:transactionId/items', transactions.getItemsPurchasedByTransactionId);


    app.get('/api/transactions/:tranId', transactions.getTransactionById);

    app.get('/api/transactions/user/:userId', transactions.getAllTransactionsByUserId);


}
