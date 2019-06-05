const db = require('../../dbCongig');

const getEmails = () => {
    return db("emails");
}

module.exports = {
    getEmails, 
}