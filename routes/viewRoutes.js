const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.use(authController.isLoggedIn);

// router.get('/', viewsController.getOverview);
// router.get('/tour/:slug', viewsController.getTour);
// router.get('/login', viewsController.getLoginForm);
// // router.get('/me', authController.protect, viewsController.getAccount);

router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
// router.get('/me', authController.protect, viewsController.getAccount);

module.exports = router;
