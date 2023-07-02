const express = require('express');
const router = express.Router();

/* GET tweets listing. */
router.get('/', function(req, res, next) {
  // res.send('Respond with a whatever resource, ok!');
  res.json({
    message: "GET /api/tweets"
  });
});

module.exports = router;