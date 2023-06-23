const { catchAsyncError } = require('../middleware/catchAsyncError');
const ErrorHandler = require('../middleware/errorHandlers');
const userModel = require('../models/user-model');

module.exports.getMyProfile = catchAsyncError(async (req, res, next) => {
    const { email } = req;

    if (!email) {
        return next(new ErrorHandler("Application id not valid", 400));
    }

    var user = await userModel.findOne({ 
        email: email 
    });
    
    delete user.password;

    res.json({
        code: 200,
        message: 'Profile found',
        user: user,
    });
});