// import React from 'react';
// import { Button } from './ui/button';
// import { Bookmark, MapPin, Heart } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { useNavigate } from 'react-router-dom';

// const Job = ({ job }) => {
//     const navigate = useNavigate();
//     const jobId = job?._id;

//     // Function to calculate the number of days since the job was posted
//     const daysAgoFunction = (mongodbTime) => {
//         if (!mongodbTime) return 'N/A';
//         const createdAt = new Date(mongodbTime);
//         const currentTime = new Date();
//         const timeDifference = currentTime - createdAt;
//         return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     };

//     return (
//         <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 transition-transform duration-300 hover:scale-105">
//             {/* Header with job posting time and favorite button */}
//             <div className="flex items-center justify-between mb-4">
//                 <p className="text-sm font-semibold text-gray-600">
//                     {daysAgoFunction(job?.createdAt) === 0 ? 'Posted today' : `${daysAgoFunction(job?.createdAt)} days ago`}
//                 </p>
//                 <Button variant="ghost" className="text-gray-500 hover:text-red-500">
//                     <Heart size={20} />
//                 </Button>
//             </div>

//             {/* Job title and company name */}
//             <div className="mb-4">
//                 <h2 className="text-xl font-bold text-gray-900 mb-2">{job.company.name}</h2>
//                 <h1 className='font-semibold text-xl text-[#1976d2]'>{job?.title }</h1>
//                 <div className="flex items-center text-sm font-medium text-gray-500">
//                     <MapPin className="mr-1 text-gray-500" />
//                     <span>{job?.location || 'India'}</span>
//                 </div>
//             </div>

//             {/* Job description */}
//             <div className="mb-4">
//                 <p className="text-sm text-gray-700 leading-relaxed">
//                     {job?.description || 'No job description available'}
//                 </p>
//             </div>

//             {/* Badges for position, job type, and salary */}
//             <div className="flex items-center gap-2 mt-4">
//                 <Badge className="bg-gray-50 text-gray-700 font-semibold px-3 py-1 rounded-full shadow-md hover:bg-gray-100 transition-colors">
//                     {job?.vacancy || 'N/A'} Vacancies
//                 </Badge>
//                 <Badge className="bg-gray-50 text-gray-700 font-semibold px-3 py-1 rounded-full shadow-md hover:bg-gray-100 transition-colors">
//                     {job?.jobType || 'Full-Time'}
//                 </Badge>
//                 <Badge className="bg-gray-50 text-gray-700 font-semibold px-3 py-1 rounded-full shadow-md hover:bg-gray-100 transition-colors">
//                     {job?.salary ? `${job.salary} LPA` : 'N/A'}
//                 </Badge>
//             </div>

//             {/* Action buttons */}
//             <div className="flex items-center gap-4 mt-6">
//                 <Button 
//                     onClick={() => navigate(`/description/${jobId}`)} 
//                     variant="outline" 
//                     className="px-5 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg shadow-sm"
//                 >
//                     View Details
//                 </Button>
//                 <Button 
//                     className="bg-green-500 text-white px-5 py-2 font-medium hover:bg-green-600 transition-colors rounded-lg shadow-md"
//                 >
//                     Save For Later
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default Job;

















import React from 'react';
import { Button } from './ui/button';
import { MapPin, Heart } from 'lucide-react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();
    const jobId = job?._id;

    // Calculate the number of days since the job was posted
    const daysAgoFunction = (mongodbTime) => {
        if (!mongodbTime) return 'N/A';
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl max-w-md mx-auto">
            {/* Header with job posting time and favorite button */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-gray-600">
                    {daysAgoFunction(job?.createdAt) === 0 ? 'Posted today' : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="ghost" className="text-gray-500 hover:text-red-500">
                    <Heart size={20} />
                </Button>
            </div>

            {/* Company name and job title */}
            <div className="mb-4">
                <h3 className="text-2xl font-bold text-blue-900">
                    {job.company.name|| 'Company Name Unavailable'}
                </h3>
                <h2 className="text-l font-semibold text-gray-600">{job?.title || 'Job Title Unavailable'}</h2>
                <div className="flex items-center text-sm font-medium text-gray-500 mt-1">
                    <MapPin className="mr-1 text-gray-400" />
                    <span>{job?.location || 'Location Unavailable'}</span>
                </div>
            </div>

            {/* Job description */}
            <div className="mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                    {job?.description || 'No job description available'}
                </p>
            </div>

            {/* Badges for position, job type, and salary */}
            <div className="flex items-center gap-2 mt-4">
                <Badge className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition-colors">
                    {job?.vacancy || 'N/A'} Vacancies
                </Badge>
                <Badge className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-green-200 transition-colors">
                    {job?.jobType || 'Full-Time'}
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-yellow-200 transition-colors">
                    {job?.salary ? `${job.salary} LPA` : 'Salary Unavailable'}
                </Badge>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 mt-6">
                <Button 
                    onClick={() => navigate(`/description/${jobId}`)} 
                    variant="outline" 
                    className="px-5 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg shadow-sm"
                >
                    View Details
                </Button>
                <Button 
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 font-medium hover:from-green-600 hover:to-green-700 transition-colors rounded-lg shadow-lg"
                >
                    Save For Later
                </Button>
            </div>
        </div>
    );
};

export default Job;
















