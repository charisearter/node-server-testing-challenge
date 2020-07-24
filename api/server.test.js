const express = require("express");
const server = require("./server.js");

const request = require("supertest");

//const jest = require('jest');

describe("Test api", () => {
	it("posts new project", async () => {
		const res = await request(server)
			.post("/api/projects")
			.send({ name: "test" });
		expect(res.status).toBe(404);
	});

	it("delete project", async () => {
		//const { id } = req.params.id
    const res = await request(server)
    .delete("/1")
    //.send({ id: 1 });
    const response= []
    expect(res.status).toBe(404);
   
	});
});

// test('delete person', () => {
//   db.serialize(async () => {
//       seedDb(db);
//       const res = await request(app).delete('/1');
//       const response = [];
//       expect(res.status).toBe(200);
//       expect(res.body).toEqual(response);
//   })