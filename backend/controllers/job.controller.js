import { Job } from "../models/job.model.js";

// admin post job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, vacancy, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !vacancy || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements, // directly use requirements as it's already an array
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            vacancy,
            company: companyId,
            created_by: userId
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while posting the job.",
            success: false,
            error: error.message
        });
    }
};






export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        };

        const jobs = await Job.find(query)
            .populate({
                path: "company",
                select: "name"  // Use "name" as field matches schema better
            })
            .sort({ createdAt: -1 });

        if (!jobs.length) {
            return res.status(404).json({
                message: "No jobs found.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error occurred while fetching jobs.",
            success: false,
            error: error.message || "Internal server error."
        });
    }
};




export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId)
            .populate({
                path: "company",
                select: "name"  // "name" matches schema
            })
            .populate("applications");

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            });
        }

        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error occurred while fetching job.",
            success: false,
            error: error.message || "Internal server error."
        });
    }
};




export const getAdminJobs = async (req, res) => {
    try {
        const jobs = await Job.find({})
            .populate({
                path: 'company',
                select: 'name',  // Retrieve only the company name
            })
            .sort({ createdAt: -1 });  // Sort by creation date

        if (!jobs.length) {
            return res.status(404).json({
                message: "No jobs found for admin.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error occurred while fetching admin jobs.",
            success: false,
            error: error.message || "Internal server error."
        });
    }
};
