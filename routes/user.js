const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

// Signup Form and Signup ROute
router
    .route("/signup")
        .get(userController.renderSignupForm)    // SignUp Form Route
        .post(wrapAsync(userController.signup));    // SignUp Route

// Login Form and Login Route
router
    .route("/login")
        .get(userController.renderLoginForm)    // Login Form Route
        .post(  // Login Route
            saveRedirectUrl,
            passport.authenticate("local", {
                failureRedirect: "/login", 
                failureFlash: true,
            }), 
            userController.login
        );

// Logout Route
router.get("/logout", userController.logout);

module.exports = router;