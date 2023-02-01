const router = require('express').Router();
const StudentExamBridgeController = require('../controller/StudentExamBridgeController');
router.post('/studentexambridge', StudentExamBridgeController.addStudentExamBridge);
module.exports = router;