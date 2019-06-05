const db = require('../../dbCongig');

const getUsers = () => {
    return db('users');
}


module.exports = {
    getUsers,
}