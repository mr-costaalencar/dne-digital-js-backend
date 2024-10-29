// routes/studentRoutes.js
const express = require("express");
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getStudents).post(protect, createStudent);
router.route("/:id").get(protect, getStudent).put(protect, updateStudent).delete(protect, deleteStudent);

module.exports = router;
