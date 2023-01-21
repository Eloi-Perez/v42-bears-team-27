const router = require('express').Router();

const { validateStudent } = require('../validators/studentValidator');
const {
  authenticateStudent,
  checkStudentAuthenticated,
} = require('../middleware/auth');
const {
  createStudent,
  loginStudent,
  testStudent,
} = require('../controllers/studentControllers');

// "http://localhost:5000/api/v0/student/create"
router.post('/create', validateStudent, createStudent);
router.post('/login', authenticateStudent, loginStudent);
router.get('/test', checkStudentAuthenticated, testStudent);

module.exports = router;