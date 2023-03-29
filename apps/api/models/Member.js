const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  memberName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Member', MemberSchema)
