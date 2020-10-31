const express = require('express');
const data = require('../data');
const api = express.Router();

api.get('/', (req, res) => {
  res.json(data);
});

// post (create)
api.post('/', (req, res) => {
  const newTask = req.body;
  const newData = [...data, newTask];
  res.send(newData);
});

// put (update)
api.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newData = data.map((item) => {
    if (item.id === id) {
      item.task = req.body.task;
    }
    return item;
  });
  res.json(newData);
});

// delete (delete)
api.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newData = data.filter((item) => item.id !== id);
  res.send(newData);
});

module.exports = api;
