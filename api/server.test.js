const express = require("express");
const server = require('./server.js');

const request = require('supertest');


//const jest = require('jest');


describe('POST test', async () => {
  it('posts new project',() =>{
    const res =  await server.post("/projects").send({ name: "testing" })
    expect(res.status).toBe(200)
  });
});

describe('DELETE', async () => {
  it('delete project', () => {
    //const { id } = req.params.id
    const res = await server.del('/projects/:id').send({ id: 1 })
    expect(res.status).toBe(204)
  })
})