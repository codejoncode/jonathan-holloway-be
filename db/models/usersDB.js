const db = require('../../dbCongig');

const getUsers = () => {
    return db('users');
}

const getUserByUsername = (username) => {
    return db('users')
    .where({username})
}

const registerUser = (user) => {
    return db('users').insert(user)
    .returning(['id', 'username', 'password']);
    //return getUsers(); // delete this after tested
}


module.exports = {
    getUsers,
    getUserByUsername,
    registerUser,
}