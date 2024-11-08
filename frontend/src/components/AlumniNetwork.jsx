// import React, { useState } from 'react';
// import { FaSearch, FaUserPlus, FaPhone, FaEnvelope, FaLinkedin, FaEdit, FaTrash } from 'react-icons/fa';

// const sampleAlumniData = [
//   {
//     name: 'Ravi Kumar',
//     batch: '2010',
//     department: 'Computer Science Engineering',
//     location: 'Bangalore, India',
//     occupation: 'Senior Software Engineer at Infosys',
//     profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     phone: '123-456-7890',
//     email: 'ravi.kumar@example.com',
//     linkedin: 'https://www.linkedin.com/in/ravi-kumar/',
//   },
//   // Additional sample alumni entries here...
// ];

// const AlumniNetwork = () => {
//   const [alumniList, setAlumniList] = useState(sampleAlumniData);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [registrationStatus, setRegistrationStatus] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     batch: '',
//     department: '',
//     location: '',
//     occupation: '',
//     phone: '',
//     email: '',
//     linkedin: '',
//   });

//   const handleSearch = (e) => setSearchTerm(e.target.value);

//   const filteredAlumni = alumniList.filter((alumni) =>
//     alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddAlumni = () => {
//     setIsEditMode(false);
//     setFormData({
//       name: '',
//       batch: '',
//       department: '',
//       location: '',
//       occupation: '',
//       phone: '',
//       email: '',
//       linkedin: '',
//     });
//     setIsModalOpen(true);
//   };

//   const handleEditAlumni = (index) => {
//     setIsEditMode(true);
//     setEditIndex(index);
//     setFormData(alumniList[index]);
//     setIsModalOpen(true);
//   };

//   const handleDeleteAlumni = (index) => {
//     setAlumniList(alumniList.filter((_, i) => i !== index));
//   };

//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditMode) {
//       const updatedAlumniList = [...alumniList];
//       updatedAlumniList[editIndex] = formData;
//       setAlumniList(updatedAlumniList);
//     } else {
//       setAlumniList([...alumniList, { ...formData, profile: 'Lorem ipsum dolor sit amet.' }]);
//     }
//     setRegistrationStatus('Alumni saved successfully!');
//     setIsModalOpen(false);
//     setTimeout(() => setRegistrationStatus(''), 3000);
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen p-8">
//       <div className="max-w-screen-lg mx-auto text-gray-800">
//         <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Alumni Network</h1>

//         {/* Search Bar */}
//         <div className="flex items-center mb-8 shadow-lg rounded-lg overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search Alumni"
//             value={searchTerm}
//             onChange={handleSearch}
//             className="p-3 w-full text-gray-700 placeholder-gray-500 bg-white border-none focus:outline-none"
//           />
//           <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Add Alumni Button */}
//         <button
//           onClick={handleAddAlumni}
//           className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-lg mb-6 shadow-lg hover:from-green-600 hover:to-blue-700 transition duration-300 ease-in-out"
//         >
//           <FaUserPlus className="mr-2" />
//           Add Alumni
//         </button>

//         {/* Registration Status */}
//         {registrationStatus && (
//           <div className="text-lg text-center text-green-700 mb-6 font-semibold">
//             {registrationStatus}
//           </div>
//         )}

//         {/* Alumni List */}
//         <ul className="space-y-6">
//           {filteredAlumni.map((alumni, index) => (
//             <li key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
//               <h2 className="text-2xl font-semibold text-gray-800">{alumni.name}</h2>
//               <p className="text-gray-700">Batch: {alumni.batch}</p>
//               <p className="text-gray-700">Department: {alumni.department}</p>
//               <p className="text-gray-700">Location: {alumni.location}</p>
//               <p className="text-gray-700">Occupation: {alumni.occupation}</p>

//               {/* Connect with Alumni Section */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold text-gray-900">Connect with Alumni:</h3>
//                 <div className="flex items-center space-x-3 text-gray-700">
//                   <FaPhone className="text-blue-500" /> <span>{alumni.phone}</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-gray-700">
//                   <FaEnvelope className="text-red-500" /> <span>{alumni.email}</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-gray-700">
//                   <FaLinkedin className="text-blue-700" />
//                   <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                     {alumni.linkedin}
//                   </a>
//                 </div>
//               </div>

//               {/* Edit and Delete Buttons */}
//               <div className="mt-4 flex space-x-4">
//                 <button onClick={() => handleEditAlumni(index)} className="text-blue-600 hover:underline flex items-center">
//                   <FaEdit className="mr-1" /> Edit
//                 </button>
//                 <button onClick={() => handleDeleteAlumni(index)} className="text-red-600 hover:underline flex items-center">
//                   <FaTrash className="mr-1" /> Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Modal for Adding or Editing Alumni */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//             <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-xl">
//               <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
//                 {isEditMode ? 'Edit Alumni' : 'Add New Alumni'}
//               </h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {['name', 'batch', 'department', 'location', 'occupation', 'phone', 'email', 'linkedin'].map((field, idx) => (
//                   <input
//                     key={idx}
//                     type={field === 'email' ? 'email' : 'text'}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                     placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                     required
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
//                   />
//                 ))}
//                 <div className="flex justify-between items-center mt-6">
//                   <button
//                     type="button"
//                     onClick={handleCloseModal}
//                     className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition duration-200"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-green-600 transition duration-300"
//                   >
//                     {isEditMode ? 'Save Changes' : 'Register'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AlumniNetwork;











import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaPhone, FaEnvelope, FaLinkedin, FaEdit, FaTrash } from 'react-icons/fa';

const sampleAlumniData = [
  {
    name: 'Ravi Kumar',
    batch: '2010',
    department: 'Computer Science Engineering',
    location: 'Bangalore, India',
    occupation: 'Senior Software Engineer at Infosys',
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    phone: '123-456-7890',
    email: 'ravi.kumar@example.com',
    linkedin: 'https://www.linkedin.com/in/ravi-kumar/',
  },
  // Additional sample alumni entries here...
];

const AlumniNetwork = () => {
  const [alumniList, setAlumniList] = useState(sampleAlumniData);
  const [searchTerm, setSearchTerm] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    department: '',
    location: '',
    occupation: '',
    phone: '',
    email: '',
    linkedin: '',
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredAlumni = alumniList.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAlumni = () => {
    setIsEditMode(false);
    setFormData({
      name: '',
      batch: '',
      department: '',
      location: '',
      occupation: '',
      phone: '',
      email: '',
      linkedin: '',
    });
    setIsModalOpen(true);
  };

  const handleEditAlumni = (index) => {
    setIsEditMode(true);
    setEditIndex(index);
    setFormData(alumniList[index]);
    setIsModalOpen(true);
  };

  const handleDeleteAlumni = (index) => {
    setAlumniList(alumniList.filter((_, i) => i !== index));
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      const updatedAlumniList = [...alumniList];
      updatedAlumniList[editIndex] = formData;
      setAlumniList(updatedAlumniList);
    } else {
      setAlumniList([...alumniList, { ...formData, profile: 'Lorem ipsum dolor sit amet.' }]);
    }
    setRegistrationStatus('Alumni saved successfully!');
    setIsModalOpen(false);
    setTimeout(() => setRegistrationStatus(''), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen p-8">
      <div className="max-w-screen-lg mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Alumni Network</h1>

        {/* Search Bar */}
        <div className="flex items-center mb-8 shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search Alumni"
            value={searchTerm}
            onChange={handleSearch}
            className="p-3 w-full text-gray-700 placeholder-gray-500 bg-white border-none focus:outline-none"
          />
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
            <FaSearch />
          </button>
        </div>

        {/* Add Alumni Button */}
        <button
          onClick={handleAddAlumni}
          className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-lg mb-6 shadow-lg hover:from-green-600 hover:to-blue-700 transition duration-300 ease-in-out"
        >
          <FaUserPlus className="mr-2" />
          Add Alumni
        </button>

        {/* Registration Status */}
        {registrationStatus && (
          <div className="text-lg text-center text-green-700 mb-6 font-semibold">
            {registrationStatus}
          </div>
        )}

        {/* Alumni List */}
        <ul className="space-y-6">
          {filteredAlumni.map((alumni, index) => (
            <li key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-800">{alumni.name}</h2>
              <p className="text-gray-700">Batch: {alumni.batch}</p>
              <p className="text-gray-700">Department: {alumni.department}</p>
              <p className="text-gray-700">Location: {alumni.location}</p>
              <p className="text-gray-700">Occupation: {alumni.occupation}</p>

              {/* Connect with Alumni Section */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Connect with Alumni:</h3>
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaPhone className="text-blue-500" /> <span>{alumni.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaEnvelope className="text-red-500" /> <span>{alumni.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaLinkedin className="text-blue-700" />
                  <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {alumni.linkedin}
                  </a>
                </div>
              </div>

              {/* Edit and Delete Buttons */}
              <div className="mt-4 flex space-x-4">
                <button onClick={() => handleEditAlumni(index)} className="text-blue-600 hover:underline flex items-center">
                  <FaEdit className="mr-1" /> Edit
                </button>
                <button onClick={() => handleDeleteAlumni(index)} className="text-red-600 hover:underline flex items-center">
                  <FaTrash className="mr-1" /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Modal for Adding or Editing Alumni */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-xl transform scale-95">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900">
                {isEditMode ? 'Edit Alumni' : 'Add New Alumni'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {['name', 'batch', 'department', 'location', 'occupation', 'phone', 'email', 'linkedin'].map((field, idx) => (
                  <input
                    key={idx}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                ))}
                <div className="flex justify-between items-center mt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-md shadow-md hover:from-blue-700 hover:to-green-600 transition duration-300"
                  >
                    {isEditMode ? 'Save Changes' : 'Register'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniNetwork;
