const express = require('express');
const router = express.Router();
const { getMyProfile, getUsers } = require("../controllers/users");

router.post('/getMyProfile', getMyProfile);

module.exports = router;