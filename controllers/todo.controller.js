const Todo = require('../models/Todo')
const mongoose = require('mongoose');


function getAll(req, res) {
  Todo.find()
    .exec((err, todos) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(todos)
    })
}

function updateTodo(req, res) {
  console.log(req.body)
  let id = req.body.id
  let newValue = req.body.value
  let newDone= Boolean(req.body.done) 
  Todo.findById(id,(err, todo)=>{
    if (err) {
      res.status(500)
      res.send(`Cannot find Todo id ${err}`)
    }
    todo.value = newValue;
    todo.done = newDone;
    
    todo.save(function(err, todos){
      if(err){
        res.status(500)
        res.send(`Cannot update Todo ${err}`)
      }
      res.status(200);
      console.log(todos)
      res.json(todos)
    })
  })
}

function deleteTodo(req, res){
  let id = mongoose.Types.ObjectId(req.body.id)
  Todo.deleteOne({ "_id" : id }, (err, todos) =>{
    if(err){
      res.status(500)
      res.send(`Cannot delete Todo ${err}`)
    }
    res.status(200);
    res.json(todos)
  })
}

function addTodo(req, res){
  let item = req.body
  console.log(item)
  let newItem = new Todo({
    value: item.value,
    done: item.done
  })
  newItem.save((err, todos) => {
    if(err){
      res.status(500)
      res.send(`Cannot insert Todo ${err}`)
    }
    res.status(200);
    res.json(todos)
  })
}

module.exports = {
  getAll,
  updateTodo,
  deleteTodo,
  addTodo
}

