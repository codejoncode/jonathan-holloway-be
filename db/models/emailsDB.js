const db = require('../../dbCongig');


const getEmails = () => {
    return db("emails");
}

const postEmail = async (email, message, company, name) => {
  
}

const deleteEmail = () => {

}

module.exports = {
    getEmails, 
    deleteEmail,
    postEmail
}