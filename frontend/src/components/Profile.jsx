// import React, { useState } from 'react';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const {user} = useSelector(store=>store.auth);

//     // Default avatar if no profile picture is uploaded
//     const defaultAvatar = "https://ui-avatars.com/api/?name=Fariya+Afrin&background=random";

//     // User's profile details
//     const user = {
//         // fullname: "Fariya Afrin",
//         // email: "fariya0005@gmail.com",
//         // phoneNumber: "9124470613",
//         // profile: {
//         //     avatar: "",  // Empty string simulates no avatar uploaded
//         //     bio: "Aspiring Software Engineer with a passion for AI and Machine Learning.",
//         //     skills: ["React", "Node.js", "Python", "AI"],
//             resume: "https://drive.google.com/file/d/1s3j-XvtEjNr5SUmu-4UrtAkZMqFX62Sj/view?usp=sharing",
//             resumeOriginalName: "Fariya_Afrin_Resume.pdf"
//         }
//     };

//     // Sample applied jobs data
//     const appliedJobs = [
//         {
//             _id: "job1",
//             createdAt: "2024-10-01T12:00:00Z",
//             job: {
//                 title: "Frontend Developer",
//                 company: {
//                     name: "Tech Solutions"
//                 }
//             },
//             status: "pending"
//         },
//         {
//             _id: "job2",
//             createdAt: "2024-10-02T12:00:00Z",
//             job: {
//                 title: "Backend Developer",
//                 company: {
//                     name: "Web Innovations"
//                 }
//             },
//             status: "accepted"
//         },
//         {
//             _id: "job3",
//             createdAt: "2024-10-03T12:00:00Z",
//             job: {
//                 title: "Data Scientist",
//                 company: {
//                     name: "Data Corp"
//                 }
//             },
//             status: "rejected"
//         }
//     ];

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-gray-800">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName}
//                         </a> : 
//                         <span className='text-gray-500'>NA</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 {/* Pass applied jobs data as a prop */}
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen}/>
//         </div>
//     );
// };

// export default Profile;



// import React, { useState } from 'react';
// import { useSelector } from 'react-redux'; // Ensure useSelector is imported
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth); // Retrieve user from Redux store

//     // Default avatar if no profile picture is uploaded
//     const defaultAvatar = "https://ui-avatars.com/api/?name=Fariya+Afrin&background=random";

//     // Constant resume details
//     const resume = {
//         url: "https://drive.google.com/file/d/1s3j-XvtEjNr5SUmu-4UrtAkZMqFX62Sj/view?usp=sharing",
//         originalName: "Resume.pdf"
//     };

//     // Sample applied jobs data
//     const appliedJobs = [
//         {
//             _id: "job1",
//             createdAt: "2024-10-01T12:00:00Z",
//             job: {
//                 title: "Frontend Developer",
//                 company: {
//                     name: "Tech Solutions"
//                 }
//             },
//             status: "pending"
//         },
//         {
//             _id: "job2",
//             createdAt: "2024-10-02T12:00:00Z",
//             job: {
//                 title: "Backend Developer",
//                 company: {
//                     name: "Web Innovations"
//                 }
//             },
//             status: "accepted"
//         },
//         {
//             _id: "job3",
//             createdAt: "2024-10-03T12:00:00Z",
//             job: {
//                 title: "Data Scientist",
//                 company: {
//                     name: "Data Corp"
//                 }
//             },
//             status: "rejected"
//         }
//     ];

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname || "Fariya Afrin"}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio || "Aspiring Software Engineer with a passion for AI and Machine Learning."}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "fariya0005@gmail.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "9124470613"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-gray-800">Resume</Label>
//                     <a 
//                         target='_blank' 
//                         href={resume.url} 
//                         className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                     >
//                         {resume.originalName}
//                     </a>
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 {/* Pass applied jobs data as a prop */}
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;


// import React, { useState } from 'react';
// import { useSelector } from 'react-redux'; // Ensure useSelector is imported
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth); // Retrieve user from Redux store

//     // Generic default avatar if no profile picture is uploaded
//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";

//     // Sample applied jobs data
//     const appliedJobs = [
//         {
//             _id: "job1",
//             createdAt: "2024-10-01T12:00:00Z",
//             job: {
//                 title: "Frontend Developer",
//                 company: {
//                     name: "Tech Solutions"
//                 }
//             },
//             status: "pending"
//         },
//         {
//             _id: "job2",
//             createdAt: "2024-10-02T12:00:00Z",
//             job: {
//                 title: "Backend Developer",
//                 company: {
//                     name: "Web Innovations"
//                 }
//             },
//             status: "accepted"
//         },
//         {
//             _id: "job3",
//             createdAt: "2024-10-03T12:00:00Z",
//             job: {
//                 title: "Data Scientist",
//                 company: {
//                     name: "Data Corp"
//                 }
//             },
//             status: "rejected"
//         }
//     ];

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio || "Aspiring Software Engineer with a passion for AI and Machine Learning."}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-gray-800">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 {/* Pass applied jobs data as a prop */}
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;



// import React, { useState } from 'react';
// import { useSelector } from 'react-redux'; // Ensure useSelector is imported
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth); // Retrieve user from Redux store

//     // Default avatar if no profile picture is uploaded
//     const defaultAvatar = "https://ui-avatars.com/api/?name=Fariya+Afrin&background=random";

//     // Constant resume details (or use actual user details if available)
//     const resume = {
//         url: "https://drive.google.com/file/d/1s3j-XvtEjNr5SUmu-4UrtAkZMqFX62Sj/view?usp=sharing",
//         originalName: "Resume.pdf"
//     };

//     // Sample applied jobs data
//     const appliedJobs = [
//         {
//             _id: "job1",
//             createdAt: "2024-10-01T12:00:00Z",
//             job: {
//                 title: "Frontend Developer",
//                 company: {
//                     name: "Tech Solutions"
//                 }
//             },
//             status: "pending"
//         },
//         {
//             _id: "job2",
//             createdAt: "2024-10-02T12:00:00Z",
//             job: {
//                 title: "Backend Developer",
//                 company: {
//                     name: "Web Innovations"
//                 }
//             },
//             status: "accepted"
//         },
//         {
//             _id: "job3",
//             createdAt: "2024-10-03T12:00:00Z",
//             job: {
//                 title: "Data Scientist",
//                 company: {
//                     name: "Data Corp"
//                 }
//             },
//             status: "rejected"
//         }
//     ];

//     // Function to generate proper Google Drive link for resume if needed
//     const getResumeLink = (resumeUrl) => {
//         // Check if the URL is a Google Drive link
//         if (resumeUrl.includes('drive.google.com')) {
//             const fileId = resumeUrl.match(/[-\w]{25,}/);
//             return `https://drive.google.com/uc?export=download&id=${fileId}`;
//         }
//         return resumeUrl;
//     };

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname || "Fariya Afrin"}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio || "Aspiring Software Engineer with a passion for AI and Machine Learning."}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "fariya0005@gmail.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "9124470613"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-gray-800">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             href={getResumeLink(user?.profile?.resume)} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 {/* Pass applied jobs data as a prop */}
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;




// import React, { useState } from 'react';
// import { useSelector } from 'react-redux'; // Ensure useSelector is imported
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth); // Retrieve user from Redux store

//     // Generic default avatar if no profile picture is uploaded
//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";

//     // Sample applied jobs data
//     const appliedJobs = [
//         {
//             _id: "job1",
//             createdAt: "2024-10-01T12:00:00Z",
//             job: {
//                 title: "Frontend Developer",
//                 company: {
//                     name: "Tech Solutions"
//                 }
//             },
//             status: "pending"
//         },
//         {
//             _id: "job2",
//             createdAt: "2024-10-02T12:00:00Z",
//             job: {
//                 title: "Backend Developer",
//                 company: {
//                     name: "Web Innovations"
//                 }
//             },
//             status: "accepted"
//         },
//         {
//             _id: "job3",
//             createdAt: "2024-10-03T12:00:00Z",
//             job: {
//                 title: "Data Scientist",
//                 company: {
//                     name: "Data Corp"
//                 }
//             },
//             status: "rejected"
//         }
//     ];

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio || "Write your  bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-green-700">Resume</Label> {/* Updated color */}
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 {/* Pass applied jobs data as a prop */}
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;















// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen, Upload } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth); // Retrieve user from Redux store

//     // Generic default avatar if no profile picture is uploaded
//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";

//     // Sample applied jobs data with status and document requirements
//     const appliedJobs = [
//         {
//             _id: "job1",
//             createdAt: "2024-10-01T12:00:00Z",
//             job: {
//                 title: "Frontend Developer",
//                 company: {
//                     name: "Tech Solutions"
//                 }
//             },
//             status: "pending", // Hardcoded application status
//             needsDocument: true // Hardcoded document requirement
//         },
//         {
//             _id: "job2",
//             createdAt: "2024-10-02T12:00:00Z",
//             job: {
//                 title: "Backend Developer",
//                 company: {
//                     name: "Web Innovations"
//                 }
//             },
//             status: "accepted", // Hardcoded application status
//             needsDocument: false // No additional document needed
//         },
//         {
//             _id: "job3",
//             createdAt: "2024-10-03T12:00:00Z",
//             job: {
//                 title: "Data Scientist",
//                 company: {
//                     name: "Data Corp"
//                 }
//             },
//             status: "rejected", // Hardcoded application status
//             needsDocument: false // No additional document needed
//         }
//     ];

//     // const appliedJobs = [
//     //     {
//     //         _id: '1',
//     //         job: { title: 'Software Engineer', company: { name: 'TechCorp' } },
//     //         status: 'pending',
//     //         needsDocument: true,
//     //         requiredDocuments: ['Resume', 'Cover Letter']
//     //     },
//     //     {
//     //         _id: '2',
//     //         job: { title: 'Data Analyst', company: { name: 'Data Inc.' } },
//     //         status: 'accepted',
//     //         needsDocument: true,
//     //         requiredDocuments: ['Resume', 'Certification']
//     //     }
//     // ];
    

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio || "Write your bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-green-700">Resume</Label> {/* Updated color */}  
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 {/* Pass applied jobs data as a prop */}
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;








// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth); // Retrieve user from Redux store

//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";

//     // Example dynamic applied jobs data
//     const appliedJobs = user?.appliedJobs || [];

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio || "Write your bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-green-700">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;









// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth); // Retrieve user from Redux store

//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";
//     const appliedJobs = user?.appliedJobs || []; // Get applied jobs dynamically from user

//     return (
//         <div className="bg-gradient-to-r from-green-200 via-blue-100 to-green-100 min-h-screen">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24 border-2 border-green-300 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-semibold text-3xl text-green-700'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-500 text-sm'>{user?.profile?.bio || "Write your bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 hover:bg-green-50 border border-green-700"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5" />
//                     </Button>
//                 </div>
//                 <div className='mt-8'>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-700'>Skills</h1>
//                     <div className='flex items-center gap-2 mt-3'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-3 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-green-700">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-700 mb-5'>Applied Jobs</h1>
//                 <AppliedJobTable appliedJobs={appliedJobs} /> {/* Pass appliedJobs as a prop */}
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;










// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth);

//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";
//     const appliedJobs = user?.appliedJobs || [];

//     return (
//         <div className="bg-gradient-to-r from-green-300 to-blue-200 min-h-screen p-6">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg my-5 p-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
//                 <div className='flex justify-between items-center mb-6'>
//                     <div className='flex items-center gap-5'>
//                         <Avatar className="h-28 w-28 border-4 border-green-400 rounded-full shadow-xl">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-bold text-4xl text-green-800'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-600 text-md mt-1'>{user?.profile?.bio || "Write your bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 border border-green-700 hover:bg-green-50 transition duration-150 shadow-sm"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5 mr-1" />
//                         Edit Profile
//                     </Button>
//                 </div>
//                 <div className='mt-6'>
//                     <div className='flex items-center gap-4 my-3'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-4 my-3'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-lg text-green-800 mb-2'>Skills</h1>
//                     <div className='flex items-center gap-3 mt-2'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-700 hover:bg-green-200 transition duration-150 shadow-md px-4 py-2 rounded-full font-medium'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-md font-bold text-green-800">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             rel='noopener noreferrer'
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-lg text-green-800 mb-4'>Applied Jobs</h1>
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;









// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth);

//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";
//     const appliedJobs = user?.appliedJobs || [];

//     return (
//         <div className="bg-gradient-to-r from-green-300 to-blue-200 min-h-screen p-6">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-300 rounded-3xl shadow-lg my-8 p-8 transition-transform duration-300 ease-in-out hover:scale-105'>
//                 <div className='flex justify-between items-start mb-6'>
//                     <div className='flex items-center gap-6'>
//                         <Avatar className="h-32 w-32 border-4 border-green-400 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-extrabold text-3xl text-green-900'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-600 text-lg mt-1'>{user?.profile?.bio || "Write your bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 border-2 border-green-700 hover:bg-green-50 transition duration-150 shadow-sm rounded-full px-4"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5 mr-1" />
//                         Edit Profile
//                     </Button>
//                 </div>
//                 <div className='mt-6'>
//                     <div className='flex items-center gap-4 my-4'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-4 my-4'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-xl text-green-900 mb-3'>Skills</h1>
//                     <div className='flex flex-wrap items-center gap-3 mt-2'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-800 hover:bg-green-200 transition duration-150 shadow-md px-4 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-lg font-bold text-green-900">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             rel='noopener noreferrer'
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-xl text-green-900 mb-5'>Applied Jobs</h1>
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;










// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth);

//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";
//     const appliedJobs = user?.appliedJobs || [];

//     return (
//         <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen p-6">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-300 rounded-3xl shadow-lg my-8 p-8 transition-transform duration-300 ease-in-out hover:scale-105'>
//                 <div className='flex justify-between items-start mb-6'>
//                     <div className='flex items-center gap-6'>
//                         <Avatar className="h-32 w-32 border-4 border-green-400 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-extrabold text-3xl text-green-900'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-600 text-lg mt-1'>{user?.profile?.bio || "Write your bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 border-2 border-green-700 hover:bg-green-50 transition duration-150 shadow-sm rounded-full px-4"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5 mr-1" />
//                         Edit Profile
//                     </Button>
//                 </div>
//                 <div className='mt-6'>
//                     <div className='flex items-center gap-4 my-4'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-4 my-4'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-xl text-green-900 mb-3'>Skills</h1>
//                     <div className='flex flex-wrap items-center gap-3 mt-2'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-800 hover:bg-green-200 transition duration-150 shadow-md px-4 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-lg font-bold text-green-900">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             rel='noopener noreferrer'
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-xl text-green-900 mb-5'>Applied Jobs</h1>
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;











// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';

// const Profile = () => {
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector((store) => store.auth);

//     const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";
//     const appliedJobs = user?.appliedJobs || [];

//     return (
//         <div className="bg-gradient-to-r from-green-100 via-blue-100 to-white min-h-screen p-6">
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-300 rounded-3xl shadow-lg my-8 p-8 transition-transform duration-300 ease-in-out hover:scale-105'>
//                 <div className='flex justify-between items-start mb-6'>
//                     <div className='flex items-center gap-6'>
//                         <Avatar className="h-32 w-32 border-4 border-green-400 rounded-full shadow-lg">
//                             <AvatarImage 
//                                 src={user?.profile?.avatar || defaultAvatar} 
//                                 alt="profile" 
//                                 className="rounded-full object-cover"
//                             />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-extrabold text-3xl text-green-900'>{user?.fullname || "Full Name"}</h1>
//                             <p className='text-gray-600 text-lg mt-1'>{user?.profile?.bio || "Write your bio"}</p>
//                         </div>
//                     </div>
//                     <Button 
//                         onClick={() => setOpen(true)} 
//                         className="text-green-700 border-2 border-green-700 hover:bg-green-50 transition duration-150 shadow-sm rounded-full px-4"
//                         variant="outline"
//                     >
//                         <Pen className="w-5 h-5 mr-1" />
//                         Edit Profile
//                     </Button>
//                 </div>
//                 <div className='mt-6'>
//                     <div className='flex items-center gap-4 my-4'>
//                         <Mail className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
//                     </div>
//                     <div className='flex items-center gap-4 my-4'>
//                         <Contact className='text-green-600' />
//                         <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h1 className='font-bold text-xl text-green-900 mb-3'>Skills</h1>
//                     <div className='flex flex-wrap items-center gap-3 mt-2'>
//                         {
//                             user?.profile?.skills?.length ? 
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge 
//                                     key={index} 
//                                     className='bg-green-100 text-green-800 hover:bg-green-200 transition duration-150 shadow-md px-4 py-1 rounded-full font-semibold'
//                                 >
//                                     {item}
//                                 </Badge>
//                             )) : 
//                             <span className='text-gray-500'>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
//                     <Label className="text-lg font-bold text-green-900">Resume</Label>
//                     {
//                         user?.profile?.resume ? 
//                         <a 
//                             target='_blank' 
//                             rel='noopener noreferrer'
//                             href={user?.profile?.resume} 
//                             className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
//                         >
//                             {user?.profile?.resumeOriginalName || "Resume.pdf"}
//                         </a> : 
//                         <span className='text-gray-500'>No resume uploaded</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 mt-5'>
//                 <h1 className='font-bold text-xl text-green-900 mb-5'>Applied Jobs</h1>
//                 <AppliedJobTable appliedJobs={appliedJobs} />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;


















import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);

    // Using a stylish avatar generator
    const defaultAvatar = "https://github.com/shadcn.png";
    const appliedJobs = user?.appliedJobs || [];

    return (
        <div className="bg-gradient-to-r from-green-100 via-blue-100 to-white min-h-screen p-6">
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-300 rounded-3xl shadow-lg my-8 p-8 transition-transform duration-300 ease-in-out hover:scale-105'>
                <div className='flex justify-between items-start mb-6'>
                    <div className='flex items-center gap-6'>
                        <Avatar className="h-32 w-32 border-4 border-green-400 rounded-full shadow-lg transition-transform transform hover:scale-105">
                            <AvatarImage 
                                src={user?.profile?.avatar || defaultAvatar} 
                                alt="profile" 
                                className="rounded-full object-cover"
                            />
                        </Avatar>
                        <div>
                            <h1 className='font-extrabold text-3xl text-green-900'>{user?.fullname || "Full Name"}</h1>
                            <p className='text-gray-600 text-lg mt-1'>{user?.profile?.bio || "Write your bio"}</p>
                        </div>
                    </div>
                    <Button 
                        onClick={() => setOpen(true)} 
                        className="text-green-700 border-2 border-green-700 hover:bg-green-50 transition duration-150 shadow-sm rounded-full px-4"
                        variant="outline"
                    >
                        <Pen className="w-5 h-5 mr-1" />
                        Edit Profile
                    </Button>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center gap-4 my-4'>
                        <Mail className='text-green-600' />
                        <span className='text-gray-700 font-medium'>{user?.email || "youremail@example.com"}</span>
                    </div>
                    <div className='flex items-center gap-4 my-4'>
                        <Contact className='text-green-600' />
                        <span className='text-gray-700 font-medium'>{user?.phoneNumber || "Your Phone Number"}</span>
                    </div>
                </div>
                <div className='mt-6'>
                    <h1 className='font-bold text-xl text-green-900 mb-3'>Skills</h1>
                    <div className='flex flex-wrap items-center gap-3 mt-2'>
                        {
                            user?.profile?.skills?.length ? 
                            user?.profile?.skills.map((item, index) => (
                                <Badge 
                                    key={index} 
                                    className='bg-green-100 text-green-800 hover:bg-green-200 transition duration-150 shadow-md px-4 py-1 rounded-full font-semibold'
                                >
                                    {item}
                                </Badge>
                            )) : 
                            <span className='text-gray-500'>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5 mt-8'>
                    <Label className="text-lg font-bold text-green-900">Resume</Label>
                    {
                        user?.profile?.resume ? 
                        <a 
                            target='_blank' 
                            rel='noopener noreferrer'
                            href={user?.profile?.resume} 
                            className='text-green-700 hover:underline cursor-pointer transition duration-150 font-medium'
                        >
                            {user?.profile?.resumeOriginalName || "Resume.pdf"}
                        </a> : 
                        <span className='text-gray-500'>No resume uploaded</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 mt-5'>
                <h1 className='font-bold text-xl text-green-900 mb-5'>Applied Jobs</h1>
                <AppliedJobTable appliedJobs={appliedJobs} />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;

