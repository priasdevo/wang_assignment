const express = require('express')
const { createMember, getMember } = require('../controllers/members')

const router = express.Router()

router.route('/').post(createMember).get(getMember)

module.exports = router
