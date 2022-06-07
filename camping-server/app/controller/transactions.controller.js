
const db = require('../index');
const { v4: uuid } = require('uuid')



/**
 * Checkout
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.createTransaction = (req, res) => {

    let { userId, total, products } = req.body;
    console.log(products);

    // If the title, author, or coverImage was not defined -> ERROR
    if (!userId || !total || !products) {
        res.status(400)
            .send({
                message: "Could not create transaction. You must provide a 'customer_id', 'total', and 'products'."
            });
        return;
    }

    const transactionId = uuid();
    const query = `
            INSERT INTO transactions (id, customer_id, total) 
            VALUES 
                (?, ?, ?);
    `;
    const placeholders = [transactionId, userId, total];

    db.query(query, placeholders, (err, results) => {

        if (err) {
            res.status(500)
                .send({
                    message: "There was an error creating transaction.",
                    error: err
                });
        } else {

            putItemsInDb(products, transactionId, res);
            // also remove all items from cart
            removeItemsFromUsersCart(userId);
        }
    });

}

function putItemsInDb(products, transactionId, res) {
    // transaction created
    //      now post all items into the purchased_items table

    let values = products.map(i => '(uuid(), ?, ?, ?, ?)').join(',');

    const query = `
        INSERT INTO purchased_items
            (id, product_id, quantity, transaction_id, total)
            VALUES 
                ${values}
            ;
    `;
    var placeholders = [];

    // push values into placeholders
    for (let product of products) {
        placeholders.push(product.id, product.quantity, transactionId, product.price)
    }

    db.query(query, placeholders, (err, results) => {
        console.log('inserting items request done')
        if (err) {
            console.log('inserting items request: error', err)

            const query = `
                DELETE FROM camping.transactions
                    WHERE transaction_id = ?;
            `;

            db.query(query, (err, results) => {
                if (err) {
                    res.status(500).send({
                        message: 'there was an error deleting transaction'
                    });
                } else {
                    res.send({
                        message: 'transaction deleted'
                    });
                }
            });

        } else {
            // SUCCESS
            res.send({
                message: 'your purchase was successfull.',
                transactionId
            });
        }
    });
}

function removeItemsFromUsersCart(userId) {

    const query = `
        DELETE FROM cart_items
        WHERE customer_id = ?;
    `;
    const placeholders = [userId];

    db.query(query, placeholders, (err, results) => {
        return;
    });
}


exports.getItemsPurchasedByTransactionId = (req, res) => {

    let tranId = req.params.transactionId;

    const query = `
        SELECT products.id, products.name, products.brand, products.color, 
            products.image, transactions.total, purchased_items.quantity
            FROM transactions 
            
            INNER JOIN purchased_items
                ON purchased_items.transaction_id = transactions.id
            INNER JOIN products
                ON products.id = purchased_items.product_id
                
            WHERE transactions.id = ?;
              
    `;
    const placeholders = [tranId];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({
                    message: "There was an error getting transactions.",
                    error: err
                })
        } else if (results.length == 0) {
            res.status(404)
                .send({
                    message: "no transactions found"
                })
        } else {
            res.send({
                items: results
            });
        }
    });
}
exports.getTransactionById = (req, res) => {

    let tranId = req.params.tranId;

    const query = `
        SELECT * FROM camping.transactions
            WHERE id = ?;       
    `;
    const placeholders = [tranId];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({
                    message: "There was an error getting transaction.",
                    error: err
                })
        } else if (results.length == 0) {
            res.status(404)
                .send({
                    message: "no transactions found"
                })
        } else {
            res.send({
                transaction: results[0]
            });
        }
    });
}
exports.getAllTransactionsByUserId = (req, res) => {

    let userId = req.params.userId;

    const query = `
        SELECT * FROM camping.transactions 
            WHERE customer_id= ?;
    `;
    const placeholders = [userId];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({
                    message: "There was an error getting transactions.",
                    error: err
                })
        } else if (results.length == 0) {
            res.status(404)
                .send({
                    message: "no transactions found"
                })
        } else {
            res.send({
                transactions: results
            });
        }
    });
}
