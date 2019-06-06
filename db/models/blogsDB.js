const db = require('../../dbCongig');

const getBlogPosts = () => {
    return db('blogs');

}

const addBlogPost = async (blog) => {
    await db('blogs').insert(blog);
    return getBlogPosts();

}

const editBlogPost = async (changes, id) => {
    await db('blogs')
     .update(changes)
     .where({ id })
     return getBlogPosts(); 
}

const deleteBlogPost = () => {

}

module.exports = {
    getBlogPosts, 
    addBlogPost, 
    editBlogPost,
    deleteBlogPost,
}