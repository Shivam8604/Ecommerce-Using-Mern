const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const userCtrl = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const user = await Users.findOne({ email })
            if (user) return res.status(400).json({ msg: "Email Already Registerd" });
            if (password.length < 6) return res.status(400).json({ msg: "password is al least 6 Character" });

            const passwordHash = await bcrypt.hash(password, 10)

            const newUser = new Users({
                name, email, password: passwordHash
            })

            // save mongoDb
            await newUser.save()

            //  create awt to authentiaction

            const accesstoken = createAccessToken({ id: newUser._id });
            const refreshtoken = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: "/user/refresh_token"
            })

            res.json({ accesstoken })


            res.json({ msg: "Register Sucessfull !" })

        }
        catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    refreshtoken: async (req, res) => {

        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) return res.status(400).json({ msg: "Please login or Register" });

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(400).json({ msg: "Please Login Or Register" });
                const accesstoken = createAccessToken({ id: user.id })
            })

            res.json({ rf_token })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }


    }

}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}


module.exports = userCtrl