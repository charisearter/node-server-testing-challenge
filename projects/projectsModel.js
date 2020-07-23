const db = require("../data/dbConfig.js");

module.exports = {
    insert,
    remove,
    getAll,
};

function getAll() {
  return db("projects");
}
async function insert(project) {
    return db("projects").insert(project, "id");
}

function remove(id) {
    return null;
}

