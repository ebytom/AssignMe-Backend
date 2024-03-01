const express = require('express');
const router = express.Router();
const { getMyRequests, getRequestById, deleteRequestById, postProjectRequest, postAssignmentRequest, postRecordRequest, getAllRequestsByType, getAcceptedRequests, acceptRequestById, completeRequestById, getUsers } = require('../controllers/service');

router.post("/postProjectRequest", postProjectRequest);
router.post("/postAssignmentRequest", postAssignmentRequest);
router.post("/postRecordRequest", postRecordRequest);

router.post("/getMyRequests", getMyRequests);

router.post("/getAllRequestsByType", getAllRequestsByType);
router.post("/getAcceptedRequests", getAcceptedRequests);
router.put("/acceptRequestById", acceptRequestById);
router.post("/completeRequestById", completeRequestById);

router.post("/getRequestById", getRequestById);
router.delete("/deleteRequestById", deleteRequestById);


router.get('/getUsers', getUsers);



module.exports = router;