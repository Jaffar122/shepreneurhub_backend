const express = require("express");
const router = express.Router();
const db = require("../db");

// Route to fetch subcategories based on category ID (catid)
router.get("/:catid", async (req, res) => {
  const catid = req.params.catid;
  try {
    const [rows] = await db.execute(
      "SELECT subcatid, subcatname, image_url FROM subcategory WHERE catid = ?",
      [catid]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    res.status(500).json({ error: 'Failed to fetch subcategories' });
  }
});

module.exports = router;
