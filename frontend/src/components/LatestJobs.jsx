// import React from 'react';
// import LatestJobCards from './LatestJobCards';
//  const randomJobs = [1,2,3,4,5,6,7,8]

// const LatestJobs = () => {
//     const {randomJobs, loading } = useSelector(store => store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20 px-4'>
//             <h1 className='text-4xl font-bold text-center'>
//                 <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
//             </h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
//                 {loading ? (
//                     <span className='text-lg text-gray-500'>Loading jobs...</span>
//                 ) : allJobs.length <= 0 ? (
//                     <span className='text-lg text-gray-500'>No Job Available</span>
//                 ) : (
//                     randomJobs.slice(0, 6).map((job) => (
//                         <LatestJobCards key={job._id} job={job} />
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default LatestJobs;



// import React from 'react';
// import { useSelector } from 'react-redux';
// import LatestJobCards from './LatestJobCards';

// const LatestJobs = () => {
//     const { randomJobs, loading } = useSelector((store) => store.job);

//     return (
//         <div className='max-w-7xl mx-auto my-20 px-4'>
//             <h1 className='text-4xl font-bold text-center'>
//                 <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
//             </h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
//                 {loading ? (
//                     <span className='text-lg text-gray-500'>Loading jobs...</span>
//                 ) : randomJobs.length <= 0 ? (
//                     <span className='text-lg text-gray-500'>No Job Available</span>
//                 ) : (
//                     randomJobs.slice(0, 6).map((job) => (
//                         <LatestJobCards key={job._id} job={job} />
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default LatestJobs;



// import React from 'react';
// import { useSelector } from 'react-redux';
// import LatestJobCards from './LatestJobCards';

// // Example random jobs data
// const randomJobs = [
//     {
//         _id: 'job1',
//         title: 'Software Engineer',
//         company: 'Google',
//         location: 'New York, NY',
//         description: 'Develop software solutions for various Google products using JavaScript and React.',
//         vacancies: 5,
//         type: 'Full-time',
//         salary: 20, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job2',
//         title: 'Data Scientist',
//         company: 'Amazon',
//         location: 'Seattle, WA',
//         description: 'Analyze customer data and develop predictive models to improve the shopping experience.',
//         vacancies: 3,
//         type: 'Full-time',
//         salary: 25, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job3',
//         title: 'UX Designer',
//         company: 'Microsoft',
//         location: 'Redmond, WA',
//         description: 'Design user-friendly interfaces and experiences for cloud-based applications.',
//         vacancies: 2,
//         type: 'Part-time',
//         salary: 15, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job4',
//         title: 'Front-End Developer',
//         company: 'Facebook',
//         location: 'Menlo Park, CA',
//         description: 'Build responsive front-end applications using React and TypeScript.',
//         vacancies: 4,
//         type: 'Full-time',
//         salary: 18, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job5',
//         title: 'DevOps Engineer',
//         company: 'Netflix',
//         location: 'Los Gatos, CA',
//         description: 'Automate deployment pipelines and maintain cloud infrastructure for high-availability systems.',
//         vacancies: 3,
//         type: 'Full-time',
//         salary: 22, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job6',
//         title: 'AI Researcher',
//         company: 'OpenAI',
//         location: 'San Francisco, CA',
//         description: 'Conduct research on advanced AI models and machine learning techniques.',
//         vacancies: 2,
//         type: 'Full-time',
//         salary: 30, // In Lakhs Per Annum (LPA)
//     },
// ];

// const LatestJobs = () => {
//     // You can replace this with actual useSelector logic if you are using Redux for state management
//     const loading = false;  // Simulating the loading state
    
//     return (
//         <div className='max-w-7xl mx-auto my-20 px-4'>
//             <h1 className='text-4xl font-bold text-center'>
//                 <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
//             </h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
//                 {loading ? (
//                     <span className='text-lg text-gray-500'>Loading jobs...</span>
//                 ) : randomJobs.length <= 0 ? (
//                     <span className='text-lg text-gray-500'>No Job Available</span>
//                 ) : (
//                     randomJobs.slice(0, 6).map((job) => (
//                         <LatestJobCards key={job._id} job={job} />
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default LatestJobs;


// Example random jobs data
// const randomJobs = [
//     {
//         _id: 'job1',
//         title: 'Software Engineer',
//         company: 'Google',
//         location: 'New York, NY',
//         description: 'Develop software solutions for various Google products using JavaScript and React.',
//         vacancies: 5,
//         type: 'Full-time',
//         salary: 20, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job2',
//         title: 'Data Scientist',
//         company: 'Amazon',
//         location: 'Seattle, WA',
//         description: 'Analyze customer data and develop predictive models to improve the shopping experience.',
//         vacancies: 3,
//         type: 'Full-time',
//         salary: 25, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job3',
//         title: 'UX Designer',
//         company: 'Microsoft',
//         location: 'Redmond, WA',
//         description: 'Design user-friendly interfaces and experiences for cloud-based applications.',
//         vacancies: 2,
//         type: 'Part-time',
//         salary: 15, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job4',
//         title: 'Front-End Developer',
//         company: 'Facebook',
//         location: 'Menlo Park, CA',
//         description: 'Build responsive front-end applications using React and TypeScript.',
//         vacancies: 4,
//         type: 'Full-time',
//         salary: 18, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job5',
//         title: 'DevOps Engineer',
//         company: 'Netflix',
//         location: 'Los Gatos, CA',
//         description: 'Automate deployment pipelines and maintain cloud infrastructure for high-availability systems.',
//         vacancies: 3,
//         type: 'Full-time',
//         salary: 22, // In Lakhs Per Annum (LPA)
//     },
//     {
//         _id: 'job6',
//         title: 'AI Researcher',
//         company: 'OpenAI',
//         location: 'San Francisco, CA',
//         description: 'Conduct research on advanced AI models and machine learning techniques.',
//         vacancies: 2,
//         type: 'Full-time',
//         salary: 30, // In Lakhs Per Annum (LPA)
//     },
// ];




import React from 'react';
import { useSelector } from 'react-redux';
import LatestJobCards from './LatestJobCards';

const LatestJobs = () => {
  const loading = false; // Simulating the loading state
  const { allJobs } = useSelector(store => store.job);

  return (
    <div className='max-w-7xl mx-auto my-20 px-4'>
      <h1 className='text-4xl font-bold text-center bg-gradient-to-r from-green-300 via-blue-400 to-white bg-clip-text text-transparent'>
        Latest & Top Job Openings
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
        {loading ? (
          <span className='text-lg text-gray-500 animate-pulse'>Loading jobs...</span>
        ) : (
          allJobs.length <= 0 ? (
            <span>No Job Available</span>
          ) : (
            allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
          )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;




