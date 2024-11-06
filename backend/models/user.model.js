// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     fullname: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     phoneNumber: {
//         type: Number,
//         required: true
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     role:{
//         type:String,
//         enum:['student','recruiter'],
//         required:true
//     },
//     profile:{
//         bio:{type:String},
//         skills:[{type:String}],
//         resume:{type:String}, // URL to resume file
//         resumeOriginalName:{type:String},
//         company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 
//         profilePhoto:{
//             type:String,
//             default:""
//         }
//     },
// },{timestamps:true});
// export const User = mongoose.model('User', userSchema);


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true // Ensure fast lookups
    },
    phoneNumber: {
        type: String, // Changed from Number to String
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['student', 'admin'],
        required: true
    },
    profile: {
        bio: { type: String, default: '' }, // Default to an empty string
        skills: [{ type: String }], // Array of strings
        resume: { type: String }, // URL to resume file
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Reference to the Company model
        profilePhoto: {
            type: String,
            default: 'path/to/default/profile-photo.jpg' // Set a meaningful default image URL
        }
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
