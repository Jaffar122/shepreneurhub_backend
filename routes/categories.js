// routes/categories.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Import MySQL connection pool from db.js

// Route to fetch categories
router.get("/", async (req, res) => {
  try {
    const [results] = await db.query('SELECT catid, catname, cat_icon FROM category');
    res.json(results);
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

module.exports = router;
