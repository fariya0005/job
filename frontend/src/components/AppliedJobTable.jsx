// import React from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
// import { Badge } from './ui/badge';

// const AppliedJobTable = ({ appliedJobs = [] }) => {
//     return (
//         <div className="w-full overflow-x-auto rounded-lg shadow-lg bg-white">
//             <Table className="min-w-full border border-gray-300 rounded-lg">
//                 <TableCaption className="text-gray-600">A list of your applied jobs</TableCaption>
//                 <TableHeader>
//                     <TableRow className="bg-gradient-to-r from-green-200 to-blue-300 text-gray-800">
//                         <TableHead className="py-3 px-4 font-semibold">Date</TableHead>
//                         <TableHead className="py-3 px-4 font-semibold">Job Role</TableHead>
//                         <TableHead className="py-3 px-4 font-semibold">Company</TableHead>
//                         <TableHead className="py-3 px-4 font-semibold text-right">Status</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         appliedJobs.length <= 0 ? 
//                         <TableRow>
//                             <TableCell colSpan={4} className="text-center py-4 text-gray-600">You haven't applied to any jobs yet.</TableCell>
//                         </TableRow> : 
//                         appliedJobs.map((appliedJob) => (
//                             <TableRow key={appliedJob._id} className="hover:bg-gray-100 transition-all duration-200">
//                                 <TableCell className="py-3 px-4 border-b border-gray-200">{new Date(appliedJob.createdAt).toLocaleDateString()}</TableCell>
//                                 <TableCell className="py-3 px-4 border-b border-gray-200">{appliedJob.job.title}</TableCell>
//                                 <TableCell className="py-3 px-4 border-b border-gray-200">{appliedJob.job.company.name}</TableCell>
//                                 <TableCell className="py-3 px-4 border-b border-gray-200 text-right">
//                                     <Badge 
//                                         className={`px-3 py-1 rounded-full text-white font-semibold 
//                                             ${appliedJob.status === "rejected" ? 'bg-red-500' 
//                                             : appliedJob.status === 'pending' ? 'bg-yellow-500' 
//                                             : 'bg-green-500'}`}>
//                                         {appliedJob.status.toUpperCase()}
//                                     </Badge>
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     );
// }

// export default AppliedJobTable;







// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Upload } from 'lucide-react';

// const AppliedJobTable = ({ appliedJobs }) => {
//     const [uploadedFiles, setUploadedFiles] = useState({});

//     const handleFileChange = (event, jobId) => {
//         const file = event.target.files[0];
//         setUploadedFiles(prev => ({
//             ...prev,
//             [jobId]: file
//         }));
//     };

//     return (
//         <div>
//             <table className="min-w-full table-auto">
//                 <thead>
//                     <tr>
//                         <th className="px-4 py-2 text-left">Job Title</th>
//                         <th className="px-4 py-2 text-left">Company</th>
//                         <th className="px-4 py-2 text-left">Status</th>
//                         <th className="px-4 py-2 text-left">Additional Documents</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {appliedJobs.map(job => (
//                         <tr key={job._id} className="border-t">
//                             <td className="px-4 py-2">{job.job.title}</td>
//                             <td className="px-4 py-2">{job.job.company.name}</td>
//                             <td className={`px-4 py-2 ${job.status === 'accepted' ? 'text-green-600' : job.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
//                                 {job.status}
//                             </td>
//                             <td className="px-4 py-2">
//                                 {job.needsDocument ? (
//                                     <div className="flex items-center gap-2">
//                                         <input 
//                                             type="file" 
//                                             onChange={(e) => handleFileChange(e, job._id)} 
//                                             className="text-sm" 
//                                         />
//                                         <Button variant="outline" className="text-green-700 hover:bg-green-50 border-green-700">
//                                             <Upload className="w-4 h-4" />
//                                         </Button>
//                                     </div>
//                                 ) : (
//                                     <span className="text-gray-500">No document needed</span>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {uploadedFiles && (
//                 <div className="mt-4">
//                     {Object.entries(uploadedFiles).map(([jobId, file]) => (
//                         <div key={jobId} className="text-sm text-gray-600">
//                             Uploaded {file.name} for job ID: {jobId}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AppliedJobTable;




// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Upload } from 'lucide-react';

// const AppliedJobTable = ({ appliedJobs }) => {
//     const [uploadedFiles, setUploadedFiles] = useState({});

//     const handleFileChange = (event, jobId) => {
//         const file = event.target.files[0];
//         setUploadedFiles(prev => ({
//             ...prev,
//             [jobId]: file
//         }));
//     };

//     return (
//         <div className="p-4 bg-white shadow-md rounded-md">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">My Applied Jobs</h2>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                         <th className="px-6 py-3 text-left">Job Title</th>
//                         <th className="px-6 py-3 text-left">Company</th>
//                         <th className="px-6 py-3 text-left">Status</th>
//                         <th className="px-6 py-3 text-left">Additional Documents</th>
//                     </tr>
//                 </thead>
//                 <tbody className="text-gray-700 text-sm font-light">
//                     {appliedJobs.map(job => (
//                         <tr key={job._id} className="border-b border-gray-200 hover:bg-gray-50">
//                             <td className="px-6 py-4 whitespace-nowrap">{job.job.title}</td>
//                             <td className="px-6 py-4">{job.job.company.name}</td>
//                             <td className={`px-6 py-4 ${job.status === 'accepted' ? 'text-green-600' : job.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
//                                 {job.status}
//                             </td>
//                             <td className="px-6 py-4">
//                                 {job.needsDocument ? (
//                                     <div className="space-y-2">
//                                         <div className="flex items-center gap-2">
//                                             <input 
//                                                 type="file" 
//                                                 onChange={(e) => handleFileChange(e, job._id)} 
//                                                 className="text-sm file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
//                                             />
//                                             <Button variant="outline" className="text-blue-700 hover:bg-blue-50 border-blue-700">
//                                                 <Upload className="w-4 h-4" />
//                                             </Button>
//                                         </div>
//                                         <div className="text-xs text-gray-500 italic">
//                                             {job.documentNote || "Educational Certificates Needed"}
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <span className="text-gray-500">No document needed</span>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {Object.keys(uploadedFiles).length > 0 && (
//                 <div className="mt-6 p-4 bg-gray-100 rounded-md">
//                     <h3 className="text-sm font-semibold text-gray-700">Uploaded Documents</h3>
//                     {Object.entries(uploadedFiles).map(([jobId, file]) => (
//                         <div key={jobId} className="text-sm text-gray-600">
//                             Uploaded {file.name} for Job ID: {jobId}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AppliedJobTable;





// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Upload } from 'lucide-react';
// import { Tooltip } from './ui/tooltip'; // Assuming you're using a UI library with tooltips
// import Modal from './ui/modal'; // Assuming you have a modal component

// const AppliedJobTable = ({ appliedJobs }) => {
//     const [uploadedFiles, setUploadedFiles] = useState({});
//     const [selectedJob, setSelectedJob] = useState(null);

//     const handleFileChange = (event, jobId) => {
//         const file = event.target.files[0];
//         setUploadedFiles(prev => ({
//             ...prev,
//             [jobId]: file
//         }));
//     };

//     const handleUploadModal = (job) => {
//         setSelectedJob(job);
//     };

//     const closeUploadModal = () => {
//         setSelectedJob(null);
//     };

//     return (
//         <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h2 className="text-2xl font-bold mb-6 text-gray-900">Applied Jobs Overview</h2>
//             <table className="min-w-full bg-white border border-gray-200 rounded-md">
//                 <thead className="bg-gray-100 border-b border-gray-200">
//                     <tr className="text-gray-600 text-sm font-semibold uppercase">
//                         <th className="px-6 py-4 text-left">Job Title</th>
//                         <th className="px-6 py-4 text-left">Company</th>
//                         <th className="px-6 py-4 text-left">Status</th>
//                         <th className="px-6 py-4 text-left">Additional Documents</th>
//                     </tr>
//                 </thead>
//                 <tbody className="text-gray-700">
//                     {appliedJobs.map(job => (
//                         <tr key={job._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
//                             <td className="px-6 py-4 font-medium">{job.job.title}</td>
//                             <td className="px-6 py-4">{job.job.company.name}</td>
//                             <td className={`px-6 py-4 font-semibold ${job.status === 'accepted' ? 'text-green-500' : job.status === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
//                                 {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
//                             </td>
//                             <td className="px-6 py-4">
//                                 {job.needsDocument ? (
//                                     <div className="flex items-center gap-2">
//                                         <Tooltip content={job.documentNote || "Upload Educational Certificates"} className="text-xs text-gray-500 italic">
//                                             <Button variant="outline" className="text-blue-600 hover:bg-blue-100 border-blue-600" onClick={() => handleUploadModal(job)}>
//                                                 <Upload className="w-4 h-4 mr-2" /> Upload
//                                             </Button>
//                                         </Tooltip>
//                                     </div>
//                                 ) : (
//                                     <span className="text-gray-500">No documents required</span>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Upload Modal */}
//             {selectedJob && (
//                 <Modal title={`Upload Documents for ${selectedJob.job.title}`} onClose={closeUploadModal}>
//                     <div className="p-4">
//                         <div className="mb-4">
//                             <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
//                                 Upload Document
//                             </label>
//                             <input 
//                                 id="file-upload" 
//                                 type="file" 
//                                 className="mt-2 block w-full text-sm text-gray-600 file:py-2 file:px-4 file:rounded file:border file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                                 onChange={(e) => handleFileChange(e, selectedJob._id)}
//                             />
//                         </div>
//                         <Button variant="solid" className="bg-green-600 text-white hover:bg-green-700 w-full">
//                             Submit
//                         </Button>
//                     </div>
//                 </Modal>
//             )}

//             {/* Display uploaded documents */}
//             {Object.keys(uploadedFiles).length > 0 && (
//                 <div className="mt-6 bg-gray-100 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-gray-700 mb-4">Uploaded Documents</h3>
//                     <ul className="space-y-2">
//                         {Object.entries(uploadedFiles).map(([jobId, file]) => (
//                             <li key={jobId} className="text-gray-600 text-sm">
//                                 <span className="font-medium text-gray-700">Job ID {jobId}:</span> {file.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AppliedJobTable;




// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Upload } from 'lucide-react';
// import Modal from './ui/modal'; // Import the modal

// const AppliedJobTable = ({ appliedJobs }) => {
//     const [uploadedFiles, setUploadedFiles] = useState({});
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedJob, setSelectedJob] = useState(null);

//     const handleFileChange = (event, jobId) => {
//         const file = event.target.files[0];
//         setUploadedFiles(prev => ({
//             ...prev,
//             [jobId]: file
//         }));
//         setSelectedJob(jobId);
//         setIsModalOpen(true); // Open modal after file upload
//     };

//     return (
//         <div className="p-4 bg-white shadow-md rounded-md">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">My Applied Jobs</h2>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                         <th className="px-6 py-3 text-left">Job Title</th>
//                         <th className="px-6 py-3 text-left">Company</th>
//                         <th className="px-6 py-3 text-left">Status</th>
//                         <th className="px-6 py-3 text-left">Additional Documents</th>
//                     </tr>
//                 </thead>
//                 <tbody className="text-gray-700 text-sm font-light">
//                     {appliedJobs.map(job => (
//                         <tr key={job._id} className="border-b border-gray-200 hover:bg-gray-50">
//                             <td className="px-6 py-4 whitespace-nowrap">{job.job.title}</td>
//                             <td className="px-6 py-4">{job.job.company.name}</td>
//                             <td className="px-6 py-4">
//                                 <span className={`px-2 py-1 rounded-full text-xs font-semibold ${job.status === 'accepted' ? 'bg-green-200 text-green-700' : job.status === 'rejected' ? 'bg-red-200 text-red-700' : 'bg-yellow-200 text-yellow-700'}`}>
//                                     {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
//                                 </span>
//                             </td>
//                             <td className="px-6 py-4">
//                                 {job.needsDocument ? (
//                                     <div className="space-y-2">
//                                         <div className="flex items-center gap-2">
//                                             <input
//                                                 type="file"
//                                                 onChange={(e) => handleFileChange(e, job._id)}
//                                                 className="text-sm file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                                             />
//                                             <Button variant="outline" className="text-blue-700 hover:bg-blue-50 border-blue-700">
//                                                 <Upload className="w-4 h-4" />
//                                             </Button>
//                                         </div>
//                                         <div className="text-xs text-gray-500 italic">
//                                             {job.documentNote || "Educational Certificates Needed"}
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <span className="text-gray-500">No document needed</span>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Modal for file upload success */}
//             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <div className="p-4">
//                     <h3 className="text-lg font-semibold">Document Uploaded</h3>
//                     <p className="text-sm text-gray-600 mt-2">Your document has been successfully uploaded for job ID {selectedJob}.</p>
//                     <Button onClick={() => setIsModalOpen(false)} className="mt-4">
//                         Close
//                     </Button>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default AppliedJobTable;





import { useNavigate } from 'react-router-dom';

const AppliedJobTable = () => {
    const navigate = useNavigate();

    const handleNavigateToDetails = (jobId) => {
        navigate(`/job-details/${jobId}`);
    };

    // Hardcoded applied jobs data
    const appliedJobs = [
        { id: "1", title: "Software Engineer", company: "Tech Solutions", status: "Pending" },
        { id: "2", title: "Data Scientist", company: "Data Corp", status: "Interview Scheduled" },
    ];

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">My Applied Jobs</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="px-6 py-3 text-left">Job Title</th>
                        <th className="px-6 py-3 text-left">Company</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light">
                    {appliedJobs.map(job => (
                        <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-6 py-4">{job.title}</td>
                            <td className="px-6 py-4">{job.company}</td>
                            <td className="px-6 py-4">{job.status}</td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => handleNavigateToDetails(job.id)}
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    See Detailed Status
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppliedJobTable;




























