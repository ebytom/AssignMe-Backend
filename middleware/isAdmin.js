const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    const beare = req.headers.authorization
    if(!beare){
        return next(new ErrorHandler("Beare header not valid", 402));
    }

    const token = beare.split(' ')[1]
    if (!token){
        return next(new ErrorHandler("Token not found", 402));
    }

    const decodedToken = jwt.verify(token, process.env.SECRETKEY)

    if(!decodedToken){
        return next(new ErrorHandler("Token not valid", 402));
    }

    if(!decodedToken.isAdmin){
        return next(new ErrorHandler("Admin status not found", 401));
    }

    next()
}