const router = require('express').Router();
const item = require("../controller/user.controller");

const userClass = new item();

// Get all users
router.get("/users", (req, res, next) => {

    userClass.getAllUser()
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })
        })
});

// register a new user
router.post('/users/register', (req, res) => {
    userClass.signUpNewUser(req.body, res)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
});

// login for user
router.post('/users/login', (req, res) => {
    userClass.SignInUser(req.body, res)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
});

module.exports = router;