const express = require('express');
const router = express.Router();
const { signUp, logIn, logOut, whoami } = require("../controllers/auth");

router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.post("/logOut", logOut);
router.post("/whoami", whoami);

module.exports = router;