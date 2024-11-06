// import Navbar from './shared/Navbar';
// import FilterCard from './FilterCard';
// import { motion } from 'framer-motion';
// import Job from './Job';
// import { useSelector } from 'react-redux';

// const Jobs = () => {
//     const { allJobs } = useSelector(store => store.job); // Get all jobs from the Redux store

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
//             <div className='max-w-7xl mx-auto mt-8'>
//                 <div className='flex gap-5'>
//                     <div className='w-1/5'>
//                         <FilterCard />
//                     </div>
//                     <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                         {allJobs.length === 0 ? (
//                             <span className='text-lg font-semibold text-gray-700'>No jobs available.</span>
//                         ) : (
//                             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//                                 {allJobs.map((job) => (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -20 }}
//                                         transition={{ duration: 0.3 }}
//                                         key={job?._id} // Use job._id as the key
//                                         className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                                     >
//                                         <Job job={job} /> {/* Pass the dynamic job data to the Job component */}
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Jobs;















// import Navbar from './shared/Navbar';
// import FilterCard from './FilterCard';
// import { motion } from 'framer-motion';
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { searchJobs } from '../redux/jobSlice'; // Import the searchJobs action

// const Jobs = () => {
//     const dispatch = useDispatch();
//     const { allJobs = [], filteredJobs = [] } = useSelector(store => store.job); // Get filteredJobs from Redux
//     const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

//     // Handle search input changes
//     const handleSearch = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value); // Update local state
//         dispatch(searchJobs(value)); // Dispatch searchJobs action with search term
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
//             <div className='max-w-7xl mx-auto mt-8'>
//                 <div className='flex gap-5'>
//                     <div className='w-1/5'>
//                         <FilterCard />
//                     </div>
//                     <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                         {/* Search input field */}
//                         <input
//                             type="text"
//                             value={searchTerm}
//                             onChange={handleSearch}
//                             placeholder="Search jobs..."
//                             className="mb-4 w-full p-2 border border-gray-300 rounded"
//                         />
//                         {(filteredJobs.length === 0 && allJobs.length === 0) ? ( // Display message if no jobs are available
//                             <span className='text-lg font-semibold text-gray-700'>No jobs available.</span>
//                         ) : (
//                             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//                                 {(filteredJobs.length ? filteredJobs : allJobs).map((job) => (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -20 }}
//                                         transition={{ duration: 0.3 }}
//                                         key={job?._id} // Use job._id as the key
//                                         className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                                     >
//                                         <Job job={job} /> {/* Pass the dynamic job data to the Job component */}
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Jobs;






// import Navbar from './shared/Navbar';
// import FilterCard from './FilterCard';
// import { motion } from 'framer-motion';
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { searchJobs } from '../redux/jobSlice';

// const Jobs = () => {
//     const dispatch = useDispatch();
//     const { allJobs = [], filteredJobs = [] } = useSelector(store => store.job);
//     const [searchTerm, setSearchTerm] = useState("");

//     const handleSearch = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         dispatch(searchJobs(value));
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
//             <div className='max-w-7xl mx-auto mt-8'>
//                 <div className='flex gap-5'>
//                     <div className='w-1/5'>
//                         <FilterCard />
//                     </div>
//                     <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                         <input
//                             type="text"
//                             value={searchTerm}
//                             onChange={handleSearch}
//                             placeholder="Search jobs..."
//                             className="mb-4 w-full p-2 border border-gray-300 rounded"
//                         />
//                         {(filteredJobs.length === 0 && allJobs.length === 0) ? (
//                             <span className='text-lg font-semibold text-gray-700'>No jobs available.</span>
//                         ) : (
//                             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//                                 {(filteredJobs.length ? filteredJobs : allJobs).map((job) => (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -20 }}
//                                         transition={{ duration: 0.3 }}
//                                         key={job?._id}
//                                         className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                                     >
//                                         <Job job={job} />
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Jobs;








import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import { motion } from 'framer-motion';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { searchJobs } from '../redux/jobSlice';
import { FiSearch } from 'react-icons/fi';

const Jobs = () => {
    const dispatch = useDispatch();
    const { allJobs = [], filteredJobs = [] } = useSelector(store => store.job);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        dispatch(searchJobs(value));
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className='max-w-7xl mx-auto mt-8'>
                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <FilterCard />
                    </div>
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className="relative mb-4">
                            <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={20} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Search your dream jobs here"
                                className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
                            />
                        </div>
                        {allJobs.length === 0 ? (
                            <span className='text-lg font-semibold text-gray-700'>No jobs available.</span>
                        ) : (
                            filteredJobs.length === 0 ? (
                                <span className='text-lg font-semibold text-gray-700'>Job not found.</span>
                            ) : (
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                                    {filteredJobs.map((job) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            key={job?._id}
                                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <Job job={job} />
                                        </motion.div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;







