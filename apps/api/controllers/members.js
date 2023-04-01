const Member = require('../models/Member')

// @desc      Create a new member
// @route     POST /api/v1/member
// @access    Private
exports.createMember = async (req, res, next) => {
  try {

    const newMember = await Member.create(req.body)

    res.status(201).json({
      success: true,
      data: newMember,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ success: false })
  }
}

// @desc      Get all member
// @route     GET /api/v1/member
// @access    Private
exports.getMember = async (req, res, next) => {
  try {
    const members = await Member.find()
      .select(
        'memberName',
      )

    res.status(200).json({
      success: true,
      data: members,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ success: false })
  }
}
