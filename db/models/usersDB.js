const db = require('../../dbCongig');

const getUsers = () => {
    return db('users');
}

const getUserByUsername = (username) => {
    return db('users')
    .where({username})
}


module.exports = {
    getUsers,
    getUserByUsername,
}