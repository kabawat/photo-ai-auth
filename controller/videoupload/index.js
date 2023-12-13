const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const os = require('os');
const path = require('path');

cloudinary.config({
    cloud_name: 'de3dxdm76',
    api_key: '657322833272947',
    api_secret: 'V49t8W81zXOU946mYttXPLQH1n0',
});
async function Template(req, res) {
    try {
        console.log(req.files.video)
        console.log(req.body)
        const file = req.files.video;
        if (!file) {
            return res.status(400).json({ error: 'Invalid input data' });
        }

        // Create a temporary file to store the Buffer data
        const tempFilePath = path.join(os.tmpdir(), 'temp_image.mp4');
        fs.writeFileSync(tempFilePath, file.data);

        const templateResult = await cloudinary.uploader.upload(tempFilePath);

        fs.unlinkSync(tempFilePath);
        res.status(200).json({
            status: true,
            template: templateResult?.secure_url,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: false,
            error: error?.message,
        });
    }
}

module.exports = Template;
