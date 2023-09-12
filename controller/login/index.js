const userModle = require('../../module/')

const jwt = require('jsonwebtoken')
module.exports.login = async (req, res) => {
    const { password, username } = req.body
    try {
        const isExist = await userModle.findOne({ username, password })
        if (!isExist) {
            throw new Error('Invalid username or password')
        }
        const token = jwt.sign({ username: isExist?.username }, 'alskdjflaksf')
        res.status(200).json({
            token,
            message: 'login Success'
        })

    } catch (error) {
        res.status(409).json({
            status: false,
            message: error?.message
        })
    }
}