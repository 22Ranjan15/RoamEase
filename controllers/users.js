const User = require("../models/user.js");

// "renderSignupForm" Function for SignUp Form Route
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// "signup" Function for SignUp Route
module.exports.signup = async(req, res, next) => {
    try {
        let {username, email, password} = req.body;
        const newUser = new User({email, username});

        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to RoamEase!");
            res.redirect("/listings");
        });
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

// "renderLoginForm" Function for Login Form Route
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

// "login" Function for Login Route
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to RoamEase!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

// "logout" Function for Logout Route
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
};