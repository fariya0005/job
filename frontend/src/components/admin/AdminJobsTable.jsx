// import React, { useEffect, useState } from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const AdminJobsTable = () => { 
//     const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

//     const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//     const navigate = useNavigate();

//     useEffect(()=>{ 
//         console.log('called');
//         const filteredJobs = allAdminJobs.filter((job)=>{
//             if(!searchJobByText){
//                 return true;
//             };
//             return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

//         });
//         setFilterJobs(filteredJobs);
//     },[allAdminJobs,searchJobByText])
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent  posted jobs</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Company Name</TableHead>
//                         <TableHead>Role</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         filterJobs?.map((job) => (
//                             <tr>
//                                 <TableCell>{job?.company?.name}</TableCell>
//                                 <TableCell>{job?.title}</TableCell>
//                                 <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             <div onClick={()=> navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                                                 <Edit2 className='w-4' />
//                                                 <span>Edit</span>
//                                             </div>
//                                             <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
//                                                 <Eye className='w-4'/>
//                                                 <span>Applicants</span>
//                                             </div>
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </tr>

//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default AdminJobsTable



// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Avatar, AvatarImage } from '../ui/avatar';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const AdminJobsTable = () => {
//   const { allAdminJobs, searchJobByText } = useSelector(store => store.job);

//   const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const filteredJobs = allAdminJobs.filter(job => {
//       if (!searchJobByText) {
//         return true;
//       }
//       return (
//         job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
//         job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
//       );
//     });
//     setFilterJobs(filteredJobs);
//   }, [allAdminJobs, searchJobByText]);

//   return (
//     <div className="p-6 bg-gradient-to-br from-green-100 via-blue-100 to-white shadow-md rounded-md">
//       <Table className="min-w-full border-collapse border-spacing-0 bg-white rounded-md overflow-hidden">
//         <TableCaption className="text-gray-600 font-medium">
//           A list of your recently posted jobs
//         </TableCaption>
//         <TableHeader className="bg-gradient-to-r from-green-200 via-blue-200 to-white">
//           <TableRow>
//             <TableHead className="p-4 font-semibold text-gray-800">Company Name</TableHead>
//             <TableHead className="p-4 font-semibold text-gray-800">Role</TableHead>
//             <TableHead className="p-4 font-semibold text-gray-800">Date</TableHead>
//             <TableHead className="p-4 font-semibold text-gray-800 text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody className="bg-white divide-y divide-gray-200">
//           {filterJobs.length > 0 ? (
//             filterJobs.map((job) => (
//               <TableRow key={job._id} className="hover:bg-gray-50">
//                 <TableCell className="p-4">{job?.company?.name}</TableCell>
//                 <TableCell className="p-4">{job?.title}</TableCell>
//                 <TableCell className="p-4">{job?.createdAt.split("T")[0]}</TableCell>
//                 <TableCell className="p-4 text-right">
//                   <Popover>
//                     <PopoverTrigger>
//                       <button className="p-2 text-gray-500 hover:text-gray-700">
//                         <MoreHorizontal />
//                       </button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-36 bg-white shadow-lg p-2 rounded-lg">
//                       <div
//                         onClick={() => navigate(`/admin/companies/${job._id}`)}
//                         className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md"
//                       >
//                         <Edit2 className="w-4 text-green-600" />
//                         <span>Edit</span>
//                       </div>
//                       <div
//                         onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
//                         className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md mt-2"
//                       >
//                         <Eye className="w-4 text-blue-600" />
//                         <span>Applicants</span>
//                       </div>
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan="4" className="text-center p-4">
//                 No jobs found.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminJobsTable;





import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector(store => store.job);

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter(job => {
      if (!searchJobByText) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  // Status update handler
  const statusHandler = async (jobId, status) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/jobs/${jobId}/status`, // Adjust the API endpoint as needed
        { status }
      );
      console.log('Status updated:', response.data);

      // Optionally, update the state to reflect the new status
      setFilterJobs(prevJobs =>
        prevJobs.map(job => (job._id === jobId ? { ...job, status: response.data.status } : job))
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-100 via-blue-100 to-white shadow-md rounded-md">
      <Table className="min-w-full border-collapse border-spacing-0 bg-white rounded-md overflow-hidden">
        <TableCaption className="text-gray-600 font-medium">
          A list of your recently posted jobs
        </TableCaption>
        <TableHeader className="bg-gradient-to-r from-green-200 via-blue-200 to-white">
          <TableRow>
            <TableHead className="p-4 font-semibold text-gray-800">Company Name</TableHead>
            <TableHead className="p-4 font-semibold text-gray-800">Role</TableHead>
            <TableHead className="p-4 font-semibold text-gray-800">Date</TableHead>
            <TableHead className="p-4 font-semibold text-gray-800 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {filterJobs.length > 0 ? (
            filterJobs.map((job) => (
              <TableRow key={job._id} className="hover:bg-gray-50">
                <TableCell className="p-4">{job?.company?.name}</TableCell>
                <TableCell className="p-4">{job?.title}</TableCell>
                <TableCell className="p-4">{job?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="p-4 text-right">
                  <Popover>
                    <PopoverTrigger>
                      <button className="p-2 text-gray-500 hover:text-gray-700">
                        <MoreHorizontal />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-36 bg-white shadow-lg p-2 rounded-lg">
                      <div
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md"
                      >
                        <Edit2 className="w-4 text-green-600" />
                        <span>Edit</span>
                      </div>
                      <div
                        onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md mt-2"
                      >
                        <Eye className="w-4 text-blue-600" />
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="5" className="text-center p-4">
                No jobs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;



