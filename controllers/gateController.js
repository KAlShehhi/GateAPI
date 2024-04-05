const asyncHandler = require('express-async-handler');
const axios = require('axios');

// @desc    user enter
// @route   GET /entry/:id/:gymID
// @access  PUBLIC
const entry = asyncHandler(async (req, res) => {
    try {
        const {gymID, userID} = req.params;
        const response = await axios.get(`https://gymhub.up.railway.app/api/gate/entry/${gymID}/${userID}`);
        if (response.status === 201) {
            return res.status(201).json({
                msg: 'Entry permitted'
            });
        } else {
            return res.status(400).json({
                msg: 'Entry denied'
            });
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error making request to the gate check API:', error);

        // Return a 400 status code if there's an error in the try block
        return res.status(400).json({
            msg: 'Server error: creating class'
        });
    }
});

// @desc    user exit
// @route   GET /entry/:id/:gymID
// @access  PUBLIC
const exit = asyncHandler(async (req, res) => {
    try{
        return res.status(200).json({
            msg: 'Done'
        });
    }catch{
        return res.status(400).json({
            msg: 'Server error:  creating class'
        })
    }
});

module.exports = {entry, exit}