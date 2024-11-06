




// import React, { useState } from 'react';
// import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa'; // Import icons

// const jobStressData = [
//   { title: 'Software Engineer', stressRating: 3 },
//   { title: 'Data Scientist', stressRating: 4 },
//   { title: 'Web Developer', stressRating: 2 },
//   { title: 'Product Manager', stressRating: 5 },
//   { title: 'Graphic Designer', stressRating: 3 },
//   { title: 'Marketing Specialist', stressRating: 4 },
//   { title: 'Sales Executive', stressRating: 4 },
//   { title: 'HR Manager', stressRating: 3 },
//   { title: 'Customer Service Representative', stressRating: 5 },
//   { title: 'Business Analyst', stressRating: 3 },
//   { title: 'Project Manager', stressRating: 5 },
//   { title: 'DevOps Engineer', stressRating: 4 },
//   { title: 'System Administrator', stressRating: 3 },
//   { title: 'Network Engineer', stressRating: 4 },
//   { title: 'Data Analyst', stressRating: 3 },
// ];

// const getIcon = (stressRating) => {
//   if (stressRating <= 2) return <FaSmile className="text-green-500" />;
//   if (stressRating === 3) return <FaMeh className="text-yellow-500" />;
//   return <FaFrown className="text-red-500" />;
// };

// const JobStressRatings = () => {
//   const [selectedJob, setSelectedJob] = useState(jobStressData[0]);

//   const handleJobChange = (event) => {
//     const jobTitle = event.target.value;
//     const job = jobStressData.find((job) => job.title === jobTitle);
//     setSelectedJob(job);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 to-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Job Stress Ratings</h1>
      
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="job-select">
//           Select Job Title:
//         </label>
//         <select
//           id="job-select"
//           value={selectedJob.title}
//           onChange={handleJobChange}
//           className="border border-gray-300 rounded-md p-2 w-full"
//         >
//           {jobStressData.map((job) => (
//             <option key={job.title} value={job.title}>
//               {job.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b text-left">Job Title</th>
//             <th className="py-2 px-4 border-b text-left">Stress Rating (1-5)</th>
//             <th className="py-2 px-4 border-b text-left">Icon</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="hover:bg-gray-100">
//             <td className="py-2 px-4 border-b">{selectedJob.title}</td>
//             <td className="py-2 px-4 border-b">{selectedJob.stressRating}</td>
//             <td className="py-2 px-4 border-b">{getIcon(selectedJob.stressRating)}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default JobStressRatings;





// import React, { useState } from 'react';
// import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

// const jobStressData = [
//   { title: 'Software Engineer', stressRating: 3, feedback: [] },
//   { title: 'Data Scientist', stressRating: 4, feedback: [] },
//   { title: 'Web Developer', stressRating: 2, feedback: [] },
//   { title: 'Product Manager', stressRating: 5, feedback: [] },
//   { title: 'Graphic Designer', stressRating: 3, feedback: [] },
//   { title: 'Marketing Specialist', stressRating: 4, feedback: [] },
//   { title: 'Sales Executive', stressRating: 4, feedback: [] },
//   { title: 'HR Manager', stressRating: 3, feedback: [] },
//   { title: 'Customer Service Representative', stressRating: 5, feedback: [] },
//   { title: 'Business Analyst', stressRating: 3, feedback: [] },
//   { title: 'Project Manager', stressRating: 5, feedback: [] },
//   { title: 'DevOps Engineer', stressRating: 4, feedback: [] },
//   { title: 'System Administrator', stressRating: 3, feedback: [] },
//   { title: 'Network Engineer', stressRating: 4, feedback: [] },
//   { title: 'Data Analyst', stressRating: 3, feedback: [] },
// ];

// const getIcon = (stressRating) => {
//   if (stressRating <= 2) return <FaSmile className="text-green-500" />;
//   if (stressRating === 3) return <FaMeh className="text-yellow-500" />;
//   return <FaFrown className="text-red-500" />;
// };

// const JobStressRatings = () => {
//   const [selectedJob, setSelectedJob] = useState(jobStressData[0]);
//   const [userRating, setUserRating] = useState(3);

//   const handleJobChange = (event) => {
//     const jobTitle = event.target.value;
//     const job = jobStressData.find((job) => job.title === jobTitle);
//     setSelectedJob(job);
//   };

//   const handleRatingChange = (event) => {
//     setUserRating(parseInt(event.target.value));
//   };

//   const submitFeedback = () => {
//     const updatedJob = { ...selectedJob };
//     updatedJob.feedback.push(userRating);
//     setSelectedJob(updatedJob);
//     setUserRating(3); // Reset the slider

//     // Update the job stress data
//     const index = jobStressData.findIndex((job) => job.title === updatedJob.title);
//     jobStressData[index] = updatedJob;
//   };

//   const calculateAverageRating = () => {
//     const feedback = selectedJob.feedback;
//     if (feedback.length === 0) return selectedJob.stressRating;
//     const total = feedback.reduce((sum, rating) => sum + rating, 0);
//     return (total / feedback.length).toFixed(1);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 to-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Job Stress Ratings</h1>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="job-select">
//           Select Job Title:
//         </label>
//         <select
//           id="job-select"
//           value={selectedJob.title}
//           onChange={handleJobChange}
//           className="border border-gray-300 rounded-md p-2 w-full"
//         >
//           {jobStressData.map((job) => (
//             <option key={job.title} value={job.title}>
//               {job.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <table className="min-w-full bg-white border border-gray-300 mb-6">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b text-left">Job Title</th>
//             <th className="py-2 px-4 border-b text-left">Average Stress Rating</th>
//             <th className="py-2 px-4 border-b text-left">Icon</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="hover:bg-gray-100">
//             <td className="py-2 px-4 border-b">{selectedJob.title}</td>
//             <td className="py-2 px-4 border-b">{calculateAverageRating()}</td>
//             <td className="py-2 px-4 border-b">{getIcon(calculateAverageRating())}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="stress-rating">
//           Provide Your Stress Rating:
//         </label>
//         <input
//           type="range"
//           id="stress-rating"
//           min="1"
//           max="5"
//           value={userRating}
//           onChange={handleRatingChange}
//           className="w-full"
//         />
//         <div className="text-center mt-2">{userRating}</div>
//       </div>

//       <button
//         onClick={submitFeedback}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit Feedback
//       </button>
//     </div>
//   );
// };

// export default JobStressRatings;









// import React, { useState } from 'react';
// import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

// const jobStressData = [
//   { title: 'Software Engineer', stressRating: 3, feedback: [] },
//   { title: 'Data Scientist', stressRating: 4, feedback: [] },
//   { title: 'Web Developer', stressRating: 2, feedback: [] },
//   { title: 'Product Manager', stressRating: 5, feedback: [] },
//   { title: 'Graphic Designer', stressRating: 3, feedback: [] },
//   { title: 'Marketing Specialist', stressRating: 4, feedback: [] },
//   { title: 'Sales Executive', stressRating: 4, feedback: [] },
//   { title: 'HR Manager', stressRating: 3, feedback: [] },
//   { title: 'Customer Service Representative', stressRating: 5, feedback: [] },
//   { title: 'Business Analyst', stressRating: 3, feedback: [] },
//   { title: 'Project Manager', stressRating: 5, feedback: [] },
//   { title: 'DevOps Engineer', stressRating: 4, feedback: [] },
//   { title: 'System Administrator', stressRating: 3, feedback: [] },
//   { title: 'Network Engineer', stressRating: 4, feedback: [] },
//   { title: 'Data Analyst', stressRating: 3, feedback: [] },
// ];

// const getIcon = (stressRating) => {
//   if (stressRating <= 2) return <FaSmile className="text-green-500" />;
//   if (stressRating === 3) return <FaMeh className="text-yellow-500" />;
//   return <FaFrown className="text-red-500" />;
// };

// const JobStressRatings = () => {
//   const [selectedJob, setSelectedJob] = useState(jobStressData[0]);
//   const [userRating, setUserRating] = useState(3);
//   const [feedbackComment, setFeedbackComment] = useState('');

//   const handleJobChange = (event) => {
//     const jobTitle = event.target.value;
//     const job = jobStressData.find((job) => job.title === jobTitle);
//     setSelectedJob(job);
//   };

//   const handleRatingChange = (event) => {
//     setUserRating(parseInt(event.target.value));
//   };

//   const handleCommentChange = (event) => {
//     setFeedbackComment(event.target.value);
//   };

//   const submitFeedback = () => {
//     const updatedJob = { ...selectedJob };
//     updatedJob.feedback.push({ rating: userRating, comment: feedbackComment });
//     setSelectedJob(updatedJob);
//     setUserRating(3); // Reset the slider
//     setFeedbackComment(''); // Reset the comment

//     // Update the job stress data
//     const index = jobStressData.findIndex((job) => job.title === updatedJob.title);
//     jobStressData[index] = updatedJob;
//   };

//   const calculateAverageRating = () => {
//     const feedback = selectedJob.feedback;
//     if (feedback.length === 0) return selectedJob.stressRating;
//     const total = feedback.reduce((sum, item) => sum + item.rating, 0);
//     return (total / feedback.length).toFixed(1);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 to-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Job Stress Ratings</h1>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="job-select">
//           Select Job Title:
//         </label>
//         <select
//           id="job-select"
//           value={selectedJob.title}
//           onChange={handleJobChange}
//           className="border border-gray-300 rounded-md p-2 w-full"
//         >
//           {jobStressData.map((job) => (
//             <option key={job.title} value={job.title}>
//               {job.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <table className="min-w-full bg-white border border-gray-300 mb-6">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b text-left">Job Title</th>
//             <th className="py-2 px-4 border-b text-left">Average Stress Rating</th>
//             <th className="py-2 px-4 border-b text-left">Icon</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="hover:bg-gray-100">
//             <td className="py-2 px-4 border-b">{selectedJob.title}</td>
//             <td className="py-2 px-4 border-b">{calculateAverageRating()}</td>
//             <td className="py-2 px-4 border-b">{getIcon(calculateAverageRating())}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="stress-rating">
//           Provide Your Stress Rating:
//         </label>
//         <input
//           type="range"
//           id="stress-rating"
//           min="1"
//           max="5"
//           value={userRating}
//           onChange={handleRatingChange}
//           className="w-full"
//         />
//         <div className="text-center mt-2">{userRating}</div>
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback-comment">
//           Provide Your Feedback:
//         </label>
//         <textarea
//           id="feedback-comment"
//           value={feedbackComment}
//           onChange={handleCommentChange}
//           className="w-full border border-gray-300 rounded-md p-2"
//           rows="4"
//           placeholder="Share your experience..."
//         ></textarea>
//       </div>

//       <button
//         onClick={submitFeedback}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit Feedback
//       </button>

//       <div className="mt-6">
//         <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
//         {selectedJob.feedback.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {selectedJob.feedback.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <strong>Rating:</strong> {item.rating} - <em>{item.comment}</em>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No feedback yet for {selectedJob.title}.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobStressRatings;









// import React, { useState } from 'react';
// import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

// const jobStressData = [
//   { title: 'Software Engineer', stressRating: 3, feedback: [] },
//   { title: 'Data Scientist', stressRating: 4, feedback: [] },
//   { title: 'Web Developer', stressRating: 2, feedback: [] },
//   { title: 'Product Manager', stressRating: 5, feedback: [] },
//   { title: 'Graphic Designer', stressRating: 3, feedback: [] },
//   { title: 'Marketing Specialist', stressRating: 4, feedback: [] },
//   { title: 'Sales Executive', stressRating: 4, feedback: [] },
//   { title: 'HR Manager', stressRating: 3, feedback: [] },
//   { title: 'Customer Service Representative', stressRating: 5, feedback: [] },
//   { title: 'Business Analyst', stressRating: 3, feedback: [] },
//   { title: 'Project Manager', stressRating: 5, feedback: [] },
//   { title: 'DevOps Engineer', stressRating: 4, feedback: [] },
//   { title: 'System Administrator', stressRating: 3, feedback: [] },
//   { title: 'Network Engineer', stressRating: 4, feedback: [] },
//   { title: 'Data Analyst', stressRating: 3, feedback: [] },
// ];

// const getIcon = (stressRating) => {
//   if (stressRating <= 2) return <FaSmile className="text-green-500" />;
//   if (stressRating === 3) return <FaMeh className="text-yellow-500" />;
//   return <FaFrown className="text-red-500" />;
// };

// const JobStressRatings = () => {
//   const [selectedJob, setSelectedJob] = useState(jobStressData[0]);
//   const [userRating, setUserRating] = useState(3);
//   const [feedbackComment, setFeedbackComment] = useState('');

//   const handleJobChange = (event) => {
//     const jobTitle = event.target.value;
//     const job = jobStressData.find((job) => job.title === jobTitle);
//     setSelectedJob(job);
//   };

//   const handleRatingChange = (event) => {
//     setUserRating(parseInt(event.target.value));
//   };

//   const handleCommentChange = (event) => {
//     setFeedbackComment(event.target.value);
//   };

//   const submitFeedback = () => {
//     const updatedJob = { ...selectedJob };
//     updatedJob.feedback.push({ rating: userRating, comment: feedbackComment });
//     setSelectedJob(updatedJob);
//     setUserRating(3); // Reset the slider
//     setFeedbackComment(''); // Reset the comment

//     // Update the job stress data
//     const index = jobStressData.findIndex((job) => job.title === updatedJob.title);
//     jobStressData[index] = updatedJob;
//   };

//   const calculateAverageRating = () => {
//     const feedback = selectedJob.feedback;
//     if (feedback.length === 0) return selectedJob.stressRating;
//     const total = feedback.reduce((sum, item) => sum + item.rating, 0);
//     return (total / feedback.length).toFixed(1);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 to-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Job Stress Ratings</h1>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="job-select">
//           Select Job Title:
//         </label>
//         <select
//           id="job-select"
//           value={selectedJob.title}
//           onChange={handleJobChange}
//           className="border border-gray-300 rounded-md p-2 w-full"
//         >
//           {jobStressData.map((job) => (
//             <option key={job.title} value={job.title}>
//               {job.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <table className="min-w-full bg-white border border-gray-300 mb-6">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b text-left">Job Title</th>
//             <th className="py-2 px-4 border-b text-left">Average Stress Rating</th>
//             <th className="py-2 px-4 border-b text-left">Icon</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="hover:bg-gray-100">
//             <td className="py-2 px-4 border-b">{selectedJob.title}</td>
//             <td className="py-2 px-4 border-b">{calculateAverageRating()}</td>
//             <td className="py-2 px-4 border-b">{getIcon(calculateAverageRating())}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="stress-rating">
//           Provide Your Stress Rating:
//         </label>
//         <input
//           type="range"
//           id="stress-rating"
//           min="1"
//           max="5"
//           value={userRating}
//           onChange={handleRatingChange}
//           className="w-full"
//         />
//         <div className="text-center mt-2">{userRating}</div>
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback-comment">
//           Provide Your Feedback:
//         </label>
//         <textarea
//           id="feedback-comment"
//           value={feedbackComment}
//           onChange={handleCommentChange}
//           className="w-full border border-gray-300 rounded-md p-2"
//           rows="4"
//           placeholder="Share your experience..."
//         ></textarea>
//       </div>

//       <button
//         onClick={submitFeedback}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit Feedback
//       </button>

//       <div className="mt-6">
//         <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
//         {selectedJob.feedback.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {selectedJob.feedback.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <strong>Rating:</strong> {item.rating} - <em>{item.comment}</em>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No feedback yet for {selectedJob.title}.</p>
//         )}
//       </div>

//       <div className="mt-6">
//         <h2 className="text-2xl font-bold mb-4">Previous Feedback for {selectedJob.title}</h2>
//         {selectedJob.feedback.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {selectedJob.feedback.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <strong>Rating:</strong> {item.rating} - <em>{item.comment}</em>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No previous feedback for {selectedJob.title}.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobStressRatings;




// import React, { useState } from 'react';
// import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

// const jobStressData = [
//   { title: 'Software Engineer', stressRating: 3, feedback: [] },
//   { title: 'Data Scientist', stressRating: 4, feedback: [] },
//   { title: 'Web Developer', stressRating: 2, feedback: [] },
//   { title: 'Product Manager', stressRating: 5, feedback: [] },
//   { title: 'Graphic Designer', stressRating: 3, feedback: [] },
//   { title: 'Marketing Specialist', stressRating: 4, feedback: [] },
//   { title: 'Sales Executive', stressRating: 4, feedback: [] },
//   { title: 'HR Manager', stressRating: 3, feedback: [] },
//   { title: 'Customer Service Representative', stressRating: 5, feedback: [] },
//   { title: 'Business Analyst', stressRating: 3, feedback: [] },
//   { title: 'Project Manager', stressRating: 5, feedback: [] },
//   { title: 'DevOps Engineer', stressRating: 4, feedback: [] },
//   { title: 'System Administrator', stressRating: 3, feedback: [] },
//   { title: 'Network Engineer', stressRating: 4, feedback: [] },
//   { title: 'Data Analyst', stressRating: 3, feedback: [] },
// ];

// const getIcon = (stressRating) => {
//   if (stressRating <= 2) return <FaSmile className="text-green-500" />;
//   if (stressRating === 3) return <FaMeh className="text-yellow-500" />;
//   return <FaFrown className="text-red-500" />;
// };

// const JobStressRatings = () => {
//   const [selectedJob, setSelectedJob] = useState(jobStressData[0]);
//   const [userRating, setUserRating] = useState(3);
//   const [feedbackComment, setFeedbackComment] = useState('');

//   const handleJobChange = (event) => {
//     const jobTitle = event.target.value;
//     const job = jobStressData.find((job) => job.title === jobTitle);
//     setSelectedJob(job);
//   };

//   const handleRatingChange = (event) => {
//     setUserRating(parseInt(event.target.value));
//   };

//   const handleCommentChange = (event) => {
//     setFeedbackComment(event.target.value);
//   };

//   const submitFeedback = () => {
//     const updatedJob = { ...selectedJob };
//     updatedJob.feedback.push({ rating: userRating, comment: feedbackComment });
//     setSelectedJob(updatedJob);
//     setUserRating(3); // Reset the slider
//     setFeedbackComment(''); // Reset the comment

//     // Update the job stress data
//     const index = jobStressData.findIndex((job) => job.title === updatedJob.title);
//     jobStressData[index] = updatedJob;
//   };

//   const calculateAverageRating = () => {
//     const feedback = selectedJob.feedback;
//     if (feedback.length === 0) return selectedJob.stressRating;
//     const total = feedback.reduce((sum, item) => sum + item.rating, 0);
//     return (total / feedback.length).toFixed(1);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Job Stress Ratings</h1>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="job-select">
//           Select Job Title:
//         </label>
//         <select
//           id="job-select"
//           value={selectedJob.title}
//           onChange={handleJobChange}
//           className="border border-gray-300 rounded-md p-2 w-full"
//         >
//           {jobStressData.map((job) => (
//             <option key={job.title} value={job.title}>
//               {job.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <table className="min-w-full bg-white border border-gray-300 mb-6">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b text-left">Job Title</th>
//             <th className="py-2 px-4 border-b text-left">Average Stress Rating</th>
//             <th className="py-2 px-4 border-b text-left">Icon</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="hover:bg-gray-100">
//             <td className="py-2 px-4 border-b">{selectedJob.title}</td>
//             <td className="py-2 px-4 border-b">{calculateAverageRating()}</td>
//             <td className="py-2 px-4 border-b">{getIcon(calculateAverageRating())}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="stress-rating">
//           Provide Your Stress Rating:
//         </label>
//         <input
//           type="range"
//           id="stress-rating"
//           min="1"
//           max="5"
//           value={userRating}
//           onChange={handleRatingChange}
//           className="w-full"
//         />
//         <div className="text-center mt-2">{userRating}</div>
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback-comment">
//           Provide Your Feedback:
//         </label>
//         <textarea
//           id="feedback-comment"
//           value={feedbackComment}
//           onChange={handleCommentChange}
//           className="w-full border border-gray-300 rounded-md p-2"
//           rows="4"
//           placeholder="Share your experience..."
//         ></textarea>
//       </div>

//       <button
//         onClick={submitFeedback}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit Feedback
//       </button>

//       <div className="mt-6">
//         <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
//         {selectedJob.feedback.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {selectedJob.feedback.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <strong>Rating:</strong> {item.rating} - <em>{item.comment}</em>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No feedback yet for {selectedJob.title}.</p>
//         )}
//       </div>

//       <div className="mt-6">
//         <h2 className="text-2xl font-bold mb-4">Previous Feedback for {selectedJob.title}</h2>
//         {selectedJob.feedback.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {selectedJob.feedback.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <strong>Rating:</strong> {item.rating} - <em>{item.comment}</em>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No previous feedback for {selectedJob.title}.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobStressRatings;








import React, { useState } from 'react';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

const jobStressData = [
  { title: 'Software Engineer', stressRating: 3, feedback: [] },
  { title: 'Data Scientist', stressRating: 4, feedback: [] },
  { title: 'Web Developer', stressRating: 2, feedback: [] },
  { title: 'Product Manager', stressRating: 5, feedback: [] },
  { title: 'Graphic Designer', stressRating: 3, feedback: [] },
  { title: 'Marketing Specialist', stressRating: 4, feedback: [] },
  { title: 'Sales Executive', stressRating: 4, feedback: [] },
  { title: 'HR Manager', stressRating: 3, feedback: [] },
  { title: 'Customer Service Representative', stressRating: 5, feedback: [] },
  { title: 'Business Analyst', stressRating: 3, feedback: [] },
  { title: 'Project Manager', stressRating: 5, feedback: [] },
  { title: 'DevOps Engineer', stressRating: 4, feedback: [] },
  { title: 'System Administrator', stressRating: 3, feedback: [] },
  { title: 'Network Engineer', stressRating: 4, feedback: [] },
  { title: 'Data Analyst', stressRating: 3, feedback: [] },
];

const getIcon = (stressRating) => {
  if (stressRating <= 2) return <FaSmile className="text-teal-500" />;
  if (stressRating === 3) return <FaMeh className="text-yellow-500" />;
  return <FaFrown className="text-red-500" />;
};

const JobStressRatings = () => {
  const [selectedJob, setSelectedJob] = useState(jobStressData[0]);
  const [userRating, setUserRating] = useState(3);
  const [feedbackComment, setFeedbackComment] = useState('');

  const handleJobChange = (event) => {
    const jobTitle = event.target.value;
    const job = jobStressData.find((job) => job.title === jobTitle);
    setSelectedJob(job);
  };

  const handleRatingChange = (event) => {
    setUserRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setFeedbackComment(event.target.value);
  };

  const submitFeedback = () => {
    const updatedJob = { ...selectedJob };
    updatedJob.feedback.push({ rating: userRating, comment: feedbackComment });
    setSelectedJob(updatedJob);
    setUserRating(3);
    setFeedbackComment('');

    const index = jobStressData.findIndex((job) => job.title === updatedJob.title);
    jobStressData[index] = updatedJob;
  };

  const calculateAverageRating = () => {
    const feedback = selectedJob.feedback;
    if (feedback.length === 0) return selectedJob.stressRating;
    const total = feedback.reduce((sum, item) => sum + item.rating, 0);
    return (total / feedback.length).toFixed(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-pink-50 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-teal-700">Job Stress Ratings</h1>

      <div className="mb-4">
        <label className="block text-teal-800 font-semibold mb-2" htmlFor="job-select">
          Select Job Title:
        </label>
        <select
          id="job-select"
          value={selectedJob.title}
          onChange={handleJobChange}
          className="border border-gray-300 rounded-md p-2 w-full bg-white shadow-sm"
        >
          {jobStressData.map((job) => (
            <option key={job.title} value={job.title}>
              {job.title}
            </option>
          ))}
        </select>
      </div>

      <table className="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
          <tr className="bg-teal-100 text-teal-800">
            <th className="py-2 px-4 border-b text-left">Job Title</th>
            <th className="py-2 px-4 border-b text-left">Average Stress Rating</th>
            <th className="py-2 px-4 border-b text-left">Icon</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-teal-50">
            <td className="py-2 px-4 border-b">{selectedJob.title}</td>
            <td className="py-2 px-4 border-b">{calculateAverageRating()}</td>
            <td className="py-2 px-4 border-b">{getIcon(calculateAverageRating())}</td>
          </tr>
        </tbody>
      </table>

      <div className="mb-6">
        <label className="block text-teal-800 font-semibold mb-2" htmlFor="stress-rating">
          Provide Your Stress Rating:
        </label>
        <input
          type="range"
          id="stress-rating"
          min="1"
          max="5"
          value={userRating}
          onChange={handleRatingChange}
          className="w-full bg-teal-200"
        />
        <div className="text-center mt-2 text-teal-700 font-medium">{userRating}</div>
      </div>

      <div className="mb-6">
        <label className="block text-teal-800 font-semibold mb-2" htmlFor="feedback-comment">
          Provide Your Feedback:
        </label>
        <textarea
          id="feedback-comment"
          value={feedbackComment}
          onChange={handleCommentChange}
          className="w-full border border-gray-300 rounded-md p-2 bg-pink-100"
          rows="4"
          placeholder="Share your experience..."
        ></textarea>
      </div>

      <button
        onClick={submitFeedback}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Submit Feedback
      </button>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4 text-teal-800">User Feedback</h2>
        {selectedJob.feedback.length > 0 ? (
          <ul className="list-disc pl-5 text-teal-700">
            {selectedJob.feedback.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>Rating:</strong> {item.rating} - <em>{item.comment}</em>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-teal-600">No feedback yet for {selectedJob.title}.</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4 text-teal-800">Previous Feedback for {selectedJob.title}</h2>
        {selectedJob.feedback.length > 0 ? (
          <ul className="list-disc pl-5 text-teal-700">
            {selectedJob.feedback.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>Rating:</strong> {item.rating} - <em>{item.comment}</em>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-teal-600">No previous feedback for {selectedJob.title}.</p>
        )}
      </div>
    </div>
  );
};

export default JobStressRatings;






