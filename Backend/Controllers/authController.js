const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const dotenv = require('dotenv');

dotenv.config();

//signup 
const signup =  async (req,res) =>{
    const {username,email,password}= req.body;
    try {
        const existUser = await User.findOne({email})
        if (existUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser= new User({
            username,
            email,
            password: hashedPassword
        })
        await newUser.save();
        const token = jwt.sign({id: newUser._id, email: newUser.email},process.env.JWT_SECRET, {
            expiresIn: '1h'});
            res.status(201).json({message: 'User created successfully', token});
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//login
const login = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user){
            return res.status(404).json({message: 'User not found'});
        }
        const isPasswordValid= await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid password'});
        }
        const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.status(200).json({message: 'Login successful', token});
    } catch (err) {
        console.error('Login error:', err);
    res.status(500).json({message:"Internal server issue!"});
    }
};

const logout = (req, res) => {
    res.send('Logged out successfully');
    res.redirect('/');
};

module.exports = { signup, login, logout };
