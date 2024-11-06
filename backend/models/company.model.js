

// import mongoose from "mongoose";

// const companySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     website: {
//         type: String
//     },
//     industry: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     logo: {
//         type: String // URL to company logo
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     }
// }, { timestamps: true });

// export const Company = mongoose.model("Company", companySchema);






import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },


    // companyName: { // Changed from 'name' to 'companyName'
    //     type: String,
    //     required: true,
    //     unique: true
    // },


    email: {
        type: String,
        required: true,
        unique: true // Ensure the email is unique
    },
    phone: {
        type: String,
        required: false, // Set to false to make it optional
        unique: true // Ensure the phone number is unique if provided
    },
    address: {
        type: String,
        required: false // Set to false to make it optional
    },
    website: {
        type: String,
        default: '' // Optional field, can default to an empty string
    },
    industry: {
        type: String,
        default: '' // Optional field
    },
    description: {
        type: String,
        default: '' // Optional field
    },
    password: {
        type: String,
        required: false // Set to false to make it optional
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);

