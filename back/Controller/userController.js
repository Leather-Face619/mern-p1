// Import User model
var User = require('../routes/userModel')

// Signup controller
const Signup = async (req, res) => {
    try {
        // Extract user details from request body
        const { name, email, password } = req.body;
        
        // Check if user with this email already exists
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }
        
        // Create new user
        const createUser = new User({
            name,
            email,
            password
        })
        
        // Save user to database
        await createUser.save()
        
        // Send success response
        res.status(201).json({ message: "User created successfully", user: {
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email
        }})
    } catch (error) {
        // Handle server error
        res.status(500).json({ message: "internal server error" })
    }
}

// Login controller
const login = async (req, res) => {
    try {
        // Extract login credentials from request body
        const { email, password } = req.body
        
        // Find user by email
        const user = await User.findOne({ email })
        
        // Check if password matches
        const isMatch = await (password === user.password);
        
        // If user not found or password doesn't match
        if (!isMatch || !user) {
            res.status(403).json({ message: "Invalid password or email" })
        }
        else {
            // Send success response
            res.status(200).json({ message: "Login successful",
            user:{
                _id: user._id,
                name: user.name,
                email: user.email
            }})
        }
    } catch (error) {
        // Handle server error
        res.status(500).json({message: "Internal Server Error hai error=> "+error})
    }
}

// Export controllers
module.exports = {
    Signup: Signup,
    login: login
};