const db = require('../index');

exports.getRouteById = (req, res) => {

    let id = req.params.id
    console.log(id);
    const query = `
        SELECT * FROM urls.urls 
        WHERE id = ?;
    `;

    const placeholders = [id]

    db.query(query, placeholders, (err, results) => {
        console.log(results);
        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting url.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No url found :("
                })
        } else {
            // case #1
            res.send({
                url: results[0]
            });
        }
    });
}
exports.getAllUrls = (req, res) => {

    const query = `
        SELECT * FROM urls.urls 
       
    `;

    db.query(query, (err, results) => {
        console.log(results);
        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting urls.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No urls found :("
                })
        } else {
            // case #1
            res.send({
                urls: results
            });
        }
    });
}

exports.createNewRoute = (req, res) => {

    console.log("Test create new route function");

    let { id, url } = req.body;
    console.log(req.body)

    //user input wrong
    if (!url || !id) {
        res.status(400).send({ message: "input wrong" }
        );
        return
    }

    const query = `
        INSERT INTO urls.urls (id, url) 
        VALUES (?, ?);
    `
    const placeholders = [id, url]

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {
        // this code will execute when the DB responds
        // return the appropriate response to the client

        console.log(results);

        if (err) {
            res.status(500)
                .send({
                    message: "There was an error creating long url.",
                    error: err
                });
        } else {
            res.send({
                message: 'Your url was created sucessfully'
            });
        }
    });
}


exports.getUsersFavoritesList = (req, res) => {

    let userId = req.params.userId;

    // create an SQL script for the database (as a string)
    const query = `
        SELECT bookId as id, author, title,  coverImage 
            FROM books.list_items
            INNER JOIN books.books 
                ON books.list_items.bookId = books.id
            WHERE userId = ?;
    `;

    const placeholders = [userId];


    db.query(query, placeholders, (err, results) => {


        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting books.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No books found :("
                })
        } else {
            // case #1
            res.send({
                books: results
            });
        }
    });
}


exports.updateBook = (req, res) => {

    let { id, title, author, coverImage } = req.body;
    //if title, author or coverImage was not defined its an error e.g user input wrong
    if (!id || !title || !author || !coverImage) {
        res.status(400).send({ message: "could not create book, need id" }
        );
        return
    }
    id = Number(id);
    const query = `
    UPDATE books.books 
    SET 
        title = ?, 
        author =?,
        coverImage = ? 
        WHERE (id = ?)
`
    const placeholders = [title, author, coverImage, id]

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {
        // this code will execute when the DB responds
        // return the appropriate response to the client

        console.log(results);

        if (err) {
            res.status(500)
                .send({
                    message: "There was an error updating your book",
                    error: err
                });
        } else {
            res.send({
                message: 'Your book was updated sucessfully'
            });
        }
    });
}

exports.deleteBookById = (req, res) => {

    let { id } = req.params;
    //or let id= req.params.id

    const query = `
    DELETE FROM books.books WHERE (id = ?);
`
    const placeholders = [id];

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {
        // this code will execute when the DB responds
        // return the appropriate response to the client

        console.log(results);

        if (err) {
            res.status(500)
                .send({
                    message: "There was an error deleting your book",
                    error: err
                });
        } else if (results.affectedRows === 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No books deleted :("
                })
        }
        else {
            console.log(results);
            res.send({
                message: 'Your book was deleted sucessfully'
            });
        }
    });
}