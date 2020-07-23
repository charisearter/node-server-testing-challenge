const db = require("../data/dbConfig.js");

module.exports = {
	insert,
	remove,
	getAll,
};

function getAll() {
	return db("projects");
}

//add project
async function insert(project) {
	return db("projects").insert(project, "id");
}

//remove project
function remove(id) {
	return db("projects").where("id", id).del();
}
