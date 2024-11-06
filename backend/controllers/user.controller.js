import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

// User registration
// export const register = async (req, res) => {
//     try {
//         const { fullname, email, phoneNumber, password, role } = req.body;
//         console.log('Incoming Data:', { fullname, email, phoneNumber, password, role });

//         // Check for missing fields
//         if (!fullname || !email || !phoneNumber || !password || !role) {
//             console.log('Missing fields detected');
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         }

//         const file = req.file; // Retrieve the uploaded file
//         let profilePhotoUrl = '';

//         Handle file upload to Cloudinary
//         if (file) {
//             const dataUri = getDataUri(file);
//             const cloudResponse = await cloudinary.uploader.upload(dataUri.content);
//             profilePhotoUrl = cloudResponse.secure_url;
//             console.log('Uploaded to Cloudinary:', profilePhotoUrl);
//         }

//         // Check if the user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             console.log('User already exists');
//             return res.status(400).json({
//                 message: 'User already exists with this email.',
//                 success: false,
//             });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         console.log('Hashed Password:', hashedPassword);

//         // Create the new user
//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password: hashedPassword,
//             role,
            
//         });

//         return res.status(201).json({
//             message: "Account created successfully.",
//             success: true
//         });
//     } catch (error) {
//         console.error('Error during registration:', error); // Log the complete error
//         return res.status(500).json({ message: 'Internal server error', success: false });
//     }
// };



// User registration
export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        console.log('Incoming Data:', { fullname, email, phoneNumber, password, role });

        // Check for missing fields
        if (!fullname || !email || !phoneNumber || !password || !role) {
            console.log('Missing fields detected');
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        const file = req.file; // Retrieve the uploaded file
        let profilePhotoUrl = '';

        // Handle file upload to Cloudinary
        if (file) {
            const dataUri = getDataUri(file); // Convert the file to data URI
            const cloudResponse = await cloudinary.uploader.upload(dataUri.content); // Upload to Cloudinary
            profilePhotoUrl = cloudResponse.secure_url; // Get the uploaded file's URL
            console.log('Uploaded to Cloudinary:', profilePhotoUrl);
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists');
            return res.status(400).json({
                message: 'User already exists with this email.',
                success: false,
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password:', hashedPassword);

        // Create the new user
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profilePhoto: profilePhotoUrl, // Store the profile photo URL
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.error('Error during registration:', error); // Log the complete error
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
};
// User login
export const login = async (req, res) => {
    try {
        console.log('Login Request Body:', req.body); // Log the incoming request body
        
        const { email, password, role } = req.body;

        // Check for missing fields
        if (!email || !password || !role) {
            console.log('Missing fields detected for login');
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        // Compare the provided password with the hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            console.log('Password mismatch');
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        // Check if the role is correct
        if (role !== user.role) {
            console.log('Role mismatch');
            return res.status(400).json({
                message: "Account doesn't exist with the current role.",
                success: false
            });
        }

        // Generate JWT token
        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        // Prepare user data for response
        const userData = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        // Send response with token and user data
        return res.status(200)
            .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
            .json({
                message: `Welcome back ${user.fullname}`,
                user: userData,
                success: true
            });
    } catch (error) {
        console.error('Error during login:', error); // Log the error details
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
};

// User logout
export const logout = async (req, res) => {
    try {
        // Clear the cookie
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        });
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
};










//Update Profile
export const updateProfile = async (req, res) => {
    try {
        console.log('Update Profile Request Received');
        const { fullname, email, phoneNumber, bio, skills } = req.body;

        const file = req.file; // Retrieve the uploaded file
        let resumeUrl = ''; // Initialize resume URL

        // Process the file if it exists
        if (file) {
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            resumeUrl = cloudResponse.secure_url; // Get the secure URL
            console.log('File Processed:', resumeUrl);
        }

        let skillsArray = [];
        if (skills) {
            skillsArray = skills.split(",").map(skill => skill.trim());
        }

        const userId = req.id; // Middleware authentication
        const user = await User.findById(userId);

        if (!user) {
            console.log('User not found');
            return res.status(404).json({
                message: "User not found.",
                success: false
            });
        }

        // Ensure the profile object exists without touching bio or skills
        if (!user.profile) {
            user.profile = {}; // Initialize profile as an empty object if undefined
        }

        // Update user fields if provided
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio; // Only update bio if provided
        if (skillsArray.length) user.profile.skills = skillsArray; // Only update skills if provided

        // Update resume if provided
        if (resumeUrl) {
            user.profile.resume = resumeUrl; // Save the Cloudinary URL
            user.profile.resumeOriginalName = file.originalname; // Save the original file name
        }

        await user.save(); // Save the updated user data
        console.log('User Updated Successfully:', user);

        return res.status(200).json({
            message: "Profile updated successfully.",
            user: user, // Return the updated user data
            success: true
        });
    } catch (error) {
        console.error('Error during profile update:', error); // Log the error details
        return res.status(500).json({ 
            message: 'Internal server error', 
            success: false, 
            error: error.message // Return error message for debugging
        });
    }
};








