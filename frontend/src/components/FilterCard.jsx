// import React, { useEffect, useState } from 'react';
// import { Label } from './ui/label';
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { FaMapMarkerAlt, FaBriefcase, FaDollarSign } from 'react-icons/fa';

// const filterData = [
//     {
//         filterType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
//         icon: <FaMapMarkerAlt className="text-green-600 text-xl" />
//     },
//     {
//         filterType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
//         icon: <FaBriefcase className="text-green-600 text-xl" />
//     },
//     {
//         filterType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
//         icon: <FaDollarSign className="text-green-600 text-xl" />
//     },
// ];

// const FilterCard = () => {
//     const [selectedValues, setSelectedValues] = useState([]);
//     const dispatch = useDispatch();

//     // Change handler for the checkbox selection
//     const changeHandler = (value) => {
//         setSelectedValues((prev) => 
//             prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//         );
//     };

//     // Dispatch the selected values as search query whenever it changes
//     useEffect(() => {
//         if (selectedValues.length > 0) {
//             dispatch(setSearchedQuery(selectedValues));
//         } else {
//             dispatch(setSearchedQuery('')); // Clear query if no selection
//         }
//     }, [selectedValues, dispatch]);

//     return (
//         <div className='w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105'>
//             <h1 className='font-bold text-2xl text-gray-800 mb-4'>Filter Jobs</h1>
//             <hr className='border-gray-300 mb-4' />

//             {/* Checkbox for filtering jobs */}
//             <div>
//                 {filterData.map((data, index) => (
//                     <div key={index} className='mb-4'>
//                         <h2 className='font-semibold text-lg text-gray-700 mb-2 flex items-center'>
//                             {data.icon}
//                             <span className='ml-2'>{data.filterType}</span>
//                         </h2>
//                         {data.array.map((item, idx) => {
//                             const itemId = `id${index}-${idx}`;
//                             return (
//                                 <div className='flex items-center space-x-2 my-2' key={itemId}>
//                                     <input
//                                         type="checkbox"
//                                         id={itemId}
//                                         value={item}
//                                         checked={selectedValues.includes(item)} // Set checked state based on selected values
//                                         onChange={() => changeHandler(item)} // Use onChange for handling selection
//                                         className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition duration-200 ease-in-out"
//                                     />
//                                     <Label htmlFor={itemId} className='text-gray-600 cursor-pointer hover:text-green-700 transition-colors duration-200 ease-in-out'>
//                                         {item}
//                                     </Label>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FilterCard;



// import React, { useEffect, useState } from 'react';
// import { Label } from './ui/label';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery, filterJobs } from '@/redux/jobSlice'; // Assuming you have an action to filter jobs
// import { FaMapMarkerAlt, FaBriefcase, FaDollarSign } from 'react-icons/fa';

// const filterData = [
//     {
//         filterType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Chennai", "Kolkata"],
//         icon: <FaMapMarkerAlt className="text-green-600 text-xl" />
//     },
//     {
//         filterType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "Data Scientist", "Product Manager", "Designer"],
//         icon: <FaBriefcase className="text-green-600 text-xl" />
//     },
//     {
//         filterType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh", "5lakh to 10lakh", "10lakh+"],
//         icon: <FaDollarSign className="text-green-600 text-xl" />
//     },
// ];

// const FilterCard = () => {
//     const [selectedValues, setSelectedValues] = useState([]);
//     const dispatch = useDispatch();
//     const { filteredJobs } = useSelector(state => state.job); // Get filtered jobs from the Redux store

//     // Change handler for the checkbox selection
//     const changeHandler = (value) => {
//         setSelectedValues((prev) => 
//             prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//         );
//     };

//     // Dispatch the selected values as search query whenever it changes
//     useEffect(() => {
//         dispatch(setSearchedQuery(selectedValues)); // Dispatch search query to Redux
//         dispatch(filterJobs(selectedValues)); // Trigger filterJobs action to update filteredJobs
//     }, [selectedValues, dispatch]);

//     return (
//         <div className='w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105'>
//             <h1 className='font-bold text-2xl text-gray-800 mb-4'>Filter Jobs</h1>
//             <hr className='border-gray-300 mb-4' />

//             {/* Checkbox for filtering jobs */}
//             <div>
//                 {filterData.map((data, index) => (
//                     <div key={index} className='mb-4'>
//                         <h2 className='font-semibold text-lg text-gray-700 mb-2 flex items-center'>
//                             {data.icon}
//                             <span className='ml-2'>{data.filterType}</span>
//                         </h2>
//                         {data.array.map((item, idx) => {
//                             const itemId = `id${index}-${idx}`;
//                             return (
//                                 <div className='flex items-center space-x-2 my-2' key={itemId}>
//                                     <input
//                                         type="checkbox"
//                                         id={itemId}
//                                         value={item}
//                                         checked={selectedValues.includes(item)}
//                                         onChange={() => changeHandler(item)}
//                                         className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition duration-200 ease-in-out"
//                                     />
//                                     <Label htmlFor={itemId} className='text-gray-600 cursor-pointer hover:text-green-700 transition-colors duration-200 ease-in-out'>
//                                         {item}
//                                     </Label>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ))}
//             </div>

//             {/* Display filtered jobs or no jobs message */}
//             <div className='mt-8'>
//                 {filteredJobs.length === 0 ? (
//                     <p className='text-lg font-semibold text-gray-700'>No jobs available at this moment.</p>
//                 ) : (
//                     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//                         {filteredJobs.map(job => (
//                             <div key={job._id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
//                                 <h3 className='font-bold text-xl text-gray-800'>{job.title}</h3>
//                                 <p className='text-gray-600'>{job.location}</p>
//                                 <p className='text-gray-600'>{job.salary}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FilterCard;









// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { filterJobs } from '@/redux/jobSlice'; // Import filterJobs action

// const FilterCard = () => {
//     const [locationFilters, setLocationFilters] = useState([]);
//     const [titleFilters, settitleFilters] = useState([]);
//     const [salaryFilters, setSalaryFilters] = useState([]);
//     const dispatch = useDispatch();

//     // Sample data for locations, industries, and salary ranges
//     const filterData = [
//         {
//             filterType: 'Location',
//             icon: '📍', // Example icon
//             array: [
//                 'Bangalore',
//                 'Mumbai',
//                 'Delhi',
//                 'Hyderabad',
//                 'Chennai',
//                 'Pune',
//                 'Kolkata',
//                 'Ahmedabad',
//                 'Gurgaon',
//                 'Noida',
//                 'India',
//             ],
//         },
//         {
//             filterType: 'Title',
//             icon: '🏢', // Example icon
//             array: [
//                 'Software Development',
//                 'Web Development',
//                 'Data Science',
//                 'Cybersecurity',
//                 'Cloud Computing',
//                 'Artificial Intelligence',
//                 'DevOps',
//                 'Mobile App Development',
//                 'IT Support',
//                 'Network Administration',
//                 'Software Engineer',
//                 'SDE',
//             ],
//         },
//         {
//             filterType: 'Salary',
//             icon: '💰', // Example icon
//             array: [
//                 '0-3 LPA',
//                 '3-6 LPA',
//                 '6-10 LPA',
//                 '10-15 LPA',
//                 '15+ LPA',
//             ],
//         },
//     ];

//     const handleFilterChange = (filterType, value) => {
//         // Update the relevant filter state based on filterType
//         if (filterType === 'Location') {
//             setLocationFilters(prev =>
//                 prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
//             );
//         } else if (filterType === 'Industry') {
//             setIndustryFilters(prev =>
//                 prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
//             );
//         } else if (filterType === 'Salary') {
//             setSalaryFilters(prev =>
//                 prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
//             );
//         }
//     };

//     useEffect(() => {
//         // Dispatch the filterJobs action with the selected filters
//         dispatch(filterJobs({ locationFilters, titleFilters, salaryFilters }));
//     }, [locationFilters, titleFilters, salaryFilters, dispatch]);

//     return (
//         <div className='w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105'>
//             <h1 className='font-bold text-2xl text-gray-800 mb-4'>Filter Jobs</h1>
//             <hr className='border-gray-300 mb-4' />

//             {/* Checkbox for filtering jobs */}
//             {filterData.map((data, index) => (
//                 <div key={index} className='mb-4'>
//                     <h2 className='font-semibold text-lg text-gray-700 mb-2 flex items-center'>
//                         {data.icon}
//                         <span className='ml-2'>{data.filterType}</span>
//                     </h2>
//                     {data.array.map((item, idx) => (
//                         <div className='flex items-center space-x-2 my-2' key={`${data.filterType}-${idx}`}>
//                             <input
//                                 type="checkbox"
//                                 value={item}
//                                 checked={
//                                     data.filterType === 'Location' ? locationFilters.includes(item) :
//                                     data.filterType === 'title' ? titleFilters.includes(item) :
//                                     salaryFilters.includes(item)
//                                 }
//                                 onChange={() => handleFilterChange(data.filterType, item)}
//                                 className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition duration-200 ease-in-out"
//                             />
//                             <label className='text-gray-600 cursor-pointer hover:text-green-700 transition-colors duration-200 ease-in-out'>
//                                 {item}
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FilterCard;



import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterJobs } from '@/redux/jobSlice'; // Import filterJobs action

const FilterCard = () => {
    const [locationFilters, setLocationFilters] = useState([]);
    const [titleFilters, setTitleFilters] = useState([]); // Updated to Title
    const [salaryFilters, setSalaryFilters] = useState([]);
    const dispatch = useDispatch();

    // Sample data for locations, titles, and salary ranges
    const filterData = [
        {
            filterType: 'Location',
            icon: '📍', // Example icon
            array: [
                'Bangalore',
                'Mumbai',
                'Delhi',
                'Hyderabad',
                'Chennai',
                'Pune',
                'Kolkata',
                'Ahmedabad',
                'Gurgaon',
                'Noida',
                'India',
            ],
        },
        {
            filterType: 'Title',
            icon: '🏢', // Example icon
            array: [
                'Software Development',
                'Web Development',
                'Data Science',
                'Cybersecurity',
                'Cloud Computing',
                'Artificial Intelligence',
                'DevOps',
                'Mobile App Development',
                'IT Support',
                'Network Administration',
                'Software Engineer',
                'SDE',
            ],
        },
        {
            filterType: 'Salary',
            icon: '💰', // Example icon
            array: [
                '0-3 LPA',
                '3-6 LPA',
                '6-10 LPA',
                '10-15 LPA',
                '15+ LPA',
            ],
        },
    ];

    const handleFilterChange = (filterType, value) => {
        // Update the relevant filter state based on filterType
        if (filterType === 'Location') {
            setLocationFilters(prev =>
                prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
            );
        } else if (filterType === 'Title') {
            setTitleFilters(prev =>
                prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
            );
        } else if (filterType === 'Salary') {
            setSalaryFilters(prev =>
                prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
            );
        }
    };

    useEffect(() => {
        // Dispatch the filterJobs action with the selected filters
        dispatch(filterJobs({ locationFilters, titleFilters, salaryFilters }));
    }, [locationFilters, titleFilters, salaryFilters, dispatch]);

    return (
        <div className='w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105'>
            <h1 className='font-bold text-2xl text-gray-800 mb-4'>Filter Jobs</h1>
            <hr className='border-gray-300 mb-4' />

            {/* Checkbox for filtering jobs */}
            {filterData.map((data, index) => (
                <div key={index} className='mb-4'>
                    <h2 className='font-semibold text-lg text-gray-700 mb-2 flex items-center'>
                        {data.icon}
                        <span className='ml-2'>{data.filterType}</span>
                    </h2>
                    {data.array.map((item, idx) => (
                        <div className='flex items-center space-x-2 my-2' key={`${data.filterType}-${idx}`}>
                            <input
                                type="checkbox"
                                value={item}
                                checked={
                                    data.filterType === 'Location' ? locationFilters.includes(item) :
                                    data.filterType === 'Title' ? titleFilters.includes(item) :
                                    salaryFilters.includes(item)
                                }
                                onChange={() => handleFilterChange(data.filterType, item)}
                                className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition duration-200 ease-in-out"
                            />
                            <label className='text-gray-600 cursor-pointer hover:text-green-700 transition-colors duration-200 ease-in-out'>
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FilterCard;













