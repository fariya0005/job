// import React from 'react';
// import { Badge } from './ui/badge';  // Assuming you have a Badge component
// import { useNavigate } from 'react-router-dom';

// const LatestJobCards = ({ job }) => {
//     const navigate = useNavigate();

//     return (
//         <div 
//             onClick={() => navigate(`/description/${job._id}`)} 
//             className='p-5 rounded-md shadow-lg bg-white border border-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105'
//             aria-label={`View details for ${job.title} at ${job.company}`}
//         >
//             {/* Company and Location */}
//             <div>
//                 <h1 className='font-medium text-lg text-[#6A38C2]'>{job.company}</h1>
//                 <p className='text-sm text-gray-500'>{job.location}</p>
//             </div>

//             {/* Job Title and Description */}
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job.title}</h1>
//                 <p className='text-sm text-gray-600'>{job.description?.slice(0, 100)}...</p>
//             </div>

//             {/* Badges for job details */}
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className='text-blue-700 font-bold' variant="ghost">
//                     {job.vacancies} Vacancies
//                 </Badge>
//                 <Badge className='text-[#F83002] font-bold' variant="ghost">
//                     {job.type}
//                 </Badge>
//                 <Badge className='text-[#7209b7] font-bold' variant="ghost">
//                     {job.salary} LPA
//                 </Badge>
//             </div>
//         </div>
//     );
// };

// export default LatestJobCards;




// import React from 'react';
// import { Badge } from './ui/badge';  // Assuming you have a Badge component
// import { useNavigate } from 'react-router-dom';

// const LatestJobCards = ({ job }) => {
//     const navigate = useNavigate();

//     return (
//         <div 
//             onClick={() => navigate(`/description/${job._id}`)} 
//             className='p-6 rounded-lg shadow-lg border border-gray-300 cursor-pointer transition-transform duration-300 transform-gpu hover:scale-105 bg-white hover:bg-gradient-to-br from-[#e3f2fd] to-[#f1f8e9] hover:border-[#64b5f6] hover:shadow-xl'
//             aria-label={`View details for ${job.title} at ${job.company}`}
//         >
//             {/* Company and Location */}
//             <div className="mb-4">
//                 <h1 className='font-semibold text-xl text-[#1976d2]'>{job.company}</h1>
//                 <p className='text-sm text-gray-600'>{job.location}</p>
//             </div>

//             {/* Job Title and Description */}
//             <div className="mb-6">
//                 <h1 className='font-bold text-lg text-gray-800'>{job.title}</h1>
//                 <p className='text-sm text-gray-700 transition-colors duration-200 hover:text-gray-600'>{job.description?.slice(0, 100)}...</p>
//             </div>

//             {/* Badges for job details */}
//             <div className='flex items-center gap-3'>
//                 <Badge className='bg-[#bbdefb] text-[#1976d2] px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[#90caf9] hover:text-white hover:shadow-md transition-shadow duration-200'>
//                     {job.vacancies} Vacancies
//                 </Badge>
//                 <Badge className='bg-[#ffccbc] text-[#d32f2f] px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[#ef9a9a] hover:text-white hover:shadow-md transition-shadow duration-200'>
//                     {job.type}
//                 </Badge>
//                 <Badge className='bg-[#e1bee7] text-[#6a1b9a] px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[#d81b60] hover:text-white hover:shadow-md transition-shadow duration-200'>
//                     {job.salary} LPA
//                 </Badge>
//             </div>
//         </div>
//     );
// };

// export default LatestJobCards;


// import React from 'react'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const LatestJobCards = ({job}) => {
//     const navigate = useNavigate();
//     return (
//         <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//             <div>
//                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                 <p className='text-sm text-gray-500'>India</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.vacancy} Vacanies</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>

//         </div>
//     )
// }

// export default LatestJobCards



import React from 'react';
import { Badge } from './ui/badge';  // Assuming you have a Badge component
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-6 rounded-lg shadow-lg border border-gray-300 cursor-pointer transition-transform duration-300 transform-gpu hover:scale-105 bg-white hover:bg-gradient-to-br from-[#e3f2fd] to-[#f1f8e9] hover:border-[#64b5f6] hover:shadow-xl'
            aria-label={`View details for ${job.title} at ${job.company.name}`}
        >
            {/* Company and Location */}
            <div className="mb-4">
                <h1 className='font-semibold text-xl text-[#1976d2]'>{job.company.name}</h1>
                <p className='text-sm text-gray-600'>{job.location}</p>
            </div>

            {/* Job Title and Description */}
            <div className="mb-6">
                <h1 className='font-bold text-lg text-gray-800'>{job.title}</h1>
                <p className='text-sm text-gray-700 transition-colors duration-200 hover:text-gray-600'>{job.description?.slice(0, 100)}...</p>
            </div>

            {/* Badges for job details */}
            <div className='flex items-center gap-3'>
                <Badge className='bg-[#bbdefb] text-[#1976d2] px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[#90caf9] hover:text-white hover:shadow-md transition-shadow duration-200'>
                    {job.vacancy} Vacancies
                </Badge>
                <Badge className='bg-[#ffccbc] text-[#d32f2f] px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[#ef9a9a] hover:text-white hover:shadow-md transition-shadow duration-200'>
                    {job.jobType}
                </Badge>
                <Badge className='bg-[#e1bee7] text-[#6a1b9a] px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[#d81b60] hover:text-white hover:shadow-md transition-shadow duration-200'>
                    {job.salary} LPA
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;





