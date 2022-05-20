
module.exports = (app) => {

    const users = require('../controller/users.controller');


    app.post('/api/users', users.createNewUser);
    app.post('/api/users/login', users.login);
    // app.post('/api/users/list', users.addBookToUsersReadingList);


    // app.put('/api/users/favorite/:favoriteBookId', users.updateFavoriteBookById);

    app.delete('/api/users/:id', users.deleteUserById);

}