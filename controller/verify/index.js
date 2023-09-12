module.exports.verify = async (req, res) => {
    console.log('hello')
    console.log(req.headers)
    res.status(200).json({
        message: "verify success",
        status: true
    })
}