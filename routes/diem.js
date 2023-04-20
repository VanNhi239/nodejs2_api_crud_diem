const router = require("express").Router();
const bodyParser = require("body-parser");
const diemController = require("../controllers/diemController");

//ADD DIEM
router.post("/", diemController.addDiem);

//GET ALL DIEM
router.get("/", diemController.getAllDiem);

//GET AN DIEM
router.get("/:id", diemController.getADiem);

//UPDATE DIEM
router.put("/:id", diemController.updateDiem);

//DELETE DIEM
router.delete("/:id", diemController.deleteDiem);

module.exports = router;
