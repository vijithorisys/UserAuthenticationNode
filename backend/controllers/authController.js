const {user} = require("../sequelize");
const becrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();


const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(req.body,'firstName')
        // Check if the email is already registered
        const existingUser = await user.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({
                message: 'User Already Registered'
            });
        }

        // Create a new user        
        const hashedPassword = await becrypt.hash(password,10)
        const newUser = await user.create({ firstName, lastName, email, password:hashedPassword });
        if (newUser) {
            return res.status(200).json({ message: 'User Added Successfully', userData: newUser });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

const login = async(req,res)=>{
    try{
        const {email, password}= req.body
        //existing user
        const existingUser = await user.findOne({where:{email}})
        if(!existingUser){
            return res.status(400).json({message:'User not found'})
        }
        const comparePassword = await becrypt.compare(password, existingUser.password)
        if(!comparePassword){
            return res.status(400).json({message:'Email or Password invalid'})
        }
        const token = jwt.sign({useId:existingUser.id}, process.env.SECRET_KEY,{expiresIn:'1h'} )

        return res.status(200).json({message:'login successfully', token})
    }catch(error){
        return res.json({message:'Internal Server Error'})
    }
}

module.exports = { register,login };
