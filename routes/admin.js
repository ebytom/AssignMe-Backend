const express = require('express');
const router = express.Router();
const { getOneUserByUsername, getAlluser, deleteOneUserByUsername } = require("../controllers/admin");

router.get('/getAlluser', getAlluser);
router.get('/getOneUserByUsername', getOneUserByUsername);
router.get('/deleteOneUserByUsername', deleteOneUserByUsername);

module.exports = router;