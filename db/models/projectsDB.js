const db = require('../../dbCongig');

const getProjects = () => {
    return db('projects')
}

const getProjectById = (id) => {
    return db('projects')
      .where({id})
}

const addProject = async (project) => {
    await db("projects").insert(project);
    return getProjects();
}

const editProject = async (changes, id) => {
    await db("projects")
    .update(changes)
    .where({id});
    return getProjects();
}

const deleteProject = async id => {
    await db("projects")
    .where({ id})
    .del();
    return getProjects();
}

module.exports = {
    getProjects, 
    getProjectById, 
    addProject,
    editProject,
    deleteProject, 
}

