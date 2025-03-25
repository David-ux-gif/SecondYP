import userModel from "../models/user.js";
import JWT from 'jsonwebtoken';
export const registerController = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: "Please fill all the requires details"
            })
        }
        const user = await userModel.findOne({email});
        if (user){
            return res.status(400).json({
                error: "User already exists"
            })
        }
        const newUser = await userModel({
            name, email, password, 
        }).save();
        return res.status(200).send({
            success: true,
            message: "User has been registered",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Problem in API",
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: "All field are required"
            });
        }
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        if (user.password !== password) {
            return res.status(400).json({
                error: "Incorrect Password"
            });
        }
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        return res.status(200).send({
            success: true,
            message: "Login successful",
            token,
            user:{
                id: user._id,
                email: user.email,

            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Problem in Login API",
        })
    }
};