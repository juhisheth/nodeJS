const express = require('express');
const router = express.Router();
const StudentController = require('../controller/StudentController');

const studentSchemaValidation = require('../util/StudentSchemaValidation');
const zodMiddleware = require('../middleware/ZodMiddleware')

router.post('/student', zodMiddleware.validate(studentSchemaValidation), StudentController.addStudent);
router.get('/student', StudentController.getAllStudents);
router.get('/student', StudentController.getStudentById);
router.delete('/student', StudentController.deleteStudent);
module.exports = router;