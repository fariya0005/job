

// const Navbar = () => {
//   // State to manage user authentication
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   return (
//     <div className='bg-white text-gray-900 shadow-md'>
//       <div className='flex items-center justify-between max-w-7xl mx-auto px-8 py-4 h-16'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           {/* KIIT Logo */}
//           <img
//             src='/kiit-logo.png' // Image path in public folder
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2' // Smaller logo size
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span> {/* Green color for KIIT */}
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li className='hover:text-green-600 cursor-pointer transition duration-300'>
//               Home
//             </li>
//             <li className='hover:text-green-600 cursor-pointer transition duration-300'>
//               Jobs
//             </li>
//             <li className='hover:text-green-600 cursor-pointer transition duration-300'>
//               Browse
//             </li>
//           </ul>

//           {/* Login, Sign Up, and User Avatar with Popover */}
//           {isLoggedIn ? (
//             // If the user is logged in, show the profile avatar and popover
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <AvatarImage
//                     src='https://github.com/shadcn.png'
//                     alt='@shadcn'
//                     className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <AvatarImage
//                       src='https://github.com/shadcn.png'
//                       alt='@shadcn'
//                       className='rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>Fariya Afrin</h1>
//                     <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'>
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={() => setIsLoggedIn(false)}
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             // If the user is not logged in, show the Login and Sign Up buttons
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')}  // Redirect to Login page on click
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Redirect to Sign Up page on click
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'> {/* Full width navbar */}
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'> 
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           {/* KIIT Logo */}
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2' // Smaller logo size
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li className='hover:text-green-600 cursor-pointer transition duration-300'>
//               Home
//             </li>
//             <li className='hover:text-green-600 cursor-pointer transition duration-300'>
//               Jobs
//             </li>
//             <li className='hover:text-green-600 cursor-pointer transition duration-300'>
//               Browse
//             </li>
//           </ul>

//           {/* Login, Sign Up, and User Avatar with Popover */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <AvatarImage
//                     src='https://github.com/shadcn.png'
//                     alt='@shadcn'
//                     className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <AvatarImage
//                       src='https://github.com/shadcn.png'
//                       alt='@shadcn'
//                       className='rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>Fariya Afrin</h1>
//                     <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'>
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={() => setIsLoggedIn(false)}
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')}
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { Popover, PopoverTrigger, PopoverContent } from '@your-popover-library'; // Adjust to your popover library
// import { Avatar, AvatarImage } from '@your-avatar-library'; // Adjust to your avatar library
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Import icons

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'> {/* Full width navbar */}
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'> 
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           {/* KIIT Logo */}
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2' // Smaller logo size
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')} // Navigate to Home
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')} // Navigate to Jobs
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')} // Navigate to Browse
//             >
//               Browse
//             </li>
//           </ul>

//           {/* Login, Sign Up, and User Avatar with Popover */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <AvatarImage
//                     src='https://github.com/shadcn.png'
//                     alt='@shadcn'
//                     className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <AvatarImage
//                       src='https://github.com/shadcn.png'
//                       alt='@shadcn'
//                       className='rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>Fariya Afrin</h1>
//                     <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'>
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={() => setIsLoggedIn(false)}
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')}
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;












// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Set logged in state to false
//     // You may also want to handle additional logout logic here (e.g., clearing tokens)
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src='https://github.com/shadcn.png' // Replace with user's avatar URL
//                     alt='User Avatar'
//                     className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src='https://github.com/shadcn.png' // Replace with user's avatar URL
//                       alt='User Avatar'
//                       className='rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>Fariya Afrin</h1> {/* Replace with user's name */}
//                     <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                     onClick={() => navigate('/profile')} // Navigate to user profile
//                   >
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={handleLogout} // Handle logout
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => {
//                   // Simulate login and set isLoggedIn to true
//                   setIsLoggedIn(true);
//                   navigate('/'); // Optionally navigate to home after login
//                 }}
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Simulate logging out by updating state
//   const handleLogout = () => {
//     setIsLoggedIn(false); // Set logged in state to false
//     // Additional logout logic can be added here, such as clearing tokens
//   };

//   // Simulate successful login by updating state
//   const handleLogin = () => {
//     // Normally, you'd handle login authentication and token storage here
//     setIsLoggedIn(true); // Simulate login by setting the state
//     navigate('/'); // Optionally navigate to home after login
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src='https://github.com/shadcn.png' // Replace with user's avatar URL
//                     alt='User Avatar'
//                     className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src='https://github.com/shadcn.png' // Replace with user's avatar URL
//                       alt='User Avatar'
//                       className='rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>Fariya Afrin</h1> {/* Replace with user's name */}
//                     <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                     onClick={() => navigate('/profile')} // Navigate to user profile
//                   >
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={handleLogout} // Handle logout
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Redirect to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Set logged in state to false
//     // Additional logout logic (e.g., clearing tokens) can be added here
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src='https://github.com/shadcn.png' // Replace with user's avatar URL
//                     alt='User Avatar'
//                     className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src='https://github.com/shadcn.png' // Replace with user's avatar URL
//                       alt='User Avatar'
//                       className='rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>Fariya Afrin</h1> {/* Replace with user's name */}
//                     <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div
//                     className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                     onClick={() => navigate('/profile')} // Navigate to user profile
//                   >
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={handleLogout} // Handle logout
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               {/* Only Sign Up Button */}
//               <button
//                 onClick={() => navigate('/signup')}
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;








// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   // Check if user is logged in by checking the presence of user data
//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null)); // Clear user data from the Redux store
//         setIsLoggedIn(false); // Update login state
//         navigate("/"); // Navigate to the home page
//         toast.success(res.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Logout failed"); // Show error message
//     }
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn && user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src={user.profilePhoto || '/default-profile.png'} // Dynamically display user's uploaded profile photo or a default image
//                     alt='User Avatar'
//                     className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src={user.profilePhoto || '/default-profile.png'} // Dynamically display user's uploaded profile photo or a default image
//                       alt='User Avatar'
//                       className='rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>{user.fullname || 'User Name'}</h1> {/* Dynamically display user's name */}
//                     <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div
//                     className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                     onClick={() => navigate('/profile')} // Navigate to user profile
//                   >
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={logoutHandler} // Use logoutHandler for proper logout logic
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Navigate to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Navigate to sign-up page
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth); 

//   // Check if user is logged in by checking the presence of user data
//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null)); // Clear user data from the Redux store
//         setIsLoggedIn(false); // Update login state
//         navigate("/"); // Navigate to the home page
//         toast.success(res.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Logout failed"); // Show error message
//     }
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>
//         <div className='flex items-center gap-12'>
//                     <ul className='flex font-medium items-center gap-5'>
//                         {
//                             user && user.role === 'admin' ? (
//                                 <>
//                                     <li><Link to="/admin/companies">Companies</Link></li>
//                                     <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) 
//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn && user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src={user.profilePhoto || 'https://github.com/shadcn.png'} // Dynamically display user's avatar
//                     alt='User Avatar'
//                     className='w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src={user.profilePhoto || 'https://github.com/shadcn.png'} // Fallback to default image if user profile photo is missing
//                       alt='User Avatar'
//                       className='w-full h-full object-cover rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>{user.fullname || 'User Name'}</h1> {/* Dynamically display user's name */}
//                     {/* Dynamically display user's bio or fallback message */}
//                     <p className='text-xs text-gray-500'>{user.profile?.bio || 'Welcome to Career Connect'}</p>
//                   </div>
//                 </div>
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div
//                     className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                     onClick={() => navigate('/profile')} // Navigate to user profile
//                   >
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={logoutHandler} // Use logoutHandler for proper logout logic
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Navigate to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Navigate to sign-up page
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Import Link
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   // Check if user is logged in by checking the presence of user data
//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null)); // Clear user data from the Redux store
//         setIsLoggedIn(false); // Update login state
//         navigate("/"); // Navigate to the home page
//         toast.success(res.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Logout failed"); // Show error message
//     }
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* Admin Navigation Links */}
//           {user && user.role === 'admin' && (
//             <ul className='flex font-medium items-center gap-5'>
//               <li><Link to="/admin/companies">Companies</Link></li>
//               <li><Link to="/admin/jobs">Jobs</Link></li>
//             </ul>
//           )}

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn && user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src={user.profilePhoto || 'https://github.com/shadcn.png'} // Dynamically display user's avatar
//                     alt='User Avatar'
//                     className='w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src={user.profilePhoto || 'https://github.com/shadcn.png'} // Fallback to default image if user profile photo is missing
//                       alt='User Avatar'
//                       className='w-full h-full object-cover rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>{user.fullname || 'User Name'}</h1> {/* Dynamically display user's name */}
//                     <p className='text-xs text-gray-500'>{user.profile?.bio || 'Welcome to Career Connect'}</p> {/* Dynamically display user's bio */}
//                   </div>
//                 </div>
//                {
//                                                 user && user.role === 'student' && (
               
//                 <div className='border-t border-gray-300 pt-2'>
//                   <div
//                     className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                     onClick={() => navigate('/profile')} // Navigate to user profile
//                   >
//                     <FaUserCircle className='text-green-600' />
//                     <span>View Profile</span>
//                   </div>
//                   <div
//                                                 )
//                                               }
//                     className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                     onClick={logoutHandler} // Use logoutHandler for proper logout logic
//                   >
//                     <FaSignOutAlt className='text-red-500' />
//                     <span>Log Out</span>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Navigate to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Navigate to sign-up page
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Import Link
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   // Check if user is logged in by checking the presence of user data
//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null)); // Clear user data from the Redux store
//         setIsLoggedIn(false); // Update login state
//         navigate("/"); // Navigate to the home page
//         toast.success(res.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Logout failed"); // Show error message
//     }
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* Admin Navigation Links */}
//           {user && user.role === 'admin' && (
//             <ul className='flex font-medium items-center gap-5'>
//               <li><Link to="/admin/companies">Companies</Link></li>
//               <li><Link to="/admin/jobs">Jobs</Link></li>
//             </ul>
//           )}

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn && user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src={user.profilePhoto || 'https://github.com/shadcn.png'} // Dynamically display user's avatar
//                     alt='User Avatar'
//                     className='w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src={user.profilePhoto || 'https://github.com/shadcn.png'} // Fallback to default image if user profile photo is missing
//                       alt='User Avatar'
//                       className='w-full h-full object-cover rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>{user.fullname || 'User Name'}</h1> {/* Dynamically display user's name */}
//                     <p className='text-xs text-gray-500'>{user.profile?.bio || 'Welcome to Career Connect'}</p> {/* Dynamically display user's bio */}
//                   </div>
//                 </div>

//                 {/* If user is not an admin, show "View Profile" */}
//                 {user.role !== 'admin' && (
//                   <div className='border-t border-gray-300 pt-2'>
//                     <div
//                       className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                       onClick={() => navigate('/profile')} // Navigate to user profile
//                     >
//                       <FaUserCircle className='text-green-600' />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Logout option for all users */}
//                 <div
//                   className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                   onClick={logoutHandler} // Use logoutHandler for proper logout logic
//                 >
//                   <FaSignOutAlt className='text-red-500' />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Navigate to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Navigate to sign-up page
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Import Link
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   // Check if user is logged in by checking the presence of user data
//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null)); // Clear user data from the Redux store
//         setIsLoggedIn(false); // Update login state
//         navigate("/"); // Navigate to the home page
//         toast.success(res.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Logout failed"); // Show error message
//     }
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/')}
//             >
//               Home
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/browse')}
//             >
//               Browse
//             </li>
//           </ul>

//           {/* Admin Navigation Links */}
//           {user && user.role === 'admin' && (
//             <ul className='flex font-medium items-center gap-5'>
//               <li><Link to="/admin/companies">Companies</Link></li>
//               <li><Link to="/admin/jobs">Jobs</Link></li>
//             </ul>
//           )}

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn && user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src={user.profilePhoto || 'https://github.com/shadcn.png'} // Dynamically display user's avatar
//                     alt='User Avatar'
//                     className='w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src={user.profilePhoto || 'https://github.com/shadcn.png'} // Fallback to default image if user profile photo is missing
//                       alt='User Avatar'
//                       className='w-full h-full object-cover rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>{user.fullname || 'User Name'}</h1> {/* Dynamically display user's name */}
//                     <p className='text-xs text-gray-500'>{user.profile?.bio || 'Welcome to Career Connect'}</p> {/* Dynamically display user's bio */}
//                   </div>
//                 </div>

//                 {/* Only display View Profile for non-admin users */}
//                 {user.role !== 'admin' && (
//                   <div className='border-t border-gray-300 pt-2'>
//                     <div
//                       className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                       onClick={() => navigate('/profile')} // Navigate to user profile
//                     >
//                       <FaUserCircle className='text-green-600' />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                   onClick={logoutHandler} // Use logoutHandler for proper logout logic
//                 >
//                   <FaSignOutAlt className='text-red-500' />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Navigate to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Navigate to sign-up page
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   // Check if user is logged in by checking the presence of user data
//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null)); // Clear user data from the Redux store
//         setIsLoggedIn(false); // Update login state
//         navigate("/"); // Navigate to the home page
//         toast.success(res.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Logout failed"); // Show error message
//     }
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             {/* Only show Home and Browse if the user is NOT an admin */}
//             {user && user.role !== 'admin' && (
//               <>
//                 <li
//                   className='hover:text-green-600 cursor-pointer transition duration-300'
//                   onClick={() => navigate('/')}
//                 >
//                   Home
//                 </li>
//                 <li
//                   className='hover:text-green-600 cursor-pointer transition duration-300'
//                   onClick={() => navigate('/browse')}
//                 >
//                   Browse
//                 </li>
//               </>
//             )}
//           </ul>

//           {/* Admin Navigation Links */}
//           {user && user.role === 'admin' && (
//             <ul className='flex font-medium items-center gap-5'>
//               <li><Link to="/admin/companies">Companies</Link></li>
//               <li><Link to="/admin/jobs">Jobs</Link></li>
//             </ul>
//           )}

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn && user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src={user.profilePhoto || 'https://github.com/shadcn.png'} // Dynamically display user's avatar
//                     alt='User Avatar'
//                     className='w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src={user.profilePhoto || 'https://github.com/shadcn.png'} // Fallback to default image if user profile photo is missing
//                       alt='User Avatar'
//                       className='w-full h-full object-cover rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>{user.fullname || 'User Name'}</h1> {/* Dynamically display user's name */}
//                     <p className='text-xs text-gray-500'>{user.profile?.bio || 'Welcome to Career Connect'}</p> {/* Dynamically display user's bio */}
//                   </div>
//                 </div>

//                 {/* Only display View Profile for non-admin users */}
//                 {user.role !== 'admin' && (
//                   <div className='border-t border-gray-300 pt-2'>
//                     <div
//                       className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                       onClick={() => navigate('/profile')} // Navigate to user profile
//                     >
//                       <FaUserCircle className='text-green-600' />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                   onClick={logoutHandler} // Use logoutHandler for proper logout logic
//                 >
//                   <FaSignOutAlt className='text-red-500' />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Navigate to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Navigate to sign-up page
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   // Check if user is logged in by checking the presence of user data
//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null)); // Clear user data from the Redux store
//         setIsLoggedIn(false); // Update login state
//         navigate("/"); // Navigate to the home page
//         toast.success(res.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Logout failed"); // Show error message
//     }
//   };

//   return (
//     <div className='bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none'>
//       <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
//         {/* Logo Section */}
//         <div className='flex items-center'>
//           <img
//             src='/kiit-logo.png'
//             alt='KIIT Logo'
//             className='h-20 w-350 mr-2'
//           />
//           <h1 className='text-2xl font-extrabold tracking-tight'>
//             <span className='text-green-600'>KIIT</span>
//             <span className='ml-2 text-gray-800'>Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex items-center gap-8'>
//           <ul className='flex items-center gap-6 text-md font-medium'>
//             {/* Only show Home and Browse if the user is NOT an admin */}
//             {user && user.role !== 'admin' && (
//               <>
//                 <li
//                   className='hover:text-green-600 cursor-pointer transition duration-300'
//                   onClick={() => navigate('/')}
//                 >
//                   Home
//                 </li>
//                 <li
//                   className='hover:text-green-600 cursor-pointer transition duration-300'
//                   onClick={() => navigate('/browse')}
//                 >
//                   Browse
//                 </li>
//               </>
//             )}

//             {/* Jobs will appear for both users and admin */}
//             <li
//               className='hover:text-green-600 cursor-pointer transition duration-300'
//               onClick={() => navigate('/jobs')}
//             >
//               Jobs
//             </li>
//           </ul>

//           {/* Admin Navigation Links */}
//           {user && user.role === 'admin' && (
//             <ul className='flex font-medium items-center gap-5'>
//               <li><Link to="/admin/companies">Companies</Link></li>
//               <li><Link to="/admin/jobs">Manage Jobs</Link></li> {/* You can label this as "Manage Jobs" for admins */}
//             </ul>
//           )}

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn && user ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className='cursor-pointer'>
//                   <img
//                     src={user.profilePhoto || 'https://github.com/shadcn.png'} // Dynamically display user's avatar
//                     alt='User Avatar'
//                     className='w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
//                 <div className='flex items-center gap-4 mb-3'>
//                   <Avatar className='w-14 h-14'>
//                     <img
//                       src={user.profilePhoto || 'https://github.com/shadcn.png'} // Fallback to default image if user profile photo is missing
//                       alt='User Avatar'
//                       className='w-full h-full object-cover rounded-full border border-gray-300 shadow-sm'
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className='text-lg font-semibold'>{user.fullname || 'User Name'}</h1> {/* Dynamically display user's name */}
//                     <p className='text-xs text-gray-500'>{user.profile?.bio || 'Welcome to Career Connect'}</p> {/* Dynamically display user's bio */}
//                   </div>
//                 </div>

//                 {/* Only display View Profile for non-admin users */}
//                 {user.role !== 'admin' && (
//                   <div className='border-t border-gray-300 pt-2'>
//                     <div
//                       className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'
//                       onClick={() => navigate('/profile')} // Navigate to user profile
//                     >
//                       <FaUserCircle className='text-green-600' />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
//                   onClick={logoutHandler} // Use logoutHandler for proper logout logic
//                 >
//                   <FaSignOutAlt className='text-red-500' />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className='flex items-center gap-4'>
//               <button
//                 onClick={() => navigate('/login')} // Navigate to login page
//                 className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')} // Navigate to sign-up page
//                 className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useMemo } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         setIsLoggedIn(false);
//         navigate('/');
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Logout failed');
//     }
//   };

//   // Memoized navigation links
//   const navigationLinks = useMemo(() => {
//     return (
//       <>
//         {user && user.role !== 'admin' && (
//           <>
//             <li onClick={() => navigate('/')} className="hover:text-green-600 cursor-pointer transition duration-300">Home</li>
//             <li onClick={() => navigate('/browse')} className="hover:text-green-600 cursor-pointer transition duration-300">Browse</li>
//           </>
//         )}
//         <li onClick={() => navigate('/jobs')} className="hover:text-green-600 cursor-pointer transition duration-300">Jobs</li>
//       </>
//     );
//   }, [user]);

//   return (
//     <div className="bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none">
//       <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             src="/kiit-logo.png"
//             alt="KIIT Logo"
//             className="h-20 w-350 mr-2"
//           />
//           <h1 className="text-2xl font-extrabold tracking-tight">
//             <span className="text-green-600">KIIT</span>
//             <span className="ml-2 text-gray-800">Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-8">
//           <ul className="flex items-center gap-6 text-md font-medium">
//             {navigationLinks}
//           </ul>

//           {/* Admin Navigation Links */}
//           {user?.role === 'admin' && (
//             <ul className="flex font-medium items-center gap-5">
//               <li><Link to="/admin/companies">Companies</Link></li>
//               {/* <li><Link to="/admin/jobs">Manage Jobs</Link></li> */}
//             </ul>
//           )}

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <img
//                     src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                     alt={user?.fullname || 'User Avatar'}
//                     className="w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200">
//                 <div className="flex items-center gap-4 mb-3">
//                   <Avatar className="w-14 h-14">
//                     <img
//                       src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                       alt={user?.fullname || 'User Avatar'}
//                       className="w-full h-full object-cover rounded-full border border-gray-300 shadow-sm"
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className="text-lg font-semibold">{user?.fullname || 'User Name'}</h1>
//                     <p className="text-xs text-gray-500">{user?.profile?.bio || 'Welcome to Career Connect'}</p>
//                   </div>
//                 </div>

//                 {user?.role !== 'admin' && (
//                   <div className="border-t border-gray-300 pt-2">
//                     <div
//                       className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200"
//                       onClick={() => navigate('/profile')}
//                     >
//                       <FaUserCircle className="text-green-600" />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className="flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200"
//                   onClick={logoutHandler}
//                 >
//                   <FaSignOutAlt className="text-red-500" />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => navigate('/login')}
//                 className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className="bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Navbar);




// import React, { useState, useEffect, useMemo } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         setIsLoggedIn(false);
//         navigate('/');
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Logout failed');
//     }
//   };

//   // Memoized navigation links for students
//   const studentLinks = useMemo(() => {
//     return (
//       <>
//         <li onClick={() => navigate('/')} className="hover:text-green-600 cursor-pointer transition duration-300">Home</li>
//         <li onClick={() => navigate('/browse')} className="hover:text-green-600 cursor-pointer transition duration-300">Browse</li>
//         <li onClick={() => navigate('/jobs')} className="hover:text-green-600 cursor-pointer transition duration-300">Jobs</li>
//       </>
//     );
//   }, []);

//   // Memoized navigation links for admins
//   const adminLinks = useMemo(() => {
//     return (
//       <>
//         <li><Link to="/admin/companies" className="hover:text-green-600 transition duration-300">Companies</Link></li>
//         <li><Link to="/admin/jobs" className="hover:text-green-600 transition duration-300">Manage Jobs</Link></li>
//       </>
//     );
//   }, []);

//   return (
//     <div className="bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none">
//       <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             src="/kiit-logo.png"
//             alt="KIIT Logo"
//             className="h-10 w-15 mr-2"
//           />
//           <h1 className="text-2xl font-extrabold tracking-tight">
//             {/* <span className="text-green-600">KIIT</span> */}
//             <span className="ml-2 text-gray-800">Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-8">
//           <ul className="flex items-center gap-6 text-md font-medium">
//             {user && user.role !== 'admin' ? studentLinks : adminLinks}
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <img
//                     src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                     alt={user?.fullname || 'User Avatar'}
//                     className="w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200">
//                 <div className="flex items-center gap-4 mb-3">
//                   <Avatar className="w-14 h-14">
//                     <img
//                       src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                       alt={user?.fullname || 'User Avatar'}
//                       className="w-full h-full object-cover rounded-full border border-gray-300 shadow-sm"
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className="text-lg font-semibold">{user?.fullname || 'User Name'}</h1>
//                     <p className="text-xs text-gray-500">{user?.profile?.bio || 'Welcome to Career Connect'}</p>
//                   </div>
//                 </div>

//                 {user?.role !== 'admin' && (
//                   <div className="border-t border-gray-300 pt-2">
//                     <div
//                       className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200"
//                       onClick={() => navigate('/profile')}
//                     >
//                       <FaUserCircle className="text-green-600" />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className="flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200"
//                   onClick={logoutHandler}
//                 >
//                   <FaSignOutAlt className="text-red-500" />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => navigate('/login')}
//                 className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className="bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Navbar);




















// import React, { useState, useEffect, useMemo } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         setIsLoggedIn(false);
//         navigate('/');
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Logout failed');
//     }
//   };

//   // Memoized navigation links for students
//   const studentLinks = useMemo(() => {
//     return (
//       <>
//         <li onClick={() => navigate('/')} className="hover:text-green-600 cursor-pointer transition duration-300">Home</li>
//         <li onClick={() => navigate('/career-tools')} className="hover:text-green-600 cursor-pointer transition duration-300">Career Tools</li> {/* Updated link */}
//         <li onClick={() => navigate('/jobs')} className="hover:text-green-600 cursor-pointer transition duration-300">Jobs</li>
//       </>
//     );
//   }, []);

//   // Memoized navigation links for admins
//   const adminLinks = useMemo(() => {
//     return (
//       <>
//         <li><Link to="/admin/companies" className="hover:text-green-600 transition duration-300">Companies</Link></li>
//         <li><Link to="/admin/jobs" className="hover:text-green-600 transition duration-300">Manage Jobs</Link></li>
//       </>
//     );
//   }, []);

//   return (
//     <div className="bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none">
//       <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             src="/kiit-logo.png"
//             alt="KIIT Logo"
//             className="h-10 w-15 mr-2"
//           />
//           <h1 className="text-2xl font-extrabold tracking-tight">
//             <span className="ml-2 text-gray-800">Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-8">
//           <ul className="flex items-center gap-6 text-md font-medium">
//             {user && user.role !== 'admin' ? studentLinks : adminLinks}
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <img
//                     src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                     alt={user?.fullname || 'User Avatar'}
//                     className="w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200">
//                 <div className="flex items-center gap-4 mb-3">
//                   <Avatar className="w-14 h-14">
//                     <img
//                       src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                       alt={user?.fullname || 'User Avatar'}
//                       className="w-full h-full object-cover rounded-full border border-gray-300 shadow-sm"
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className="text-lg font-semibold">{user?.fullname || 'User Name'}</h1>
//                     <p className="text-xs text-gray-500">{user?.profile?.bio || 'Welcome to Career Connect'}</p>
//                   </div>
//                 </div>

//                 {user?.role !== 'admin' && (
//                   <div className="border-t border-gray-300 pt-2">
//                     <div
//                       className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200"
//                       onClick={() => navigate('/profile')}
//                     >
//                       <FaUserCircle className="text-green-600" />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className="flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200"
//                   onClick={logoutHandler}
//                 >
//                   <FaSignOutAlt className="text-red-500" />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => navigate('/login')}
//                 className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className="bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Navbar);



// // Navbar.js

// import React, { useState, useEffect, useMemo } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
// import { Avatar } from '../ui/avatar';
// import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setUser } from '@/redux/authSlice';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access user data from Redux store
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user]);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         setIsLoggedIn(false);
//         navigate('/');
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Logout failed');
//     }
//   };

//   // Memoized navigation links for students
//   const studentLinks = useMemo(() => (
//     <>
//       <li onClick={() => navigate('/')} className="hover:text-green-600 cursor-pointer transition duration-300">Home</li>
//       <li onClick={() => navigate('/career-tools')} className="hover:text-green-600 cursor-pointer transition duration-300">Career Tools</li>
//       <li onClick={() => navigate('/jobs')} className="hover:text-green-600 cursor-pointer transition duration-300">Jobs</li>
//     </>
//   ), []);

//   // Memoized navigation links for admins
//   const adminLinks = useMemo(() => (
//     <>
//       <li><Link to="/admin/companies" className="hover:text-green-600 transition duration-300">Companies</Link></li>
//       <li><Link to="/admin/jobs" className="hover:text-green-600 transition duration-300">Manage Jobs</Link></li>
//     </>
//   ), []);

//   return (
//     <div className="bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none">
//       <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             src="/kiit-logo.png"
//             alt="KIIT Logo"
//             className="h-10 w-15 mr-2"
//           />
//           <h1 className="text-2xl font-extrabold tracking-tight">
//             <span className="ml-2 text-gray-800">Career Connect</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-8">
//           <ul className="flex items-center gap-6 text-md font-medium">
//             {/* Show student links if not an admin, otherwise show admin links */}
//             {user && user.role === 'admin' ? adminLinks : studentLinks}
//           </ul>

//           {/* User Avatar and Profile Options */}
//           {isLoggedIn ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <img
//                     src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                     alt={user?.fullname || 'User Avatar'}
//                     className="w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200">
//                 <div className="flex items-center gap-4 mb-3">
//                   <Avatar className="w-14 h-14">
//                     <img
//                       src={user?.profilePhoto || 'https://github.com/shadcn.png'}
//                       alt={user?.fullname || 'User Avatar'}
//                       className="w-full h-full object-cover rounded-full border border-gray-300 shadow-sm"
//                     />
//                   </Avatar>
//                   <div>
//                     <h1 className="text-lg font-semibold">{user?.fullname || 'User Name'}</h1>
//                     <p className="text-xs text-gray-500">{user?.profile?.bio || 'Welcome to Career Connect'}</p>
//                   </div>
//                 </div>

//                 {user?.role !== 'admin' && (
//                   <div className="border-t border-gray-300 pt-2">
//                     <div
//                       className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200"
//                       onClick={() => navigate('/profile')}
//                     >
//                       <FaUserCircle className="text-green-600" />
//                       <span>View Profile</span>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className="flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200"
//                   onClick={logoutHandler}
//                 >
//                   <FaSignOutAlt className="text-red-500" />
//                   <span>Log Out</span>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => navigate('/login')}
//                 className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/signup')}
//                 className="bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Navbar);





// Navbar.js

import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Avatar } from '../ui/avatar';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { USER_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setUser } from '@/redux/authSlice';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        setIsLoggedIn(false);
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  };

  const studentLinks = useMemo(() => (
    <>
      <li onClick={() => navigate('/')} className="hover:text-green-600 cursor-pointer transition duration-300">Home</li>
      <li onClick={() => navigate('/career-tools')} className="hover:text-green-600 cursor-pointer transition duration-300">Career Tools</li>
      <li onClick={() => navigate('/jobs')} className="hover:text-green-600 cursor-pointer transition duration-300">Jobs</li>
     
    </>
  ), []);

  const adminLinks = useMemo(() => (
    <>
      <li><Link to="/admin/companies" className="hover:text-green-600 transition duration-300">Companies</Link></li>
      <li><Link to="/admin/jobs" className="hover:text-green-600 transition duration-300">Manage Jobs</Link></li>
    </>
  ), []);

  const guestLinks = useMemo(() => (
    <>
      <li onClick={() => navigate('/')} className="hover:text-green-600 cursor-pointer transition duration-300">Home</li>
      <li onClick={() => navigate('/placement-records')} className="hover:text-green-600 cursor-pointer transition duration-300">Placement Records</li>
    </>
  ), []);

  return (
    <div className="bg-white text-gray-900 shadow-md h-16 flex items-center w-full max-w-none">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/kiit-logo.png"
            alt="KIIT Logo"
            className="h-10 w-15 mr-2"
          />
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="ml-2 text-gray-800">Career Connect</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6 text-md font-medium">
            {isLoggedIn ? (user.role === 'admin' ? adminLinks : studentLinks) : guestLinks}
          </ul>

          {/* User Avatar and Profile Options */}
          {isLoggedIn ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <img
                    src={user?.profilePhoto || 'https://github.com/shadcn.png'}
                    alt={user?.fullname || 'User Avatar'}
                    className="w-full h-full object-cover rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar className="w-14 h-14">
                    <img
                      src={user?.profilePhoto || 'https://github.com/shadcn.png'}
                      alt={user?.fullname || 'User Avatar'}
                      className="w-full h-full object-cover rounded-full border border-gray-300 shadow-sm"
                    />
                  </Avatar>
                  <div>
                    <h1 className="text-lg font-semibold">{user?.fullname || 'User Name'}</h1>
                    <p className="text-xs text-gray-500">{user?.profile?.bio || 'Welcome to Career Connect'}</p>
                  </div>
                </div>

                {user?.role !== 'admin' && (
                  <div className="border-t border-gray-300 pt-2">
                    <div
                      className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200"
                      onClick={() => navigate('/profile')}
                    >
                      <FaUserCircle className="text-green-600" />
                      <span>View Profile</span>
                    </div>
                  </div>
                )}

                <div
                  className="flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200"
                  onClick={logoutHandler}
                >
                  <FaSignOutAlt className="text-red-500" />
                  <span>Log Out</span>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);














