const multer = require("multer")

const fs = require("fs")
const path = require("path")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destination = "public/uploads"
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true })
    }

    cb(null, destination)
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname)
    let fname = path.basename(file.originalname)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const filename = fname + uniqueSuffix + ext
    cb(null, filename)
  }
})

const upload = multer({
  storage: storage,

  limits: {
    fileSize: 2000000
  }

})

module.exports = upload