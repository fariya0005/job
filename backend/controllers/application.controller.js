import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
        }

        // check if the jobs exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        // create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};
export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// admin dekhega kitna user ne apply kiya hai
// export const getApplicants = async (req,res) => {
//     try {
//         const jobId = req.params.id;
//         const job = await Job.findById(jobId).populate({
//             path:'applications',
//             options:{sort:{createdAt:-1}},
//             populate:{
//                 path:'applicant'
//             }
//         });
//         if(!job){
//             return res.status(404).json({
//                 message:'Job not found.',
//                 success:false
//             })
//         };
//         return res.status(200).json({
//             job, 
//             succees:true
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }






export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant' // Assuming this is a reference to an applicant model
            }
        });

        if (!job) {
            return res.status(404).json({
                message: 'Job not found.',
                success: false
            });
        }

        // Extracting the applications from the job
        const applicants = job.applications.map(application => application.applicant);

        return res.status(200).json({
            applicants, // Send only the applicants
            success: true
        });
    } catch (error) {
        console.error('Error fetching applicants:', error);
        return res.status(500).json({
            message: 'Server error.',
            success: false
        });
    }
}


// export const updateStatus = async (req,res) => {
//     try {
//         const {status} = req.body;
//         const applicationId = req.params.id;
//         if(!status){
//             return res.status(400).json({
//                 message:'status is required',
//                 success:false
//             })
//         };

//         // find the application by applicantion id
//         const application = await Application.findOne({_id:applicationId});
//         if(!application){
//             return res.status(404).json({
//                 message:"Application not found.",
//                 success:false
//             })
//         };

//         // update the status
//         application.status = status.toLowerCase();
//         await application.save();

//         return res.status(200).json({
//             message:"Status updated successfully.",
//             success:true
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }





// export const updateStatus = async (req, res) => {
//   try {
//     const { status } = req.body; // Get status from request body
//     const applicationId = req.params.id; // Get application ID from the request params

//     // Validate status in request
//     if (!status) {
//       return res.status(400).json({
//         message: 'Status is required',
//         success: false,
//       });
//     }

//     // Find the application by ID
//     const application = await Application.findById(applicationId);  // Use findById for simpler lookup
//     if (!application) {
//       return res.status(404).json({
//         message: 'Application not found.',
//         success: false,
//       });
//     }

//     // Update the status in lowercase (for consistency)
//     application.status = status.toLowerCase();
//     await application.save();  // Save the updated status to the database

//     // Send success response
//     return res.status(200).json({
//       message: 'Status updated successfully.',
//       success: true,
//     });
//   } catch (error) {
//     console.error('Error updating status:', error);
//     return res.status(500).json({
//       message: 'Server error. Please try again later.',
//       success: false,
//     });
//   }
// };



export const updateStatus = async (req, res) => {
    try {
      const { status } = req.body; // Get status from request body
      const applicationId = req.params.id; // Get application ID from route params
  
      // Check if status is provided
      if (!status) {
        return res.status(400).json({
          message: 'Status is required',
          success: false,
        });
      }
  
      // Find the application by ID
      const application = await Application.findById(applicationId);
      if (!application) {
        return res.status(404).json({
          message: 'Application not found.',
          success: false,
        });
      }
  
      // Update the status
      application.status = status.toLowerCase(); // Normalize status to lowercase
      await application.save();
  
      // Send a success response
      return res.status(200).json({
        message: 'Status updated successfully.',
        success: true,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      return res.status(500).json({
        message: 'Server error. Please try again later.',
        success: false,
      });
    }
  };
  