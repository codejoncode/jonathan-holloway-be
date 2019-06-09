const db = require("../../dbCongig");

/*So each  method will return the posts because I want to update the state on the frontend with the most current information */
const getBlogPosts = () => {
  return db("blogs").orderBy("id", "desc");
};
const getBlogById = (id) => {
  return db("blogs")
    .where({id})
}

const addBlogPost = async blog => {
  await db("blogs").insert(blog);
  return getBlogPosts();
};

const editBlogPost = async (changes, id) => {
  await db("blogs")
    .update(changes)
    .where({ id });
  return getBlogPosts();
};

const deleteBlogPost = async id => {
  await db("blogs")
    .where({ id })
    .del();
  return getBlogPosts();
};

module.exports = {
  getBlogPosts,
  addBlogPost,
  editBlogPost,
  deleteBlogPost,
  getBlogById,
};
