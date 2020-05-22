const { Router } = require("express");
const router = Router();

const upload = require("../utils/multer");

/* router.get("/", function (req, res) {
  res.json({
    message: "Hola Mundo",
  });
}); */

router.post("/upload", upload.array("images"), function (req, res) {
  //console.log(req.files);
  res.redirect("/uploaded.html");
});

module.exports = router;
