const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  epicId: {
    type: Number,
    required: true,
  },
  sprintId: {
    type: Number,
    required: true,
  },
  taskId: {
    type: Number,
    required: true,
    unique: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  taskType: {
    type: String,
    required: true,
  },
  taskStatus: {
    type: String,
    required: true,
  },
  expectedDeadline: {
    type: Date,
    required: true,
  },
  userStory: {
    type: String,
    required: true,
  },
  userStoryId: {
    type: Number,
    required: true,
  },
  volunteer: {
    type: String,
    required: true,
  },
  estimatedManHour: {
    type: Number,
    required: true,
  },
  remainingManHour: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
