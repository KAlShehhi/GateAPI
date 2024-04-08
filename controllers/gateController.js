// Importing necessary modules
const axios = require('axios');
const asyncHandler = require('express-async-handler');

// @desc    User enters
// @route   POST /entry/
// @access  PUBLIC
const entry = asyncHandler(async (req, res) => {
    const {userID, gymID } = req.body;
    try {
        const response = await axios.get(`http://192.168.0.100:3000/api/gate/entry/${gymID}/${userID}`);
        if (response.status === 200) {
            return res.status(200).json({
                msg: 'Entry successful',
            });
        }
        return res.status(401).json({
            msg: 'Access Denied',
            error: error.message 
        });
    } catch (error) {
        return res.status(401).json({
            msg: 'Access Denied',
         
        });
    }
});

// @desc    user exit
// @route   POST /exit
// @access  PUBLIC
const exit = asyncHandler(async (req, res) => {
    res.status(401).send('Access Denied');
    //TODO
});

module.exports = {entry, exit}