






// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; // Import the SalaryEstimator component
// import JobStressRatings from './JobStressRatings'; // Import the JobStressRatings component
// import { FaCalculator, FaHeartbeat } from 'react-icons/fa'; // Import icons for Salary Estimator and Job Stress Ratings

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); // State to control Salary Estimator visibility
//   const [showStressRatings, setShowStressRatings] = useState(false); // State to control Job Stress Ratings visibility

//   const handleToggleEstimator = () => {
//     setShowEstimator(!showEstimator); // Toggle the visibility
//   };

//   const handleToggleStressRatings = () => {
//     setShowStressRatings(!showStressRatings); // Toggle the visibility
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 via-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Career Tools</h1>

//       <div className="grid grid-cols-1 gap-6">
//         {/* Salary Estimator Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalculator className="text-blue-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Salary Estimator</h2>
//             <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//             <button
//               onClick={handleToggleEstimator}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//             </button>
//           </div>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaHeartbeat className="text-red-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Job Stress Ratings</h2>
//             <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//             <button
//               onClick={handleToggleStressRatings}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the Salary Estimator and Job Stress Ratings */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//     </div>
//   );
// };

// export default CareerTools;




// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; // Import the SalaryEstimator component
// import JobStressRatings from './JobStressRatings'; // Import the JobStressRatings component
// import CareerEventsCalendar from './CareerEventsCalendar'; // Import the CareerEventsCalendar component
// import { FaCalculator, FaHeartbeat, FaCalendarAlt } from 'react-icons/fa'; // Import icons

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); // State to control Salary Estimator visibility
//   const [showStressRatings, setShowStressRatings] = useState(false); // State to control Job Stress Ratings visibility
//   const [showEventsCalendar, setShowEventsCalendar] = useState(false); // State to control Calendar visibility

//   const handleToggleEstimator = () => {
//     setShowEstimator(!showEstimator); // Toggle the visibility
//   };

//   const handleToggleStressRatings = () => {
//     setShowStressRatings(!showStressRatings); // Toggle the visibility
//   };

//   const handleToggleEventsCalendar = () => {
//     setShowEventsCalendar(!showEventsCalendar); // Toggle the visibility
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 via-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Career Tools</h1>

//       <div className="grid grid-cols-1 gap-6">
//         {/* Salary Estimator Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalculator className="text-blue-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Salary Estimator</h2>
//             <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//             <button
//               onClick={handleToggleEstimator}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//             </button>
//           </div>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaHeartbeat className="text-red-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Job Stress Ratings</h2>
//             <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//             <button
//               onClick={handleToggleStressRatings}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//             </button>
//           </div>
//         </div>

//         {/* Career Events Calendar Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalendarAlt className="text-purple-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Career Events Calendar</h2>
//             <p className="text-gray-600 mb-4">View upcoming career events, workshops, and fairs.</p>
//             <button
//               onClick={handleToggleEventsCalendar}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEventsCalendar ? 'Hide' : 'Show'} Events Calendar
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the Salary Estimator, Job Stress Ratings, and Career Events Calendar */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//       {showEventsCalendar && <CareerEventsCalendar />}
//     </div>
//   );
// };

// export default CareerTools;







// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; 
// import JobStressRatings from './JobStressRatings'; 
// import CareerEventsCalendar from './CareerEventsCalendar'; 
// import Reminder from './Reminder'; // Import the Reminder component
// import { FaCalculator, FaHeartbeat, FaCalendarAlt, FaBell } from 'react-icons/fa'; // Import the Bell icon
// import Navbar from './shared/Navbar';

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); 
//   const [showStressRatings, setShowStressRatings] = useState(false); 
//   const [showEventsCalendar, setShowEventsCalendar] = useState(false); 
//   const [showReminder, setShowReminder] = useState(false); // State to control Reminder visibility

//   const handleToggleEstimator = () => {
//     setShowEstimator(!showEstimator); 
//   };

//   const handleToggleStressRatings = () => {
//     setShowStressRatings(!showStressRatings); 
//   };

//   const handleToggleEventsCalendar = () => {
//     setShowEventsCalendar(!showEventsCalendar); 
//   };

//   const handleToggleReminder = () => {
//     setShowReminder(!showReminder); // Toggle the visibility
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 via-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Career Tools</h1>

//       <div className="grid grid-cols-1 gap-6">
//         {/* Salary Estimator Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalculator className="text-blue-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Salary Estimator</h2>
//             <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//             <button
//               onClick={handleToggleEstimator}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//             </button>
//           </div>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaHeartbeat className="text-red-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Job Stress Ratings</h2>
//             <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//             <button
//               onClick={handleToggleStressRatings}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//             </button>
//           </div>
//         </div>

//         {/* Career Events Calendar Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalendarAlt className="text-purple-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Career Events Calendar</h2>
//             <p className="text-gray-600 mb-4">View upcoming career events, workshops, and fairs.</p>
//             <button
//               onClick={handleToggleEventsCalendar}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEventsCalendar ? 'Hide' : 'Show'} Events Calendar
//             </button>
//           </div>
//         </div>

//         {/* Reminder Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaBell className="text-yellow-500 text-4xl mr-4" /> {/* Bell icon for reminders */}
//           <div>
//             <h2 className="text-2xl font-semibold">Reminders</h2>
//             <p className="text-gray-600 mb-4">Manage your important reminders.</p>
//             <button
//               onClick={handleToggleReminder}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showReminder ? 'Hide' : 'Show'} Reminders
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the components */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//       {showEventsCalendar && <CareerEventsCalendar />}
//       {showReminder && <Reminder />} {/* Render the Reminder component */}
//     </div>
//   );
// };

// export default CareerTools;




// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; 
// import JobStressRatings from './JobStressRatings'; 
// import CareerEventsCalendar from './CareerEventsCalendar'; 
// import GoogleCalendar from './GoogleCalendar'; // Import the Google Calendar component
// import { FaCalculator, FaHeartbeat, FaCalendarAlt, FaBell } from 'react-icons/fa'; 
// import Navbar from './shared/Navbar';

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); 
//   const [showStressRatings, setShowStressRatings] = useState(false); 
//   const [showEventsCalendar, setShowEventsCalendar] = useState(false); 
//   const [showGoogleCalendar, setShowGoogleCalendar] = useState(false); // State for Google Calendar visibility

//   const handleToggleEstimator = () => {
//     setShowEstimator(!showEstimator); 
//   };

//   const handleToggleStressRatings = () => {
//     setShowStressRatings(!showStressRatings); 
//   };

//   const handleToggleEventsCalendar = () => {
//     setShowEventsCalendar(!showEventsCalendar); 
//   };

//   const handleToggleGoogleCalendar = () => {
//     setShowGoogleCalendar(!showGoogleCalendar); // Toggle Google Calendar visibility
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 via-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Career Tools</h1>

//       <div className="grid grid-cols-1 gap-6">
//         {/* Salary Estimator Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalculator className="text-blue-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Salary Estimator</h2>
//             <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//             <button
//               onClick={handleToggleEstimator}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//             </button>
//           </div>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaHeartbeat className="text-red-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Job Stress Ratings</h2>
//             <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//             <button
//               onClick={handleToggleStressRatings}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//             </button>
//           </div>
//         </div>

//         {/* Career Events Calendar Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalendarAlt className="text-purple-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Career Events Calendar</h2>
//             <p className="text-gray-600 mb-4">View upcoming career events, workshops, and fairs.</p>
//             <button
//               onClick={handleToggleEventsCalendar}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEventsCalendar ? 'Hide' : 'Show'} Events Calendar
//             </button>
//           </div>
//         </div>

//         {/* Google Calendar Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaBell className="text-yellow-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Google Calendar</h2>
//             <p className="text-gray-600 mb-4">Manage your events and reminders using Google Calendar.</p>
//             <button
//               onClick={handleToggleGoogleCalendar}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showGoogleCalendar ? 'Hide' : 'Show'} Google Calendar
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the components */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//       {showEventsCalendar && <CareerEventsCalendar />}
//       {showGoogleCalendar && <GoogleCalendar />} {/* Render the Google Calendar component */}
//     </div>
//   );
// };

// export default CareerTools;






// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; 
// import JobStressRatings from './JobStressRatings'; 
// import CareerEventsCalendar from './CareerEventsCalendar'; 
// import Notes from './Notes'; // Import the Notes component
// import { FaCalculator, FaHeartbeat, FaCalendarAlt, FaStickyNote } from 'react-icons/fa'; 

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); 
//   const [showStressRatings, setShowStressRatings] = useState(false); 
//   const [showEventsCalendar, setShowEventsCalendar] = useState(false); 
//   const [showNotes, setShowNotes] = useState(false); // State for Notes visibility

//   const handleToggleEstimator = () => {
//     setShowEstimator(!showEstimator); 
//   };

//   const handleToggleStressRatings = () => {
//     setShowStressRatings(!showStressRatings); 
//   };

//   const handleToggleEventsCalendar = () => {
//     setShowEventsCalendar(!showEventsCalendar); 
//   };

//   const handleToggleNotes = () => {
//     setShowNotes(!showNotes); // Toggle Notes visibility
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-200 via-blue-200 to-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Career Tools</h1>

//       <div className="grid grid-cols-1 gap-6">
//         {/* Salary Estimator Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalculator className="text-blue-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Salary Estimator</h2>
//             <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//             <button
//               onClick={handleToggleEstimator}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//             </button>
//           </div>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaHeartbeat className="text-red-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Job Stress Ratings</h2>
//             <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//             <button
//               onClick={handleToggleStressRatings}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//             </button>
//           </div>
//         </div>

//         {/* Career Events Calendar Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaCalendarAlt className="text-purple-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Career Events Calendar</h2>
//             <p className="text-gray-600 mb-4">View upcoming career events, workshops, and fairs.</p>
//             <button
//               onClick={handleToggleEventsCalendar}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showEventsCalendar ? 'Hide' : 'Show'} Events Calendar
//             </button>
//           </div>
//         </div>

//         {/* Notes Card */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//           <FaStickyNote className="text-yellow-500 text-4xl mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">Notes</h2>
//             <p className="text-gray-600 mb-4">Take notes and manage your thoughts.</p>
//             <button
//               onClick={handleToggleNotes}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               {showNotes ? 'Hide' : 'Show'} Notes
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the components */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//       {showEventsCalendar && <CareerEventsCalendar />}
//       {showNotes && <Notes />} {/* Render the Notes component */}
//     </div>
//   );
// };

// export default CareerTools;




// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; 
// import JobStressRatings from './JobStressRatings'; 
// import CareerEventsCalendar from './CareerEventsCalendar'; 
// import Notes from './Notes'; 
// import { FaCalculator, FaHeartbeat, FaCalendarAlt, FaStickyNote } from 'react-icons/fa'; 

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); 
//   const [showStressRatings, setShowStressRatings] = useState(false); 
//   const [showEventsCalendar, setShowEventsCalendar] = useState(false); 
//   const [showNotes, setShowNotes] = useState(false); 

//   const handleToggleEstimator = () => {
//     setShowEstimator(!showEstimator); 
//   };

//   const handleToggleStressRatings = () => {
//     setShowStressRatings(!showStressRatings); 
//   };

//   const handleToggleEventsCalendar = () => {
//     setShowEventsCalendar(!showEventsCalendar); 
//   };

//   const handleToggleNotes = () => {
//     setShowNotes(!showNotes); 
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-lg">
//       <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">Career Tools</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Salary Estimator Card */}
//         <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaCalculator className="text-blue-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Salary Estimator</h2>
//           <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//           <button
//             onClick={handleToggleEstimator}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//           </button>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaHeartbeat className="text-red-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Job Stress Ratings</h2>
//           <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//           <button
//             onClick={handleToggleStressRatings}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
//           >
//             {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//           </button>
//         </div>

//         {/* Career Events Calendar Card */}
//         <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaCalendarAlt className="text-purple-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Career Events Calendar</h2>
//           <p className="text-gray-600 mb-4">View upcoming career events, workshops, and fairs.</p>
//           <button
//             onClick={handleToggleEventsCalendar}
//             className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
//           >
//             {showEventsCalendar ? 'Hide' : 'Show'} Events Calendar
//           </button>
//         </div>

//         {/* Notes Card */}
//         <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaStickyNote className="text-yellow-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Notes</h2>
//           <p className="text-gray-600 mb-4">Take notes and manage your thoughts.</p>
//           <button
//             onClick={handleToggleNotes}
//             className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//           >
//             {showNotes ? 'Hide' : 'Show'} Notes
//           </button>
//         </div>
//       </div>

//       {/* Conditionally render the components */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//       {showEventsCalendar && <CareerEventsCalendar />}
//       {showNotes && <Notes />}
//     </div>
//   );
// };

// export default CareerTools;






// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; 
// import JobStressRatings from './JobStressRatings'; 
// import CareerEventsCalendar from './CareerEventsCalendar'; 
// import Notes from './Notes'; 
// import InterviewResources from './InterviewResources';
// import MockInterview from './MockInterview';
// import { FaCalculator, FaHeartbeat, FaCalendarAlt, FaStickyNote, FaClipboardList, FaUserGraduate } from 'react-icons/fa'; 

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); 
//   const [showStressRatings, setShowStressRatings] = useState(false); 
//   const [showEventsCalendar, setShowEventsCalendar] = useState(false); 
//   const [showNotes, setShowNotes] = useState(false);
//   const [showInterviewResources, setShowInterviewResources] = useState(false);
//   const [showMockInterview, setShowMockInterview] = useState(false);

//   const handleToggleEstimator = () => {
//     setShowEstimator(!showEstimator); 
//   };

//   const handleToggleStressRatings = () => {
//     setShowStressRatings(!showStressRatings); 
//   };

//   const handleToggleEventsCalendar = () => {
//     setShowEventsCalendar(!showEventsCalendar); 
//   };

//   const handleToggleNotes = () => {
//     setShowNotes(!showNotes); 
//   };

//   const handleToggleInterviewResources = () => {
//     setShowInterviewResources(!showInterviewResources);
//   };

//   const handleToggleMockInterview = () => {
//     setShowMockInterview(!showMockInterview);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-lg">
//       <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">Career Tools</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Salary Estimator Card */}
//         <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaCalculator className="text-blue-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Salary Estimator</h2>
//           <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//           <button
//             onClick={handleToggleEstimator}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//           </button>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaHeartbeat className="text-red-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Job Stress Ratings</h2>
//           <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//           <button
//             onClick={handleToggleStressRatings}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
//           >
//             {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//           </button>
//         </div>

//         {/* Career Events Calendar Card */}
//         <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaCalendarAlt className="text-purple-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Career Events Calendar</h2>
//           <p className="text-gray-600 mb-4">View upcoming career events, workshops, and fairs.</p>
//           <button
//             onClick={handleToggleEventsCalendar}
//             className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
//           >
//             {showEventsCalendar ? 'Hide' : 'Show'} Events Calendar
//           </button>
//         </div>

//         {/* Notes Card */}
//         <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaStickyNote className="text-yellow-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Notes</h2>
//           <p className="text-gray-600 mb-4">Take notes and manage your thoughts.</p>
//           <button
//             onClick={handleToggleNotes}
//             className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//           >
//             {showNotes ? 'Hide' : 'Show'} Notes
//           </button>
//         </div>

//         {/* Interview Resources Card */}
//         <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaClipboardList className="text-green-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Interview Resources</h2>
//           <p className="text-gray-600 mb-4">Access resources to prepare for interviews.</p>
//           <button
//             onClick={handleToggleInterviewResources}
//             className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//           >
//             {showInterviewResources ? 'Hide' : 'Show'} Resources
//           </button>
//         </div>

//         {/* Mock Interview Card */}
//         <div className="bg-gradient-to-r from-teal-100 to-teal-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaUserGraduate className="text-teal-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Mock Interview</h2>
//           <p className="text-gray-600 mb-4">Practice interviews with common questions.</p>
//           <button
//             onClick={handleToggleMockInterview}
//             className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
//           >
//             {showMockInterview ? 'Hide' : 'Show'} Mock Interview
//           </button>
//         </div>
//       </div>

//       {/* Render components based on state */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//       {showEventsCalendar && <CareerEventsCalendar />}
//       {showNotes && <Notes />}
//       {showInterviewResources && <InterviewResources />}
//       {showMockInterview && <MockInterview />}
//     </div>
//   );
// };

// export default CareerTools;





// import React, { useState } from 'react';
// import SalaryEstimator from './SalaryEstimator'; 
// import JobStressRatings from './JobStressRatings'; 
// import CareerEventsCalendar from './CareerEventsCalendar'; 
// import Notes from './Notes'; 
// import InterviewResources from './InterviewResources';
// import MockInterview from './MockInterview';
// import ResumeFeedback from './ResumeFeedback'; // Import the new component
// import { FaCalculator, FaHeartbeat, FaCalendarAlt, FaStickyNote, FaClipboardList, FaUserGraduate, FaFileAlt } from 'react-icons/fa'; // Import the new icon

// const CareerTools = () => {
//   const [showEstimator, setShowEstimator] = useState(false); 
//   const [showStressRatings, setShowStressRatings] = useState(false); 
//   const [showEventsCalendar, setShowEventsCalendar] = useState(false); 
//   const [showNotes, setShowNotes] = useState(false);
//   const [showInterviewResources, setShowInterviewResources] = useState(false);
//   const [showMockInterview, setShowMockInterview] = useState(false);
//   const [showResumeFeedback, setShowResumeFeedback] = useState(false); // State for Resume Feedback

//   const handleToggleEstimator = () => setShowEstimator(!showEstimator); 
//   const handleToggleStressRatings = () => setShowStressRatings(!showStressRatings); 
//   const handleToggleEventsCalendar = () => setShowEventsCalendar(!showEventsCalendar); 
//   const handleToggleNotes = () => setShowNotes(!showNotes); 
//   const handleToggleInterviewResources = () => setShowInterviewResources(!showInterviewResources);
//   const handleToggleMockInterview = () => setShowMockInterview(!showMockInterview);
//   const handleToggleResumeFeedback = () => setShowResumeFeedback(!showResumeFeedback); // Toggle function for Resume Feedback

//   return (
//     <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-lg">
//       <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">Career Tools</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Salary Estimator Card */}
//         <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaCalculator className="text-blue-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Salary Estimator</h2>
//           <p className="text-gray-600 mb-4">Estimate your salary based on industry standards.</p>
//           <button
//             onClick={handleToggleEstimator}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             {showEstimator ? 'Hide' : 'Show'} Salary Estimator
//           </button>
//         </div>

//         {/* Job Stress Ratings Card */}
//         <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaHeartbeat className="text-red-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Job Stress Ratings</h2>
//           <p className="text-gray-600 mb-4">Check stress levels for various job roles.</p>
//           <button
//             onClick={handleToggleStressRatings}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
//           >
//             {showStressRatings ? 'Hide' : 'Show'} Job Stress Ratings
//           </button>
//         </div>

//         {/* Career Events Calendar Card */}
//         <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaCalendarAlt className="text-purple-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Career Events Calendar</h2>
//           <p className="text-gray-600 mb-4">View upcoming career events, workshops, and fairs.</p>
//           <button
//             onClick={handleToggleEventsCalendar}
//             className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
//           >
//             {showEventsCalendar ? 'Hide' : 'Show'} Events Calendar
//           </button>
//         </div>

//         {/* Notes Card */}
//         <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaStickyNote className="text-yellow-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Notes</h2>
//           <p className="text-gray-600 mb-4">Take notes and manage your thoughts.</p>
//           <button
//             onClick={handleToggleNotes}
//             className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//           >
//             {showNotes ? 'Hide' : 'Show'} Notes
//           </button>
//         </div>

//         {/* Interview Resources Card */}
//         <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaClipboardList className="text-green-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Interview Resources</h2>
//           <p className="text-gray-600 mb-4">Access resources to prepare for interviews.</p>
//           <button
//             onClick={handleToggleInterviewResources}
//             className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//           >
//             {showInterviewResources ? 'Hide' : 'Show'} Resources
//           </button>
//         </div>

//         {/* Mock Interview Card */}
//         <div className="bg-gradient-to-r from-teal-100 to-teal-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaUserGraduate className="text-teal-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Mock Interview</h2>
//           <p className="text-gray-600 mb-4">Practice interviews with common questions.</p>
//           <button
//             onClick={handleToggleMockInterview}
//             className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
//           >
//             {showMockInterview ? 'Hide' : 'Show'} Mock Interview
//           </button>
//         </div>

//         {/* Resume Feedback Card */}
//         <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
//           <FaFileAlt className="text-pink-600 text-4xl mb-4" />
//           <h2 className="text-xl font-semibold">Resume Feedback</h2>
//           <p className="text-gray-600 mb-4">Get automated feedback on your resume.</p>
//           <button
//             onClick={handleToggleResumeFeedback}
//             className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
//           >
//             {showResumeFeedback ? 'Hide' : 'Show'} Resume Feedback
//           </button>
//         </div>
//       </div>

//       {/* Render components conditionally */}
//       {showEstimator && <SalaryEstimator />}
//       {showStressRatings && <JobStressRatings />}
//       {showEventsCalendar && <CareerEventsCalendar />}
//       {showNotes && <Notes />}
//       {showInterviewResources && <InterviewResources />}
//       {showMockInterview && <MockInterview />}
//       {showResumeFeedback && <ResumeFeedback />} {/* Render the new component */}
//     </div>
//   );
// };

// export default CareerTools;









import React, { useState } from 'react';
import SalaryEstimator from './SalaryEstimator'; 
import JobStressRatings from './JobStressRatings'; 
import CareerEventsCalendar from './CareerEventsCalendar'; 
import Notes from './Notes'; 
import InterviewResources from './InterviewResources';
import MockInterview from './MockInterview';
import ResumeFeedback from './ResumeFeedback'; 
import { FaCalculator, FaHeartbeat, FaCalendarAlt, FaStickyNote, FaClipboardList, FaUserGraduate, FaFileAlt } from 'react-icons/fa'; 
import Navbar from './shared/Navbar';

const CareerTools = () => {
  const [showEstimator, setShowEstimator] = useState(false); 
  const [showStressRatings, setShowStressRatings] = useState(false); 
  const [showEventsCalendar, setShowEventsCalendar] = useState(false); 
  const [showNotes, setShowNotes] = useState(false);
  const [showInterviewResources, setShowInterviewResources] = useState(false);
  const [showMockInterview, setShowMockInterview] = useState(false);
  const [showResumeFeedback, setShowResumeFeedback] = useState(false); 

  const handleToggleEstimator = () => setShowEstimator(!showEstimator); 
  const handleToggleStressRatings = () => setShowStressRatings(!showStressRatings); 
  const handleToggleEventsCalendar = () => setShowEventsCalendar(!showEventsCalendar); 
  const handleToggleNotes = () => setShowNotes(!showNotes); 
  const handleToggleInterviewResources = () => setShowInterviewResources(!showInterviewResources);
  const handleToggleMockInterview = () => setShowMockInterview(!showMockInterview);
  const handleToggleResumeFeedback = () => setShowResumeFeedback(!showResumeFeedback);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-lg">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800">Career Tools</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <FaCalculator className="text-white text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-white">Salary Estimator</h2>
          <p className="text-white opacity-90 mb-4">Estimate your salary based on industry standards.</p>
          <button
            onClick={handleToggleEstimator}
            className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
          >
            {showEstimator ? 'Hide' : 'Show'} Estimator
          </button>
        </div>

        <div className="bg-gradient-to-r from-red-400 to-red-500 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <FaHeartbeat className="text-white text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-white">Job Stress Ratings</h2>
          <p className="text-white opacity-90 mb-4">Check stress levels for various job roles.</p>
          <button
            onClick={handleToggleStressRatings}
            className="bg-white text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-100 transition duration-300"
          >
            {showStressRatings ? 'Hide' : 'Show'} Ratings
          </button>
        </div>

        <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <FaCalendarAlt className="text-white text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-white">Career Events</h2>
          <p className="text-white opacity-90 mb-4">View upcoming career events and workshops.</p>
          <button
            onClick={handleToggleEventsCalendar}
            className="bg-white text-purple-600 font-medium px-4 py-2 rounded-lg hover:bg-purple-100 transition duration-300"
          >
            {showEventsCalendar ? 'Hide' : 'Show'} Calendar
          </button>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <FaStickyNote className="text-white text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-white">Notes</h2>
          <p className="text-white opacity-90 mb-4">Take notes and manage your thoughts.</p>
          <button
            onClick={handleToggleNotes}
            className="bg-white text-yellow-600 font-medium px-4 py-2 rounded-lg hover:bg-yellow-100 transition duration-300"
          >
            {showNotes ? 'Hide' : 'Show'} Notes
          </button>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <FaClipboardList className="text-white text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-white">Interview Resources</h2>
          <p className="text-white opacity-90 mb-4">Prepare for interviews with essential resources.</p>
          <button
            onClick={handleToggleInterviewResources}
            className="bg-white text-green-600 font-medium px-4 py-2 rounded-lg hover:bg-green-100 transition duration-300"
          >
            {showInterviewResources ? 'Hide' : 'Show'} Resources
          </button>
        </div>

        <div className="bg-gradient-to-r from-teal-400 to-teal-500 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <FaUserGraduate className="text-white text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-white">Mock Interview</h2>
          <p className="text-white opacity-90 mb-4">Practice with common interview questions.</p>
          <button
            onClick={handleToggleMockInterview}
            className="bg-white text-teal-600 font-medium px-4 py-2 rounded-lg hover:bg-teal-100 transition duration-300"
          >
            {showMockInterview ? 'Hide' : 'Show'} Mock Interview
          </button>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <FaFileAlt className="text-white text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-white">Resume Feedback</h2>
          <p className="text-white opacity-90 mb-4">Get feedback on your resume.</p>
          <button
            onClick={handleToggleResumeFeedback}
            className="bg-white text-pink-600 font-medium px-4 py-2 rounded-lg hover:bg-pink-100 transition duration-300"
          >
            {showResumeFeedback ? 'Hide' : 'Show'} Feedback
          </button>
        </div>
      </div>

      {showEstimator && <SalaryEstimator />}
      {showStressRatings && <JobStressRatings />}
      {showEventsCalendar && <CareerEventsCalendar />}
      {showNotes && <Notes />}
      {showInterviewResources && <InterviewResources />}
      {showMockInterview && <MockInterview />}
      {showResumeFeedback && <ResumeFeedback />}
    </div>
  );
};

export default CareerTools;

























