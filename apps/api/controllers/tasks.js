const Task = require('../models/Task')
const Member = require('../models/Member');

// @desc      Create a new task
// @route     POST /tasks
// @access    Private
exports.createTask = async (req, res, next) => {
  try {

    const member = await Member.findOne({ memberName: req.body.volunteer });
    if (!member) {
      return res.status(400).json({
        success: false,
        message: 'Volunteer does not exist',
      });
    }

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
// @route     GET /tasks
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
// @route     GET /tasks/:taskId
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
// @route     PUT /tasks/:taskId
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
    task.taskStatus = req.body.taskStatus

    // Check if the volunteer exists in the Member collection
    const member = await Member.findOne({ memberName: task.volunteer });
    if (!member) {
      return res.status(400).json({
        success: false,
        message: 'Volunteer does not exist',
      });
    }

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


// @desc Delete a task
// @route DELETE /tasks/:taskId
// @access Private
exports.deleteTask = async (req, res, next) => {
  try {
  const taskId = req.params.taskId;
  const task = await Task.findOne({ taskId: taskId });
  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }
  
  await task.remove();
  
  res.status(200).json({
    success: true,
    message: 'Task deleted successfully',
  });
} catch (err) {
  console.error(err);
  res.status(400).json({ success: false });
  }
  };  