
const { Router } = require('express')
const { login } = require('../controller/login')
const { signup } = require('../controller/signup')
const { verify } = require('../controller/verify')
const uploadVideo = require('../controller/videoupload')
const router = Router()

router.post('/login', login)
router.get('/verify', verify)
router.post('/sign-up', signup)
router.post('/upload-video', uploadVideo)

router.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: "login Success"
    })
})

module.exports = router