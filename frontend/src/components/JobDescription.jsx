// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { FaMapMarkerAlt, FaBriefcase, FaUserTie, FaClock, FaUsers, FaCalendarAlt } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { setSingleJob } from '@/redux/jobSlice';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';





// const JobDescription = () => {
//     const { singleJob } = useSelector(store => store.job);
//     const { user } = useSelector(store => store.auth);
//     const isApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            
//             if(res.data.success){
//                 setIsApplied(true); // Update the local state
//                 const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
//                 dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
//                 toast.success(res.data.message);

//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
//         <div className='max-w-4xl mx-auto my-16 p-10 bg-gradient-to-r from-blue-50 via-green-50 to-white shadow-lg rounded-xl border border-gray-200'>
//             <div className='flex flex-col sm:flex-row items-start justify-between'>
//                 <div className='mb-6 sm:mb-0'>
//                     <h1 className='font-extrabold text-4xl text-gray-800 mb-3 leading-snug'>
//                         {singleJob?.title}
//                     </h1>
//                     <div className='flex items-center gap-4 mt-2'>
//                         <Badge className='bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.vacancy} Vacancies
//                         </Badge>
//                         <Badge className='bg-green-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.jobType}
//                         </Badge>
//                         <Badge className='bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.salary} LPA
//                         </Badge>
//                     </div>
//                 </div>
//                 <Button 
//                  onClick={isApplied ? null : applyJobHandler}
//                  disabled={isApplied}
//                     className={`px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out 
//                     ${isApplied ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 focus:outline-none shadow-md'}`}
//                 >
//                     {isApplied ? 'Already Applied' : 'Apply Now'}
//                 </Button>
//             </div>

//             <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                 Job Overview
//             </h2>
            
//             <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
//                 <div className='flex items-center'>
//                     <FaUserTie className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Job Title
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.title}</p>
//                     </div>
//                 </div>
              

//                 <div className='flex items-center'>
//                     <FaMapMarkerAlt className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Location
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.location || 'Hyderabad'}</p>
//                     </div>
//                 </div>


//                 <div className='flex items-center'>
//                     <FaBriefcase className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Experience
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.experience || '2 years'}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaClock className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Job Type
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.jobType || 'Full Time'}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaUsers className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                         Total Applicants
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.applications?.length|| 'Nobody applied yet'}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaCalendarAlt className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//               Posted Date
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.createdAt.split("T")[0]|| '10/17/2024'}</p>
//                     </div>
//                 </div>
//             </div>

//             <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                 Job Description
//             </h2>
//             <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
//                 {singleJob?.description || `As a Software Developer, you will be responsible for developing and maintaining software solutions tailored to client requirements. This role involves working closely with cross-functional teams to ensure the delivery of high-quality solutions. Candidates should have experience in software development, possess problem-solving skills, and be passionate about writing clean, efficient code.`}
//             </p>
//         </div>
//     );
// };

// export default JobDescription;




// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { FaMapMarkerAlt, FaBriefcase, FaUserTie, FaClock, FaUsers, FaCalendarAlt } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { setSingleJob } from '@/redux/jobSlice';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';

// const JobDescription = () => {
//     const { singleJob } = useSelector(store => store.job);
//     const { user } = useSelector(store => store.auth);
    
//     const [isApplied, setIsApplied] = useState(false);
    
//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            
//             if (res.data.success) {
//                 setIsApplied(true); 
//                 const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
//                 dispatch(setSingleJob(updatedSingleJob));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response?.data?.message || 'Failed to apply for the job');
//         }
//     };

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                     const alreadyApplied = res.data.job.applications.some(application => application.applicant === user?._id);
//                     setIsApplied(alreadyApplied);
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
//         <div className='max-w-4xl mx-auto my-16 p-10 bg-gradient-to-r from-blue-50 via-green-50 to-white shadow-lg rounded-xl border border-gray-200'>
//             <div className='flex flex-col sm:flex-row items-start justify-between'>
//                 <div className='mb-6 sm:mb-0'>
//                     <h1 className='font-extrabold text-4xl text-gray-800 mb-3 leading-snug'>
//                         {singleJob?.title}
//                     </h1>
//                     <div className='flex items-center gap-4 mt-2'>
//                         <Badge className='bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.vacancy} Vacancies
//                         </Badge>
//                         <Badge className='bg-green-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.jobType}
//                         </Badge>
//                         <Badge className='bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.salary} LPA
//                         </Badge>
//                     </div>
//                 </div>
//                 <Button
//                     onClick={!isApplied ? applyJobHandler : null}
//                     disabled={isApplied}
//                     className={`px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out 
//                     ${isApplied ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 focus:outline-none shadow-md'}`}
//                 >
//                     {isApplied ? 'Already Applied' : 'Apply Now'}
//                 </Button>
//             </div>

//             <div>
//                 <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                     Job Overview
//                 </h2>
//             </div>

//             <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
//                 <div className='flex items-center'>
//                     <FaUserTie className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Job Title
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.title}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaMapMarkerAlt className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Location
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.location || 'Hyderabad'}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaBriefcase className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Experience
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.experience || '2 years'}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaClock className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Job Type
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.jobType || 'Full Time'}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaUsers className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Total Applicants
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.applications?.length || 'Nobody applied yet'}</p>
//                     </div>
//                 </div>

//                 <div className='flex items-center'>
//                     <FaCalendarAlt className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Posted Date
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.createdAt?.split("T")[0] || '10/17/2024'}</p>
//                     </div>
//                 </div>
//             </div>

//             <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                 Job Description
//             </h2>
//             <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
//                 {singleJob?.description || `As a Software Developer, you will be responsible for developing and maintaining software solutions tailored to client requirements. This role involves working closely with cross-functional teams to ensure the delivery of high-quality solutions. Candidates should have experience in software development, possess problem-solving skills, and be passionate about writing clean, efficient code.`}
//             </p>
//         </div>
//     );
// };

// export default JobDescription;






// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { FaMapMarkerAlt, FaBriefcase, FaUserTie, FaClock, FaUsers, FaCalendarAlt } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { setSingleJob } from '@/redux/jobSlice';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';

// const JobDescription = () => {
//     const { singleJob } = useSelector(store => store.job);
//     const { user } = useSelector(store => store.auth);
    
//     const [isApplied, setIsApplied] = useState(false);
    
//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            
//             if (res.data.success) {
//                 setIsApplied(true); 
//                 const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
//                 dispatch(setSingleJob(updatedSingleJob));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response?.data?.message || 'Failed to apply for the job');
//         }
//     };

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                     const alreadyApplied = res.data.job.applications.some(application => application.applicant === user?._id);
//                     setIsApplied(alreadyApplied);
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
//         <div className='max-w-4xl mx-auto my-16 p-10 bg-gradient-to-r from-blue-50 via-green-50 to-white shadow-lg rounded-xl border border-gray-200'>
//             <div className='flex flex-col sm:flex-row items-start justify-between'>
//                 <div className='mb-6 sm:mb-0'>
//                     <h1 className='font-extrabold text-4xl text-gray-800 mb-3 leading-snug'>
//                         {singleJob?.title}
//                     </h1>
//                     <div className='flex items-center gap-4 mt-2'>
//                         <Badge className='bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.vacancy} Vacancies
//                         </Badge>
//                         <Badge className='bg-green-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.jobType}
//                         </Badge>
//                         <Badge className='bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.salary} LPA
//                         </Badge>
//                     </div>
//                 </div>
//                 {/* Conditionally render the Apply button for non-admin users only */}
//                 {user?.role !== 'admin' && (
//                     <Button
//                         onClick={!isApplied ? applyJobHandler : null}
//                         disabled={isApplied}
//                         className={`px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out 
//                         ${isApplied ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 focus:outline-none shadow-md'}`}
//                     >
//                         {isApplied ? 'Already Applied' : 'Apply Now'}
//                     </Button>
//                 )}
//             </div>

//             <div>
//                 <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                     Job Overview
//                 </h2>
//             </div>

//             <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
//                 <div className='flex items-center'>
//                     <FaUserTie className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
//                             Job Title
//                         </h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.title}</p>
//                     </div>
//                 </div>
// {singleJob?.requirements || `- Bachelor's degree in Computer Science or related field\n- 2+ years of experience in software development\n- Proficiency in programming languages like Java, Python, or JavaScript\n- Strong problem-solving skills\n- Excellent communication and teamwork abilities.`}
// //                 <div className='flex items-center'>
// //                     <FaMapMarkerAlt className='text-green-600 mr-3' />
// //                     <div>
// //                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
// //                             Location
// //                         </h3>
// //                         <p className='text-gray-600 text-sm'>{singleJob?.location || 'Hyderabad'}</p>
// //                     </div>
// //                 </div>

// //                 <div className='flex items-center'>
// //                     <FaBriefcase className='text-green-600 mr-3' />
// //                     <div>
// //                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
// //                             Experience
// //                         </h3>
// //                         <p className='text-gray-600 text-sm'>{singleJob?.experience || '2 years'}</p>
// //                     </div>
// //                 </div>

// //                 <div className='flex items-center'>
// //                     <FaClock className='text-green-600 mr-3' />
// //                     <div>
// //                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
// //                             Job Type
// //                         </h3>
// //                         <p className='text-gray-600 text-sm'>{singleJob?.jobType || 'Full Time'}</p>
// //                     </div>
// //                 </div>

// //                 <div className='flex items-center'>
// //                     <FaUsers className='text-green-600 mr-3' />
// //                     <div>
// //                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
// //                             Total Applicants
// //                         </h3>
// //                         <p className='text-gray-600 text-sm'>{singleJob?.applications?.length || 'Nobody applied yet'}</p>
// //                     </div>
// //                 </div>

// //                 <div className='flex items-center'>
// //                     <FaCalendarAlt className='text-green-600 mr-3' />
// //                     <div>
// //                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>
// //                             Posted Date
// //                         </h3>
// //                         <p className='text-gray-600 text-sm'>{singleJob?.createdAt?.split("T")[0] || '10/17/2024'}</p>
// //                     </div>
// //                 </div>
// //             </div>

// //             <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
// //                 Job Description
// //             </h2>
// //             <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
// //                 {singleJob?.description || `As a Software Developer, you will be responsible for developing and maintaining software solutions tailored to client requirements. This role involves working closely with cross-functional teams to ensure the delivery of high-quality solutions. Candidates should have experience in software development, possess problem-solving skills, and be passionate about writing clean, efficient code.`}
// //             </p>
// //         </div>
//     );
// };

// export default JobDescription;







// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { FaMapMarkerAlt, FaBriefcase, FaUserTie, FaClock, FaUsers, FaCalendarAlt } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { setSingleJob } from '@/redux/jobSlice';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';

// const JobDescription = () => {
//     const { singleJob } = useSelector(store => store.job);
//     const { user } = useSelector(store => store.auth);
    
//     const [isApplied, setIsApplied] = useState(false);
//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
//             if (res.data.success) {
//                 setIsApplied(true); 
//                 const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
//                 dispatch(setSingleJob(updatedSingleJob));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.response?.data?.message || 'Failed to apply for the job');
//         }
//     };

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                     const alreadyApplied = res.data.job.applications.some(application => application.applicant === user?._id);
//                     setIsApplied(alreadyApplied);
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
//         <div className='max-w-4xl mx-auto my-16 p-10 bg-gradient-to-r from-blue-50 via-green-50 to-white shadow-lg rounded-xl border border-gray-200'>
//             <div className='flex flex-col sm:flex-row items-start justify-between'>
//                 <div className='mb-6 sm:mb-0'>
//                     <h1 className='font-extrabold text-4xl text-gray-800 mb-3 leading-snug'>
//                         {job.company.name}
//                     </h1>
//                     <div className='flex items-center gap-4 mt-2'>
//                         <Badge className='bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.vacancy} Vacancies
//                         </Badge>
//                         <Badge className='bg-green-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.jobType}
//                         </Badge>
//                         <Badge className='bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
//                             {singleJob?.salary} LPA
//                         </Badge>
//                     </div>
//                 </div>
//                 {user?.role !== 'admin' && (
//                     <Button
//                         onClick={!isApplied ? applyJobHandler : null}
//                         disabled={isApplied}
//                         className={`px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out 
//                         ${isApplied ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 focus:outline-none shadow-md'}`}
//                     >
//                         {isApplied ? 'Already Applied' : 'Apply Now'}
//                     </Button>
//                 )}
//             </div>

//             <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                 Job Overview
//             </h2>

//             <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
//                 <div className='flex items-center'>
//                     <FaUserTie className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Job Title</h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.title}</p>
//                     </div>
//                 </div>
//                 <div className='flex items-center'>
//                     <FaMapMarkerAlt className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Location</h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.location || 'Hyderabad'}</p>
//                     </div>
//                 </div>
//                 <div className='flex items-center'>
//                     <FaBriefcase className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Experience</h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.experience || '2 years'}</p>
//                     </div>
//                 </div>
//                 <div className='flex items-center'>
//                     <FaClock className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Job Type</h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.jobType || 'Full Time'}</p>
//                     </div>
//                 </div>
//                 <div className='flex items-center'>
//                     <FaUsers className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Total Applicants</h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.applications?.length || 'Nobody applied yet'}</p>
//                     </div>
//                 </div>
//                 <div className='flex items-center'>
//                     <FaCalendarAlt className='text-green-600 mr-3' />
//                     <div>
//                         <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Posted Date</h3>
//                         <p className='text-gray-600 text-sm'>{singleJob?.createdAt?.split("T")[0] || '10/17/2024'}</p>
//                     </div>
//                 </div>
//             </div>

//             <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                 Job Description
//             </h2>
//             <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
//                 {singleJob?.description || `As a Software Developer, you will be responsible for developing and maintaining software solutions tailored to client requirements. This role involves working closely with cross-functional teams to ensure the delivery of high-quality solutions. Candidates should have experience in software development, possess problem-solving skills, and be passionate about writing clean, efficient code.`}
//             </p>

//             {/* Requirements Section */}
//             <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
//                 Requirements
//             </h2>
//             <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
//                 {singleJob?.requirements || `- Bachelor's degree in Computer Science or a related field
// - Proven experience in software development
// - Proficient in JavaScript, React, and Node.js
// - Excellent problem-solving and analytical skills
// - Strong communication skills and ability to work in a team`}
//             </p>
//         </div>
//     );
// };

// export default JobDescription;




import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FaMapMarkerAlt, FaBriefcase, FaUserTie, FaClock, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setSingleJob } from '@/redux/jobSlice';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    
    const [isApplied, setIsApplied] = useState(false);
    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true); 
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to apply for the job');
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    const alreadyApplied = res.data.job.applications.some(application => application.applicant === user?._id);
                    setIsApplied(alreadyApplied);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className='max-w-4xl mx-auto my-16 p-10 bg-gradient-to-r from-blue-50 via-green-50 to-white shadow-lg rounded-xl border border-gray-200'>
            <div className='flex flex-col sm:flex-row items-start justify-between'>
                <div className='mb-6 sm:mb-0'>
                    <h1 className='font-extrabold text-4xl text-gray-800 mb-3 leading-snug'>
                        {singleJob?.company?.name || 'Company Name'}
                    </h1>
                    <div className='flex items-center gap-4 mt-2'>
                        <Badge className='bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
                            {singleJob?.vacancy} Vacancies
                        </Badge>
                        <Badge className='bg-green-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
                            {singleJob?.jobType}
                        </Badge>
                        <Badge className='bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm'>
                            {singleJob?.salary} LPA
                        </Badge>
                    </div>
                </div>
                {user?.role !== 'admin' && (
                    <Button
                        onClick={!isApplied ? applyJobHandler : null}
                        disabled={isApplied}
                        className={`px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out 
                        ${isApplied ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 focus:outline-none shadow-md'}`}
                    >
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                )}
            </div>

            <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
                Job Overview
            </h2>

            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='flex items-center'>
                    <FaUserTie className='text-green-600 mr-3' />
                    <div>
                        <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Job Title</h3>
                        <p className='text-gray-600 text-sm'>{singleJob?.title}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaMapMarkerAlt className='text-green-600 mr-3' />
                    <div>
                        <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Location</h3>
                        <p className='text-gray-600 text-sm'>{singleJob?.location || 'Hyderabad'}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaBriefcase className='text-green-600 mr-3' />
                    <div>
                        <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Experience</h3>
                        <p className='text-gray-600 text-sm'>{singleJob?.experience || '2 years'}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaClock className='text-green-600 mr-3' />
                    <div>
                        <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Job Type</h3>
                        <p className='text-gray-600 text-sm'>{singleJob?.jobType || 'Full Time'}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaUsers className='text-green-600 mr-3' />
                    <div>
                        <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Total Applicants</h3>
                        <p className='text-gray-600 text-sm'>{singleJob?.applications?.length || 'Nobody applied yet'}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaCalendarAlt className='text-green-600 mr-3' />
                    <div>
                        <h3 className='font-semibold text-gray-700 uppercase text-sm tracking-wide'>Posted Date</h3>
                        <p className='text-gray-600 text-sm'>{singleJob?.createdAt?.split("T")[0] || '10/17/2024'}</p>
                    </div>
                </div>
            </div>

            <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
                Job Description
            </h2>
            <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
                {singleJob?.description || `As a Software Developer, you will be responsible for developing and maintaining software solutions tailored to client requirements. This role involves working closely with cross-functional teams to ensure the delivery of high-quality solutions. Candidates should have experience in software development, possess problem-solving skills, and be passionate about writing clean, efficient code.`}
            </p>

            {/* Requirements Section */}
            <h2 className='text-xl font-bold text-gray-700 border-b border-gray-300 py-4 mt-10 uppercase'>
                Requirements
            </h2>
            <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
                {singleJob?.requirements || `- Bachelor's degree in Computer Science or a related field
- Proven experience in software development
- Proficient in JavaScript, React, and Node.js
- Excellent problem-solving and analytical skills
- Strong communication skills and ability to work in a team`}
            </p>
        </div>
    );
};

export default JobDescription;























