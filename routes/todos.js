const express = require('express')

const todoController = require('../controllers/todo.controller')

const router = express.Router()

router.get('/', todoController.getAll)
router.post('/add',todoController.addTodo)
router.put('/update', todoController.updateTodo)
router.delete('/delete', todoController.deleteTodo)

module.exports = router
