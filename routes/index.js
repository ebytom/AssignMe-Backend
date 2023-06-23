const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect(process.env.REDIRECT_URL);
});

module.exports = router;