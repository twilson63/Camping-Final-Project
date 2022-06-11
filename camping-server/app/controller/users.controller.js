const db = require('../index');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid')


// exports.getUserById = (req, res) => {
//     res.send('Method not implemented');
// }

exports.login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send({ message: 'could not login email and/or password incorrect' })
    }

    const query = `SELECT * FROM users
    WHERE email =?;
    `;

    const placeholders = [email];

    db.query(query, placeholders, async (err, results) => {
        // this code will execute when the DB responds
        // return the appropriate response to the client

        // 3 possible cases
        // 1 - success
        // 2 - nothing found
        // 3 - whole error

        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error logging in. please try again",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "email was incorrect."
                })
        } else {

            let encryptedPassword = results[0].password;
            const passwordMatched = await bcrypt.compare(password, results[0].password)
            if (passwordMatched) {
                //suucessful login

                let user = results[0];

                const token = jwt.sign(

                    {
                        userId: user.id,
                        email: s = user.email
                    },

                    "abc123",

                    {
                        expiresIn: '2h'
                    }
                );
                user.token = token;

                res.send({
                    message: "You've succesfully logged in",
                    user
                });

            } else {
                res.status(404).send({ message: `email or password incorrect` })
            }


        }
    });










}

exports.createNewUser = async (req, res) => {
    //async lets the await finish below before code moves on, async/await are needed friends
    let { email, password } = req.body;

    if (!email || !password) {
        //client error
        res.status(400).send({ message: "email and/or password not received" }
        );
        return;
    }
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const query = `
        INSERT INTO users (id, email, password) 
            VALUES(?,?,?);
    `;
    const placeholders = [uuid(), email, encryptedPassword];

    db.query(query, placeholders, (err, results) => {

        if (err) {
            if (err.errno === 1062) {

                res.status(400).send({
                    error: err,
                    message: 'That email already exists',
                })

            } else {

                //TODO
                res.status(500)({
                    error: err,
                    message: 'there was an eror creating a new user'
                })
            }

        }
        else {
            //success -  should i send a res.send message here?;
            this.login(req, res)
        }

    });

    // should i send a res.send message here?;
}

// res.send('Method not i

exports.deleteUserById = (req, res) => {

    let { id } = req.params;
    //or let id= req.params.id

    const query = `
    DELETE FROM users WHERE (id = ?);
    `
    const placeholders = [id]; //stops injection attack

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {
        // this code will execute when the DB responds
        // return the appropriate response to the client

        console.log(results);

        if (err) {
            res.status(500)
                .send({
                    message: "There was an error deleting your account",
                    error: err
                });
        } else if (results.affectedRows === 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No account deleted :("
                })
        }
        else {
            console.log(results);
            res.send({
                message: 'Your account was deleted sucessfully'
            });
        }
    });
}

