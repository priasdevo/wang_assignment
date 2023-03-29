const Task = require('../models/Task')

// @desc      Create a new task
// @route     POST /api/v1/tasks
// @access    Private
exports.createTask = async (req, res, next) => {
  try {

    const newTask = await Task.create(req.body)

    res.status(201).json({
      success: true,
      data: newTask,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ success: false })
  }
}

// @desc      Get filtered task list with pagination
// @route     GET /api/v1/tasks
// @access    Private
exports.getTaskList = async (req, res, next) => {
  try {
    const { taskName, volunteer, taskType, taskStatus, page, limit } = req.query

    let filter = {}

    if (taskName) {
      filter.taskName = { $regex: taskName, $options: 'i' }
    }
    if (volunteer) {
      filter.volunteer = volunteer
    }
    if (taskType) {
      filter.taskType = taskType
    }
    if (taskStatus) {
      filter.taskStatus = taskStatus
    }

    const pageNumber = parseInt(page, 10) || 1
    const pageSize = parseInt(limit, 10) || 10
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = pageNumber * pageSize

    const totalTasks = await Task.countDocuments(filter)
    const tasks = await Task.find(filter)
      .select(
        'taskId taskName taskDescription taskType taskStatus expectedDeadline volunteer estimatedManHour remainingManHour',
      )
      .skip(startIndex)
      .limit(pageSize)

    const maxPage = Math.ceil(totalTasks / pageSize)

    res.status(200).json({
      success: true,
      maxPage,
      data: tasks,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ success: false })
  }
}

// @desc      Get a specific task with all details
// @route     GET /api/v1/tasks/:taskId
// @access    Private
exports.getTaskById = async (req, res, next) => {
  try {
    const taskId = req.params.taskId
    const task = await Task.findOne({ taskId: taskId })

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      })
    }

    res.status(200).json({
      success: true,
      data: task,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ success: false })
  }
}

// @desc      Update a task's remainingManHour and volunteer fields
// @route     PUT /api/v1/tasks/:taskId
// @access    Private
exports.updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.taskId
    const task = await Task.findOne({ taskId: taskId })

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      })
    }

    // Update remainingManHour and volunteer fields
    task.remainingManHour = req.body.remainingManHour
    task.volunteer = req.body.volunteer

    // Save the updated task
    await task.save()

    res.status(200).json({
      success: true,
      data: task,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ success: false })
  }
}
