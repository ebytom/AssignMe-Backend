const express = require('express');
const router = express.Router();
const { getMyRequests, getRequestById, deleteRequestById, postProjectRequest, postAssignmentRequest, postRecordRequest } = require('../controllers/service');

router.post("/postProjectRequest", postProjectRequest);
router.post("/postAssignmentRequest", postAssignmentRequest);
router.post("/postRecordRequest", postRecordRequest);

router.post("/getMyRequests", getMyRequests);
router.post("/getRequestById", getRequestById);
router.delete("/deleteRequestById", deleteRequestById);

module.exports = router;