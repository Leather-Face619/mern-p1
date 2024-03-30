var User = require('../routes/userModel')
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const createUser = new User({
            name,
            email,
            password
        })
        await createUser.save()
        res.status(201).json({ message: "User created successfully",user: {
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email
        }})
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isMatch = await (password === user.password);
        if (!isMatch || !user) {
            res.status(403).json({ message: "Invalid password or email" })
}
else{
    res.status(200).json({ message: "Login successful",
user:{
    _id: user._id,
    name: user.name,
    email: user.email
}})
}
    } catch (error) {
res.status(500).json({message: "Internal Server Error hai error=> "+error})
    }
}
module.exports = {
    Signup: Signup,
    login: login
};