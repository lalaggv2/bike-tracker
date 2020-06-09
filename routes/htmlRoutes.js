const router = require("express").Router();
const path = require("path");
//add routes

// HTML route to display page

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "html", "index.html");
  res.sendFile(filePath);
});

// router.get

// router.post

module.exports = router;
