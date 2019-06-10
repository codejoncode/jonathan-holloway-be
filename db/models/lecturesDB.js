const db = require("../../dbCongig");

const getLectures = () => {
    return db('lectures')
}

const getLectureById = (id) => {
    return db('lectures')
      .where({id})
}

const addLecture = async (lecture) => {
    await db("lectures").insert(lecture);
    return getLectures();
}

const editLecture = async (changes, id) => {
    await db("lectures")
    .update(changes)
    .where({id});
    return getLectures();
}

const deleteLecture = async id => {
    await db("lectures")
    .where({ id})
    .del();
    return getLectures();
}

module.exports = {
    getLectures, 
    getLectureById, 
    addLecture,
    editLecture,
    deleteLecture,
}