// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     const statusHandler = async (status, id) => {
//         console.log('called');
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             console.log(res);
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     }

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied user</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         applicants && applicants?.applications?.map((item) => (
//                             <tr key={item._id}>
//                                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                                 <TableCell>{item?.applicant?.email}</TableCell>
//                                 <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                                 <TableCell >
//                                     {
//                                         item.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
//                                     }
//                                 </TableCell>
//                                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="float-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             {
//                                                 shortlistingStatus.map((status, index) => {
//                                                     return (
//                                                         <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
//                                                             <span>{status}</span>
//                                                         </div>
//                                                     )
//                                                 })
//                                             }
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

// export default ApplicantsTable



// import React from 'react';

// const ApplicantsTable = ({ applicants }) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone Number</th>
//                     <th>Applied On</th> {/* Column for createdAt */}
//                 </tr>
//             </thead>
//             <tbody>
//                 {applicants.map((applicant) => {
//                     // Check if the applicant object and createdAt property are defined
//                     const createdAt = applicant?.createdAt || 'N/A'; // Default value if createdAt is undefined
//                     return (
//                         <tr key={applicant._id}>
//                             <td>{applicant.fullname}</td>
//                             <td>{applicant.email}</td>
//                             <td>{applicant.phoneNumber}</td>
//                             <td>{createdAt}</td>
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     );
// };

// export default ApplicantsTable;







// import React, { useEffect } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     // Log applicants data for debugging
//     useEffect(() => {
//         console.log("Applicants Data:", applicants);
//     }, [applicants]);

//     const statusHandler = async (status, id) => {
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Something went wrong');
//         }
//     };

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied users</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {applicants?.applications?.map((item) => {
//                         const createdAt = item?.applicant?.createdAt?.split("T")[0] || 'N/A'; // Date formatting
//                         return (
//                             <TableRow key={item._id}>
//                                 <TableCell>{item?.applicant?.fullname || 'N/A'}</TableCell>
//                                 <TableCell>{item?.applicant?.email || 'N/A'}</TableCell>
//                                 <TableCell>{item?.applicant?.phoneNumber || 'N/A'}</TableCell>
//                                 <TableCell>
//                                     {item.applicant?.profile?.resume ? (
//                                         <a
//                                             className="text-blue-600 cursor-pointer"
//                                             href={item.applicant.profile.resume}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             {item.applicant.profile.resumeOriginalName}
//                                         </a>
//                                     ) : <span>NA</span>}
//                                 </TableCell>
//                                 <TableCell>{createdAt}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             {shortlistingStatus.map((status, index) => (
//                                                 <div
//                                                     key={index}
//                                                     onClick={() => statusHandler(status, item._id)}
//                                                     className="flex w-fit items-center my-2 cursor-pointer"
//                                                 >
//                                                     <span>{status}</span>
//                                                 </div>
//                                             ))}
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </TableRow>
//                         );
//                     })}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default ApplicantsTable;




// import React, { useEffect } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     // Log applicants data for debugging
//     useEffect(() => {
//         console.log("Applicants Data:", applicants);
//     }, [applicants]);

//     const statusHandler = async (status, id) => {
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Something went wrong');
//         }
//     };

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied users</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {applicants?.applications?.map((item) => {
//                         const createdAt = item?.createdAt?.split("T")[0] || 'N/A'; // Date formatting
//                         return (
//                             <TableRow key={item._id}>
//                                 <TableCell>{item?.fullname || 'N/A'}</TableCell> {/* Access fullname directly */}
//                                 <TableCell>{item?.email || 'N/A'}</TableCell> {/* Access email directly */}
//                                 <TableCell>{item?.phoneNumber || 'N/A'}</TableCell> {/* Access phoneNumber directly */}
//                                 <TableCell>
//                                     {item.profile?.resume ? (
//                                         <a
//                                             className="text-blue-600 cursor-pointer"
//                                             href={item.profile.resume}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             {item.profile.resumeOriginalName || "Resume"}
//                                         </a>
//                                     ) : <span>NA</span>}
//                                 </TableCell>
//                                 <TableCell>{createdAt}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             {shortlistingStatus.map((status, index) => (
//                                                 <div
//                                                     key={index}
//                                                     onClick={() => statusHandler(status, item._id)}
//                                                     className="flex w-fit items-center my-2 cursor-pointer"
//                                                 >
//                                                     <span>{status}</span>
//                                                 </div>
//                                             ))}
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </TableRow>
//                         );
//                     })}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default ApplicantsTable;



// import React, { useEffect } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     // Log applicants data for debugging
//     useEffect(() => {
//         console.log("Applicants Data:", applicants);
//     }, [applicants]);

//     const statusHandler = async (status, id) => {
//         console.log("Updating status for ID:", id); // Debug log for application ID
//         try {
//             axios.defaults.withCredentials = true; // Ensure credentials are sent with the request
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             if (res.data.success) {
//                 toast.success(res.data.message); // Show success message
//             } else {
//                 toast.error(res.data.message || 'Failed to update status'); // Show error message if any
//             }
//         } catch (error) {
//             console.error("Error updating status:", error); // Log error for debugging
//             toast.error(error.response?.data?.message || 'Something went wrong'); // Show user-friendly error message
//         }
//     };

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied users</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {applicants?.applications?.map((item) => {
//                         const createdAt = item?.createdAt?.split("T")[0] || 'N/A'; // Date formatting
//                         return (
//                             <TableRow key={item._id}>
//                                 <TableCell>{item?.fullname || 'N/A'}</TableCell>
//                                 <TableCell>{item?.email || 'N/A'}</TableCell>
//                                 <TableCell>{item?.phoneNumber || 'N/A'}</TableCell>
//                                 <TableCell>
//                                     {item.profile?.resume ? (
//                                         <a
//                                             className="text-blue-600 cursor-pointer"
//                                             href={item.profile.resume}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             {item.profile.resumeOriginalName || "Resume"}
//                                         </a>
//                                     ) : <span>NA</span>}
//                                 </TableCell>
//                                 <TableCell>{createdAt}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             {shortlistingStatus.map((status, index) => (
//                                                 <div
//                                                     key={index}
//                                                     onClick={() => statusHandler(status, item._id)}
//                                                     className="flex w-fit items-center my-2 cursor-pointer"
//                                                 >
//                                                     <span>{status}</span>
//                                                 </div>
//                                             ))}
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </TableRow>
//                         );
//                     })}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default ApplicantsTable;




// import React, { useEffect } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     useEffect(() => {
//         console.log("Applicants Data:", applicants); // Log applicants data for debugging
//     }, [applicants]);

//     const statusHandler = async (status, id) => {
//         console.log("Updating status for ID:", id); // Debug log for application ID
//         console.log("Sending status:", status); // Debug log for status
//         try {
//             axios.defaults.withCredentials = true; // Ensure credentials are sent with the request
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             if (res.data.success) {
//                 toast.success(res.data.message); // Show success message
//             } else {
//                 toast.error(res.data.message || 'Failed to update status'); // Show error message if any
//             }
//         } catch (error) {
//             console.error("Error updating status:", error); // Log error for debugging
//             toast.error(error.response?.data?.message || 'Something went wrong'); // Show user-friendly error message
//         }
//     };


//     const statusHandler = async (status, id) => {
//         console.log("Updating status for ID:", id); // Debug log for application ID
//         console.log("Sending status:", status); // Debug log for status
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`, // Ensure token is added if required
//                     'Content-Type': 'application/json', // Set content type
//                 },
//             });
    
//             console.log("Response from server:", res); // Debug log for response
    
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.error("Error updating status:", error); // Log unexpected errors
//             toast.error(error.response?.data?.message || 'Something went wrong');
//         }
//     };
    


//     const statusHandler = async (status, id) => {
//         console.log("Updating status for ID:", id); // Log the ID
//         console.log("Sending status:", status); // Log the status
        
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             console.log("Response:", res); // Log the response
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.error("Error updating status:", error); // Log the error
//             toast.error(error.response?.data?.message || 'Something went wrong');
//         }
//     };
    

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied users</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Full Name</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {applicants?.applications?.map((item) => {
//                         const createdAt = item?.createdAt?.split("T")[0] || 'N/A'; // Date formatting
//                         return (
//                             <TableRow key={item._id}>
//                                 <TableCell>{item?.fullname || 'N/A'}</TableCell>
//                                 <TableCell>{item?.email || 'N/A'}</TableCell>
//                                 <TableCell>{item?.phoneNumber || 'N/A'}</TableCell>
//                                 <TableCell>
//                                     {item.profile?.resume ? (
//                                         <a
//                                             className="text-blue-600 cursor-pointer"
//                                             href={item.profile.resume}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             {item.profile.resumeOriginalName || "Resume"}
//                                         </a>
//                                     ) : <span>N/A</span>}
//                                 </TableCell>
//                                 <TableCell>{createdAt}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             {shortlistingStatus.map((status, index) => (
//                                                 <div
//                                                     key={index}
//                                                     onClick={() => statusHandler(status, item._id)}
//                                                     className="flex w-fit items-center my-2 cursor-pointer"
//                                                 >
//                                                     <span>{status}</span>
//                                                 </div>
//                                             ))}
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </TableRow>
//                         );
//                     })}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default ApplicantsTable;





import React, { useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        console.log("Applicants Data:", applicants); // Log applicants data for debugging
    }, [applicants]);

    // const statusHandler = async (status, id) => {
    //     console.log("Updating status for ID:", id); // Debug log for application ID
    //     console.log("Sending status:", status); // Debug log for status
        
    //     try {
    //         axios.defaults.withCredentials = true; // Ensure credentials are sent with the request
    //         const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
            
    //         console.log("Response from server:", res); // Debug log for response
            
    //         if (res.data.success) {
    //             toast.success(res.data.message); // Show success message
    //         } else {
    //             toast.error(res.data.message || 'Failed to update status'); // Show error message if any
    //         }
    //     } catch (error) {
    //         console.error("Error updating status:", error); // Log error for debugging
    //         toast.error(error.response?.data?.message || 'Something went wrong'); // Show user-friendly error message
    //     }
    // };


    const statusHandler = async (status, id) => {
        console.log("Updating status for ID:", id); // Log the ID
        console.log("Sending status:", status); // Log the status
    
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
            
            console.log("Response from server:", res); // Log the response
            if (res.data.success) {
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message || 'Failed to update status');
            }
        } catch (error) {
            console.error("Error updating status:", error.response || error); // Log the full error response
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };
    

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applicants?.applications?.map((item) => {
                        const createdAt = item?.createdAt?.split("T")[0] || 'N/A'; // Date formatting
                        return (
                            <TableRow key={item._id}>
                                <TableCell>{item?.fullname || 'N/A'}</TableCell>
                                <TableCell>{item?.email || 'N/A'}</TableCell>
                                <TableCell>{item?.phoneNumber || 'N/A'}</TableCell>
                                <TableCell>
                                    {item.profile?.resume ? (
                                        <a
                                            className="text-blue-600 cursor-pointer"
                                            href={item.profile.resume}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.profile.resumeOriginalName || "Resume"}
                                        </a>
                                    ) : <span>N/A</span>}
                                </TableCell>
                                <TableCell>{createdAt}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {shortlistingStatus.map((status, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => statusHandler(status, item._id)}
                                                    className="flex w-fit items-center my-2 cursor-pointer"
                                                >
                                                    <span>{status}</span>
                                                </div>
                                            ))}
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default ApplicantsTable;


















