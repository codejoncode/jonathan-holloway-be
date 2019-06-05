const db = require('../../dbCongig');

const getBlogPosts = () => {
    return db('blogs');

}

module.exports = {
    getBlogPosts, 
}