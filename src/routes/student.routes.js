const express = require("express");

const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/student.controller");

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Student route working"
    });
});

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
