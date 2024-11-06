












// import React from 'react';
// import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './shared/Navbar';

// const PlacementRecords = () => {
//   const navigate = useNavigate();

//   const handleApplyNowClick = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="placement-records-container bg-gradient-to-br from-green-50 to-green-100 text-gray-800 p-8 rounded-lg shadow-2xl font-sans">
//       <div className="text-center mb-10">
//         <h1 className="text-5xl font-bold mb-4 text-green-800 font-serif tracking-wide">KIIT Placement Records 🎓</h1>
//         <p className="text-lg text-green-700 font-light">
//           Your Dream Job Starts Here! <br />
//           Explore a world of opportunities with KIIT’s industry-leading placement programs!
//         </p>
//       </div>

//       <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//         {[
//           { icon: <FaUserGraduate />, value: "98%", label: "Placement Rate" },
//           { icon: <FaBriefcase />, value: "₹50,000", label: "Average Salary Package" },
//           { icon: <FaBuilding />, value: "500+", label: "Hiring Partners" },
//           { icon: <FaChalkboardTeacher />, value: "100+", label: "Training Sessions" },
//         ].map((stat, index) => (
//           <div
//             key={index}
//             className="stat-item flex flex-col items-center p-6 bg-green-200 text-green-800 rounded-lg shadow-md transition-transform transform hover:scale-105"
//           >
//             <div className="text-4xl mb-2">{stat.icon}</div>
//             <h2 className="text-3xl font-semibold">{stat.value}</h2>
//             <p className="font-light text-center text-green-900">{stat.label}</p>
//           </div>
//         ))}
//       </div>

//       <div className="highlights-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//         {[
//           {
//             title: "Top Recruiters",
//             description: "Partnered with global leaders like Google, Microsoft, Amazon, Infosys, Wipro, TCS, and more!",
//             bgClass: "bg-green-700",
//           },
//           {
//             title: "Industry Training",
//             description: "Real-world training with a focus on practical skills, making you job-ready from day one.",
//             bgClass: "bg-green-600",
//           },
//           {
//             title: "High Salary Packages",
//             description: "Our students are placed with average packages of ₹50,000 and top offers reaching over ₹100,000!",
//             bgClass: "bg-green-500",
//           },
//           {
//             title: "Global Opportunities",
//             description: "KIIT opens doors to prestigious companies across the globe, offering exciting career pathways.",
//             bgClass: "bg-green-400",
//           },
//         ].map((highlight, index) => (
//           <div
//             key={index}
//             className={`highlight-item p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${highlight.bgClass}`}
//           >
//             <h3 className="text-xl font-semibold text-white font-serif">{highlight.title}</h3>
//             <p className="mt-2 text-sm text-gray-200 font-light">{highlight.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="top-companies-container mb-10">
//         <h2 className="text-3xl font-bold text-center mb-4 text-green-900 font-serif">Top Companies Offering Highest Packages</h2>
//         <ul className="list-disc list-inside text-center space-y-2 text-gray-700 font-medium">
//           {[
//             { company: "Google", package: "₹120,000" },
//             { company: "Microsoft", package: "₹115,000" },
//             { company: "Amazon", package: "₹110,000" },
//             { company: "Facebook", package: "₹108,000" },
//             { company: "Goldman Sachs", package: "₹105,000" },
//           ].map((item, index) => (
//             <li key={index}>
//               <strong>{item.company}</strong> - {item.package}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="student-reviews-container mb-10 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-center mb-4 text-green-900 font-serif">Success Stories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               name: "Amit S.",
//               review: "KIIT provided me with the best opportunities and training. The placement team is dedicated and supportive, guiding us every step of the way!",
//               img: "/student1.png"
//             },
//             {
//               name: "Priya R.",
//               review: "I landed my dream job at Google thanks to the excellent training and placement assistance from KIIT!",
//               img: "/student2.png"
//             },
//             {
//               name: "Rahul K.",
//               review: "The exposure to industry standards and real-world projects helped me build confidence and skills needed for the job market.",
//               img: "/student3.png"
//             }
//           ].map((review, index) => (
//             <div key={index} className="review-item bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 relative flex flex-col items-start">
//               <img 
//                 src={review.img} 
//                 alt={review.name} 
//                 className="w-16 h-16 rounded-full border-4 border-green-600 mb-4 object-cover"
//               />
//               <p className="font-light text-gray-700 italic">"{review.review}"</p>
//               <p className="font-semibold text-green-600 mt-2">- {review.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="cta-container mt-10 text-center">
//         <p className="text-lg mb-4 text-green-800 font-light">
//           Join KIIT and become part of our success story. Your future begins here!
//         </p>
//         <button
//           onClick={handleApplyNowClick}
//           className="bg-yellow-400 text-green-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
//         >
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlacementRecords;









// import React from 'react';
// import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './shared/Navbar';

// const PlacementRecords = () => {
//   const navigate = useNavigate();

//   const handleApplyNowClick = () => {
//     navigate('/signup');
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="placement-records-container bg-gradient-to-br from-green-50 to-green-100 text-gray-800 p-8 rounded-lg shadow-2xl font-sans">
//         <div className="text-center mb-10">
//           <h1 className="text-5xl font-bold mb-4 text-green-800 font-serif tracking-wide">KIIT Placement Records 🎓</h1>
//           <p className="text-lg text-green-700 font-light">
//             Your Dream Job Starts Here! <br />
//             Explore a world of opportunities with KIIT’s industry-leading placement programs!
//           </p>
//         </div>

//         <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {[
//             { icon: <FaUserGraduate />, value: "98%", label: "Placement Rate" },
//             { icon: <FaBriefcase />, value: "₹50,000", label: "Average Salary Package" },
//             { icon: <FaBuilding />, value: "500+", label: "Hiring Partners" },
//             { icon: <FaChalkboardTeacher />, value: "100+", label: "Training Sessions" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="stat-item flex flex-col items-center p-6 bg-green-200 text-green-800 rounded-lg shadow-md transition-transform transform hover:scale-105"
//             >
//               <div className="text-4xl mb-2">{stat.icon}</div>
//               <h2 className="text-3xl font-semibold">{stat.value}</h2>
//               <p className="font-light text-center text-green-900">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         <div className="highlights-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {[
//             {
//               title: "Top Recruiters",
//               description: "Partnered with global leaders like Google, Microsoft, Amazon, Infosys, Wipro, TCS, and more!",
//               bgClass: "bg-green-700",
//             },
//             {
//               title: "Industry Training",
//               description: "Real-world training with a focus on practical skills, making you job-ready from day one.",
//               bgClass: "bg-green-600",
//             },
//             {
//               title: "High Salary Packages",
//               description: "Our students are placed with average packages of ₹50,000 and top offers reaching over ₹100,000!",
//               bgClass: "bg-green-500",
//             },
//             {
//               title: "Global Opportunities",
//               description: "KIIT opens doors to prestigious companies across the globe, offering exciting career pathways.",
//               bgClass: "bg-green-400",
//             },
//           ].map((highlight, index) => (
//             <div
//               key={index}
//               className={`highlight-item p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${highlight.bgClass}`}
//             >
//               <h3 className="text-xl font-semibold text-white font-serif">{highlight.title}</h3>
//               <p className="mt-2 text-sm text-gray-200 font-light">{highlight.description}</p>
//             </div>
//           ))}
//         </div>





//         <div className="top-companies-container mb-10">
//   <h2 className="text-3xl font-bold text-center mb-4 text-green-900 font-serif">Top Companies Offering Highest Packages</h2>
//   <ul className="text-center space-y-4">
//     {[
//       { company: "Google", package: "₹120,000", logo: "/google.png" },
//       { company: "Microsoft", package: "₹115,000", logo: "/microsoft.png" },
//       { company: "Amazon", package: "₹110,000", logo: "/amazon.png" },
//       { company: "Facebook", package: "₹108,000", logo: "/facebook.png" },
//       { company: "Goldman Sachs", package: "₹105,000", logo: "/goldman.png" },
//     ].map((item, index) => (
//       <li key={index} className="flex items-center justify-center gap-4">
//         <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 object-contain" />
//         <div className="text-gray-700 font-medium">
//           <strong>{item.company}</strong> - {item.package}
//         </div>
//       </li>
//     ))}
//   </ul>
// </div>


//         <div className="student-reviews-container mb-10 bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold text-center mb-4 text-green-900 font-serif">Success Stories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 name: "Amit S.",
//                 review: "KIIT provided me with the best opportunities and training. The placement team is dedicated and supportive, guiding us every step of the way!",
//                 img: "/student1.png"
//               },
//               {
//                 name: "Priya R.",
//                 review: "I landed my dream job at Google thanks to the excellent training and placement assistance from KIIT!",
//                 img: "/student2.png"
//               },
//               {
//                 name: "Rahul K.",
//                 review: "The exposure to industry standards and real-world projects helped me build confidence and skills needed for the job market.",
//                 img: "/student3.png"
//               }
//             ].map((review, index) => (
//               <div key={index} className="review-item bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 relative flex flex-col items-start">
//                 <img 
//                   src={review.img} 
//                   alt={review.name} 
//                   className="w-16 h-16 rounded-full border-4 border-green-600 mb-4 object-cover"
//                 />
//                 <p className="font-light text-gray-700 italic">"{review.review}"</p>
//                 <p className="font-semibold text-green-600 mt-2">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="cta-container mt-10 text-center">
//           <p className="text-lg mb-4 text-green-800 font-light">
//             Join KIIT and become part of our success story. Your future begins here!
//           </p>
//           <button
//             onClick={handleApplyNowClick}
//             className="bg-yellow-400 text-green-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
//           >
//             Apply Now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PlacementRecords;







// import React from 'react';
// import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './shared/Navbar';

// const PlacementRecords = () => {
//   const navigate = useNavigate();

//   const handleApplyNowClick = () => {
//     navigate('/signup');
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="placement-records-container bg-gradient-to-br from-green-50 to-green-100 text-gray-800 p-8 rounded-lg shadow-2xl font-sans">
//         <div className="text-center mb-10">
//           <h1 className="text-5xl font-bold mb-4 text-green-800 font-serif tracking-wide">KIIT Placement Records 🎓</h1>
//           <p className="text-lg text-green-700 font-light">
//             Your Dream Job Starts Here! <br />
//             Explore a world of opportunities with KIIT’s industry-leading placement programs!
//           </p>
//         </div>

//         <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {[
//             { icon: <FaUserGraduate />, value: "98%", label: "Placement Rate" },
//             { icon: <FaBriefcase />, value: "₹50,000", label: "Average Salary Package" },
//             { icon: <FaBuilding />, value: "500+", label: "Hiring Partners" },
//             { icon: <FaChalkboardTeacher />, value: "100+", label: "Training Sessions" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="stat-item flex flex-col items-center p-6 bg-green-200 text-green-800 rounded-lg shadow-md transition-transform transform hover:scale-105"
//             >
//               <div className="text-4xl mb-2">{stat.icon}</div>
//               <h2 className="text-3xl font-semibold">{stat.value}</h2>
//               <p className="font-light text-center text-green-900">{stat.label}</p>
//             </div>
//           ))}
//         </div>

   




//         <div className="highlights-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {[
//             {
//               title: "Top Recruiters",
//               description: "Partnered with global leaders like Google, Microsoft, Amazon, Infosys, Wipro, TCS, and more!",
//               bgClass: "bg-green-700",
//             },
//             {
//               title: "Industry Training",
//               description: "Real-world training with a focus on practical skills, making you job-ready from day one.",
//               bgClass: "bg-green-600",
//             },
//             {
//               title: "High Salary Packages",
//               description: "Our students are placed with average packages of ₹50,000 and top offers reaching over ₹100,000!",
//               bgClass: "bg-green-500",
//             },
//             {
//               title: "Global Opportunities",
//               description: "KIIT opens doors to prestigious companies across the globe, offering exciting career pathways.",
//               bgClass: "bg-green-400",
//             },
//           ].map((highlight, index) => (
//             <div
//               key={index}
//               className={`highlight-item p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${highlight.bgClass}`}
//             >
//               <h3 className="text-xl font-semibold text-white font-serif">{highlight.title}</h3>
//               <p className="mt-2 text-sm text-gray-200 font-light">{highlight.description}</p>
//             </div>
//           ))}
//         </div>




// <div className="top-companies-container mb-10 bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-lg shadow-lg">
//   <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 font-serif tracking-wide">Top Companies Offering Premium Packages</h2>
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 items-center justify-items-center">
//     {[
//       { company: "Google", package: "₹120,000", logo: "/google.png" },
//       { company: "Microsoft", package: "₹115,000", logo: "/microsoft.png" },
//       { company: "Amazon", package: "₹110,000", logo: "/amazon.png" },
//       { company: "Facebook", package: "₹108,000", logo: "/facebook.png" },
//       { company: "Goldman Sachs", package: "₹105,000", logo: "/goldman.png" },
//     ].map((item, index) => (
//       <div key={index} className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
//         <div className="p-4 rounded-full bg-green-100 shadow-md ring-2 ring-green-200">
//           <div className="p-3 rounded-full bg-white shadow-sm">
//             <img src={item.logo} alt={`${item.company} logo`} className="w-16 h-16 object-contain" />
//           </div>
//         </div>
//         <h3 className="mt-4 text-xl font-semibold text-gray-700">{item.company}</h3>
//         <p className="text-gray-600 font-medium">{item.package}</p>
//       </div>
//     ))}
//   </div>
// </div>




//         <div className="student-reviews-container mb-10 bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold text-center mb-4 text-green-900 font-serif">Success Stories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 name: "Amit S.",
//                 review: "KIIT provided me with the best opportunities and training. The placement team is dedicated and supportive, guiding us every step of the way!",
//                 img: "/student1.png"
//               },
//               {
//                 name: "Priya R.",
//                 review: "I landed my dream job at Google thanks to the excellent training and placement assistance from KIIT!",
//                 img: "/student2.png"
//               },
//               {
//                 name: "Rahul K.",
//                 review: "The exposure to industry standards and real-world projects helped me build confidence and skills needed for the job market.",
//                 img: "/student3.png"
//               }
//             ].map((review, index) => (
//               <div key={index} className="review-item bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 relative flex flex-col items-start">
//                 <img 
//                   src={review.img} 
//                   alt={review.name} 
//                   className="w-16 h-16 rounded-full border-4 border-green-600 mb-4 object-cover"
//                 />
//                 <p className="font-light text-gray-700 italic">"{review.review}"</p>
//                 <p className="font-semibold text-green-600 mt-2">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="cta-container mt-10 text-center">
//           <p className="text-lg mb-4 text-green-800 font-light">
//             Join KIIT and become part of our success story. Your future begins here!
//           </p>
//           <button
//             onClick={handleApplyNowClick}
//             className="bg-yellow-400 text-green-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
//           >
//             Apply Now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PlacementRecords;







// import React from 'react';
// import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './shared/Navbar';

// const PlacementRecords = () => {
//   const navigate = useNavigate();

//   const handleApplyNowClick = () => {
//     navigate('/signup');
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="placement-records-container bg-white text-gray-900 p-8 rounded-xl shadow-lg font-sans">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold mb-4 text-green-800 font-serif tracking-wide">KIIT Placement Records 🎓</h1>
//           <p className="text-lg text-green-700 font-light leading-relaxed">
//             Your Dream Job Starts Here! <br />
//             Explore a world of opportunities with KIIT’s industry-leading placement programs!
//           </p>
//         </div>

//         <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {[
//             { icon: <FaUserGraduate />, value: "98%", label: "Placement Rate" },
//             { icon: <FaBriefcase />, value: "₹50,000", label: "Average Salary Package" },
//             { icon: <FaBuilding />, value: "500+", label: "Hiring Partners" },
//             { icon: <FaChalkboardTeacher />, value: "100+", label: "Training Sessions" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="stat-item flex flex-col items-center p-6 bg-green-200 text-green-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//             >
//               <div className="text-3xl mb-2">{stat.icon}</div>
//               <h2 className="text-3xl font-semibold">{stat.value}</h2>
//               <p className="font-medium text-center text-green-900">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         <div className="highlights-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {[
//             {
//               title: "Top Recruiters",
//               description: "Partnered with global leaders like Google, Microsoft, Amazon, Infosys, Wipro, TCS, and more!",
//               bgClass: "bg-green-700",
//             },
//             {
//               title: "Industry Training",
//               description: "Real-world training with a focus on practical skills, making you job-ready from day one.",
//               bgClass: "bg-green-600",
//             },
//             {
//               title: "High Salary Packages",
//               description: "Our students are placed with average packages of ₹50,000 and top offers reaching over ₹100,000!",
//               bgClass: "bg-green-500",
//             },
//             {
//               title: "Global Opportunities",
//               description: "KIIT opens doors to prestigious companies across the globe, offering exciting career pathways.",
//               bgClass: "bg-green-400",
//             },
//           ].map((highlight, index) => (
//             <div
//               key={index}
//               className={`highlight-item p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${highlight.bgClass}`}
//             >
//               <h3 className="text-xl font-bold text-white font-serif mb-3">{highlight.title}</h3>
//               <p className="text-sm text-gray-100 font-light">{highlight.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="top-companies-container mb-10 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 font-serif tracking-wide">Top Companies Offering Premium Packages</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 items-center justify-items-center">
//             {[
//               { company: "Google", package: "₹120,000", logo: "/google.png" },
//               { company: "Microsoft", package: "₹115,000", logo: "/microsoft.png" },
//               { company: "Amazon", package: "₹110,000", logo: "/amazon.png" },
//               { company: "Facebook", package: "₹108,000", logo: "/facebook.png" },
//               { company: "Goldman Sachs", package: "₹105,000", logo: "/goldman.png" },
//             ].map((item, index) => (
//               <div key={index} className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
//                 <div className="p-3 rounded-full bg-green-100 shadow-md ring-4 ring-green-300">
//                   <div className="p-2 rounded-full bg-white shadow-md">
//                     <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 object-contain" />
//                   </div>
//                 </div>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-700">{item.company}</h3>
//                 <p className="text-gray-600 font-medium">{item.package}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="student-reviews-container mb-10 bg-gray-50 p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold text-center mb-6 text-green-900 font-serif">Success Stories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Amit S.",
//                 review: "KIIT provided me with the best opportunities and training. The placement team is dedicated and supportive, guiding us every step of the way!",
//                 img: "/student1.png"
//               },
//               {
//                 name: "Priya R.",
//                 review: "I landed my dream job at Google thanks to the excellent training and placement assistance from KIIT!",
//                 img: "/student2.png"
//               },
//               {
//                 name: "Rahul K.",
//                 review: "The exposure to industry standards and real-world projects helped me build confidence and skills needed for the job market.",
//                 img: "/student3.png"
//               }
//             ].map((review, index) => (
//               <div key={index} className="review-item bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 relative flex flex-col items-start">
//                 <img 
//                   src={review.img} 
//                   alt={review.name} 
//                   className="w-12 h-12 rounded-full border-4 border-green-700 mb-3 object-cover"
//                 />
//                 <p className="font-light text-gray-700 italic leading-relaxed">"{review.review}"</p>
//                 <p className="font-semibold text-green-700 mt-3">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="cta-container mt-10 text-center">
//           <p className="text-lg mb-4 text-green-800 font-light">
//             Join KIIT and become part of our success story. Your future begins here!
//           </p>
//           <button
//             onClick={handleApplyNowClick}
//             className="bg-yellow-500 text-green-900 font-bold py-2 px-6 rounded-full shadow-xl hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
//           >
//             Apply Now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PlacementRecords;













import React from 'react';
import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from './shared/Navbar';

const PlacementRecords = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <Navbar />
      <div className="placement-records-container bg-white text-gray-900 p-8 rounded-xl shadow-lg font-sans">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-green-800 font-serif tracking-wide">KIIT Placement Records 🎓</h1>
          <p className="text-lg text-green-700 font-light leading-relaxed">
            Your Dream Job Starts Here! <br />
            Explore a world of opportunities with KIIT’s industry-leading placement programs!
          </p>
        </div>

        <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {[
            { icon: <FaUserGraduate />, value: "98%", label: "Placement Rate" },
            { icon: <FaBriefcase />, value: "₹50,000", label: "Average Salary Package" },
            { icon: <FaBuilding />, value: "500+", label: "Hiring Partners" },
            { icon: <FaChalkboardTeacher />, value: "100+", label: "Training Sessions" },
          ].map((stat, index) => (
            <div
              key={index}
              className="stat-item flex flex-col items-center p-6 bg-green-200 text-green-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h2 className="text-3xl font-semibold">{stat.value}</h2>
              <p className="font-medium text-center text-green-900">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="highlights-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {[
            {
              title: "Top Recruiters",
              description: "Partnered with global leaders like Google, Microsoft, Amazon, Infosys, Wipro, TCS, and more!",
              bgClass: "bg-green-700",
            },
            {
              title: "Industry Training",
              description: "Real-world training with a focus on practical skills, making you job-ready from day one.",
              bgClass: "bg-green-600",
            },
            {
              title: "High Salary Packages",
              description: "Our students are placed with average packages of ₹50,000 and top offers reaching over ₹100,000!",
              bgClass: "bg-green-500",
            },
            {
              title: "Global Opportunities",
              description: "KIIT opens doors to prestigious companies across the globe, offering exciting career pathways.",
              bgClass: "bg-green-400",
            },
          ].map((highlight, index) => (
            <div
              key={index}
              className={`highlight-item p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${highlight.bgClass}`}
            >
              <h3 className="text-xl font-bold text-white font-serif mb-3">{highlight.title}</h3>
              <p className="text-sm text-gray-100 font-light">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="top-companies-container mb-10 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 font-serif tracking-wide">Top Companies Offering Premium Packages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 items-center justify-items-center">
            {[
              { company: "Google", package: "₹120,000", logo: "/google.png" },
              { company: "Microsoft", package: "₹115,000", logo: "/microsoft.png" },
              { company: "Amazon", package: "₹110,000", logo: "/amazon.png" },
              { company: "Facebook", package: "₹108,000", logo: "/facebook.png" },
              { company: "Goldman Sachs", package: "₹105,000", logo: "/goldman.png" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
                <div className="p-3 rounded-full bg-green-50 shadow-md ring-4 ring-green-700">
                  <div className="p-2 rounded-full bg-white shadow-md">
                    <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 object-contain" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-700">{item.company}</h3>
                <p className="text-gray-600 font-medium">{item.package}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="student-reviews-container mb-10 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-900 font-serif">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amit S.",
                review: "KIIT provided me with the best opportunities and training. The placement team is dedicated and supportive, guiding us every step of the way!",
                img: "/student1.png"
              },
              {
                name: "Priya R.",
                review: "I landed my dream job at Google thanks to the excellent training and placement assistance from KIIT!",
                img: "/student2.png"
              },
              {
                name: "Rahul K.",
                review: "The exposure to industry standards and real-world projects helped me build confidence and skills needed for the job market.",
                img: "/student3.png"
              }
            ].map((review, index) => (
              <div key={index} className="review-item bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 relative flex flex-col items-start">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-4 border-green-700 mb-3 object-cover"
                />
                <p className="font-light text-gray-700 italic leading-relaxed">"{review.review}"</p>
                <p className="font-semibold text-green-700 mt-3">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-container mt-10 text-center">
          <p className="text-lg mb-4 text-green-800 font-light">
            Join KIIT and become part of our success story. Your future begins here!
          </p>
          <button
            onClick={handleApplyNowClick}
            className="bg-green-500 text-white-900 font-bold py-2 px-6 rounded-full shadow-xl hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PlacementRecords;







