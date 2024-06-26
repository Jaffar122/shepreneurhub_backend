const express = require("express");
const router = express.Router();
const db = require("../db");

// Route to fetch companies based on subcategory ID (subcatid)
router.get("/:subcatid", async (req, res) => {
  const subcatid = req.params.subcatid;
  try {
    const [rows] = await db.execute(
      "SELECT id, name, address, hours, phone, gmail, image FROM company WHERE subcatid = ?",
      [subcatid]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

module.exports = router;
