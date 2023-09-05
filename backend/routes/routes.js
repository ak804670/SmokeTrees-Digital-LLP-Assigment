const express = require('express')
const router = express.Router()
const {register, getFavorite} = require('../controllers/reginsterController.js')


router.post('/register',register)



module.exports = router