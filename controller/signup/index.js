const userModle = require('../../module/')
module.exports.signup = async (req, res) => {
    const { password, username } = req.body
    try {
        if (!username || !password) {
            throw new Error('Invalid username or password')
        }
        const data = new userModle({
            username, password
        })
        const isSave = await data.save()
        if (!isSave) {
            throw new Error('something wrong')
        }
        res.status(200).json({
            message: 'success',
            status: true
        })
    } catch (error) {
        res.status(409).json({
            status: false,
            message: error?.message
        })
    }
}