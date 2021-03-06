const usersRouter = require('./UsersRouter.js');
const emailsRouter = require('./EmailsRouter.js');
const blogsRouter = require('./BlogsRouter.js');
const authRouter = require('./AuthRouter.js');
const projectsRouter = require('./ProjectsRouter.js');
const lecturesRouter = require("./LecturesRouter.js");

module.exports = {
    usersRouter, 
    emailsRouter, 
    blogsRouter, 
    authRouter,
    projectsRouter,
    lecturesRouter,
};