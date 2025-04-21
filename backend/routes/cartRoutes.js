const express = require('express');
const router = express.Router();

// TEMP route just for testing
router.get('/', (req, res) => {
  res.json({ message: 'Cart route working' });
});

module.exports = router;
