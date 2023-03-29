const express = require('express')
const { createTask, getTaskById, getTaskList, updateTask } = require('../controllers/tasks')

const router = express.Router()

router.route('/').post(createTask).get(getTaskList)
router.route('/:taskId').get(getTaskById).put(updateTask)

module.exports = router
