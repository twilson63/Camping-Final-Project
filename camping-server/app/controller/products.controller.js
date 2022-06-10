const db = require('../index');

exports.getProductById = (req, res) => {

    let { id } = req.params;

    // let id = req.params.id
    console.log(id);
    const query = `
        SELECT * FROM camping.products
        WHERE id = ?;
    `;

    const placeholders = [id]

    db.query(query, placeholders, (err, results) => {
        // console.log(results);
        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting product.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No product found :("
                })
        } else {
            // case #1
            res.send({
                product: results[0]
            });
        }
    });
}

exports.getAllProducts = (req, res) => {

    let categoryItems = req.params.categoryItems;

    const query = `
        SELECT * FROM camping.products 
       
    `;

    const placeholders = [categoryItems];


    db.query(query, placeholders, (err, results) => {
        console.log(results);
        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting products.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No products found :("
                })
        } else {
            // case #1
            res.send({
                products: results
            });
        }
    });
}
exports.getProductByCategoryTents = (req, res) => {

    let categoryItems = req.params.categoryItems;

    // create an SQL script for the database (as a string)


    const query = `
        SELECT * FROM products
        WHERE category = 'tent';
    `;

    const placeholders = [categoryItems];

    db.query(query, placeholders, (err, results) => {


        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting tents.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No tents found :("
                })
        } else {
            // case #1
            res.send({
                tents: results
            });
        }
    });
}
exports.getProductByCategorySleepingBags = (req, res) => {

    let categoryItems = req.params.categoryItems;

    // create an SQL script for the database (as a string)


    const query = `
        SELECT * FROM products
        WHERE category = 'sleeping-bag';
    `;

    const placeholders = [categoryItems];

    db.query(query, placeholders, (err, results) => {


        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting sleeping-bags.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No sleeping-bags found :("
                })
        } else {
            // case #1
            res.send({
                sleepingbags: results
            });
        }
    });
}
exports.getProductByCategoryBackPacks = (req, res) => {

    let categoryItems = req.params.categoryItems;

    // create an SQL script for the database (as a string)


    const query = `
        SELECT * FROM products
        WHERE category = 'backpack';
    `;

    const placeholders = [categoryItems];

    db.query(query, placeholders, (err, results) => {


        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting backpacks.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No backpacks found :("
                })
        } else {
            // case #1
            res.send({
                backpacks: results
            });
        }
    });
}
exports.getProductByCategoryAccesories = (req, res) => {

    let categoryItems = req.params.categoryItems;

    // create an SQL script for the database (as a string)


    const query = `
        SELECT * FROM products
        WHERE category = 'accesories';
    `;

    const placeholders = [categoryItems];

    db.query(query, placeholders, (err, results) => {


        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting accessories.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No accessories found :("
                })
        } else {
            // case #1
            res.send({
                accessories: results
            });
        }
    });
}

exports.getProductByCategory = (req, res) => {

    let category = req.params.category;

    // create an SQL script for the database (as a string)


    const query = `
        SELECT * FROM products
        WHERE category = ?;
    `;

    const placeholders = [category];

    db.query(query, placeholders, (err, results) => {


        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting " `${category}`,
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No accessories found :("
                })
        } else {
            // case #1
            res.send({
                products: results
            });
        }
    });
}




