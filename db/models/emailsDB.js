const db = require('../../dbCongig');

const getEmails = () => {
    return db("emails");
}

const postEmail = () => {

}

const deleteEmail = () => {

}

module.exports = {
    getEmails, 
    deleteEmail,
    postEmail
}