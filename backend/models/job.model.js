


// import mongoose from "mongoose";

// const jobSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     requirements: [{
//         type: String
//     }],
//     salary: {
//         type: Number,
//         required: true
//     },
//     experienceLevel:{
//         type:Number,
//         required:true,
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     jobType: {
//         type: String,
//         required: true
//     },
//     vacancy: {
//         type: Number,
//         required: true
//     },
//     // company: {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     ref: 'Company',
//     //     required: true
//     // },

//     company: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Company',
//         required: true
//     },
    
//     created_by: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     applications: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Application',
//         }
//     ]
// },{timestamps:true});
// export const Job = mongoose.model("Job", jobSchema);








import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    experienceLevel: {  // Updated from experienceLevel to experience for consistency
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    vacancy: {
        type: Number,
        required: true
    },
    company: {  // Maintains reference to the Company model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {  // Maintains reference to the User model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    ]
}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
