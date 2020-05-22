const multer = require("multer");

var path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    //reject file
    cb({ message: "Unsupported file format" }, false);
  }
};

const upload = multer({
  storage: storage,
  //limits: { fileSize: 300000 },
  fileFilter: fileFilter,
});

module.exports = upload;
