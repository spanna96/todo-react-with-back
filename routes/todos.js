
const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController')

router.get('/get-todos', controller.getController)
router.post('/add-todo', controller.addComtroller)
router.delete('/delete-todo',controller.deleteController)
router.put('/update-todo',controller.updateController)


module.exports = router