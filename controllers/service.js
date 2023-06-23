const { request } = require('../app');
const serviceModel = require('../models/service-model')

module.exports.postProjectRequest = async (req, res) => {
    try {
        const { addedBy, requestType, appName, keyFunction, requirements, whatsapp, offer, uploadFileName } = req.body;
        if (!(addedBy && requestType && appName && keyFunction && requirements && whatsapp && offer)) return res.status(500).json({
            error: "Missing some input field",
            msg: "error"
        })
        const id = new Date().getTime()

        const request = new serviceModel({
            requestId: id,
            addedByEmail: addedBy,
            requestType: requestType,
            appName: appName,
            keyFunction: keyFunction,
            requirements: requirements,
            whatsapp: whatsapp,
            offer: offer,
            uploadedFileName: uploadFileName,
            accepted: {
                status: "pending",
                acceptedBy: "",
            }
        });

        request.save()
            .then(result => res.status(201).json({
                msg: "Requirement added Successfully",
                data: "success"
            }))
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: error,
                    msg: "error"
                })
            })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}

module.exports.postAssignmentRequest = async (req, res) => {
    try {
        const { addedBy, requestType, subject, question, comments, offer, uploadFileName } = req.body;
        if (!(addedBy && requestType && subject && question && comments && offer)) return res.status(500).json({
            error: "Missing some input field",
            msg: "error"
        })
        const id = new Date().getTime()

        const request = new serviceModel({
            requestId: id,
            addedByEmail: addedBy,
            requestType: requestType,
            subject: subject,
            question: question,
            comments: comments,
            offer: offer,
            uploadedFileName: uploadFileName,
            accepted: {
                status: "pending",
                acceptedBy: "",
            }
        });

        request.save()
            .then(result => res.status(201).json({
                msg: "Requirement added Successfully",
                data: "success"
            }))
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: error,
                    msg: "error"
                })
            })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}

module.exports.postRecordRequest = async (req, res) => {
    try {
        const { addedBy, requestType, subject, comments, offer, uploadFileName } = req.body;
        if (!(addedBy && requestType && subject && comments && offer)) return res.status(500).json({
            error: "Missing some input field",
            msg: "error"
        })
        const id = new Date().getTime()

        const request = new serviceModel({
            requestId: id,
            addedByEmail: addedBy,
            requestType: requestType,
            subject: subject,
            comments: comments,
            offer: offer,
            uploadedFileName: uploadFileName,
            accepted: {
                status: "pending",
                acceptedBy: "",
            }
        });

        request.save()
            .then(result => res.status(201).json({
                msg: "Requirement added Successfully",
                data: "success"
            }))
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: error,
                    msg: "error"
                })
            })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}

module.exports.getMyRequests = async (req, res) => {
    try {
        const { userEmail } = req.body;
        const requests = await serviceModel.find({
            addedByEmail: userEmail
        })

        return res.status(200).json({
            requests: requests
        })
    }
    catch {
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}

module.exports.getRequestById = async (req, res) => {
    try {
        const request = await serviceModel.find({
            requestId: req.body.requestId
        })

        console.log(request);
        return res.status(200).json({
            request: request[0]
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}

module.exports.deleteRequestById = async (req, res) => {
    try {
        const { requestId } = req.query

        var request = await serviceModel.findOneAndRemove({
            requestId: requestId
        })

        if (!request) return res.json({
            msg: "error",
            error: "no requirement found"
        })

        return res.status(200).send("success")
    }
    catch (error) {
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}