











// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Button } from './ui/button';
// import Modal from './ui/modal';
// import { FaArrowRight, FaFileUpload, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
// import Navbar from './shared/Navbar';


// const JobDetails = () => {
//     const { id } = useParams();
    
//     const jobDetailsData = {
//         id: "1",
//         title: "Software Engineer",
//         company: "Tech Solutions",
//         statusUpdates: [
//             "Application received",
//             "Interview scheduled on October 30",
//             "Waiting for final decision",
//         ],
//         needsDocument: true,
//         educationalRemarks: "Latest educational certificate is required for this position.",
//     };

//     const [additionalDocument, setAdditionalDocument] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [query, setQuery] = useState("");
//     const [queryModal, setQueryModal] = useState(false);

//     const handleFileChange = (e) => {
//         setAdditionalDocument(e.target.files[0]);
//     };

//     const handleUploadDocument = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//         setQueryModal(false);
//     };

//     const handleQuerySubmit = () => {
//         // Add query submission logic here if needed
//         setQueryModal(true);
//     };

//     return (
//         <div className="p-8 bg-gradient-to-r from-green-200 via-white to-blue-200 rounded-lg shadow-lg max-w-3xl mx-auto text-gray-800">
//             <h2 className="text-3xl font-bold mb-4">Job Application Status</h2>
//             <p className="mb-2"><strong>Job Title:</strong> {jobDetailsData.title}</p>
//             <p className="mb-6"><strong>Company:</strong> {jobDetailsData.company}</p>

//             <div className="my-4 bg-white rounded-lg p-4 shadow-md" style={{ height: '200px', overflow: 'hidden' }}>
//                 <h3 className="font-semibold text-lg mb-2">Application Progress</h3>
//                 <ul className="list-none pl-0">
//                     {jobDetailsData.statusUpdates.map((update, index) => (
//                         <li key={index} className="flex items-center my-2 text-gray-700">
//                             <FaArrowRight className="text-blue-600 mr-2" />
//                             <span>{update}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                 <h3 className="font-semibold text-lg mb-2">Remarks</h3>
//                 <p className="text-gray-700">{jobDetailsData.educationalRemarks}</p>
//             </div>

//             {jobDetailsData.needsDocument && (
//                 <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                     <h3 className="font-semibold text-lg mb-2">Additional Document Upload</h3>
//                     <p className="text-gray-600 mb-2">
//                         <FaFileUpload className="inline mr-1"/> Please upload the required document.
//                     </p>
//                     <input 
//                         type="file" 
//                         onChange={handleFileChange} 
//                         className="mt-2 border rounded p-2 bg-white text-gray-800" 
//                     />
//                     <Button onClick={handleUploadDocument} className="mt-2">Upload Document</Button>
//                 </div>
//             )}

//             <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                 <h3 className="font-semibold text-lg mb-2">Have a Query?</h3>
//                 <p className="text-gray-600 mb-2">
//                     <FaEnvelope className="inline mr-1"/> Feel free to ask any questions regarding the application process.
//                 </p>
//                 <textarea 
//                     value={query} 
//                     onChange={(e) => setQuery(e.target.value)} 
//                     className="w-full p-2 border rounded text-gray-800" 
//                     placeholder="Type your query here..."
//                 />
//                 <Button onClick={handleQuerySubmit} className="mt-2">Submit Query</Button>
//             </div>

//             <Modal isOpen={showModal} onClose={closeModal}>
//                 <div className="p-4 bg-white rounded-lg shadow-md text-center">
//                     <h2 className="text-lg font-semibold">
//                         <FaCheckCircle className="inline mr-2 text-green-600"/> Success
//                     </h2>
//                     <p>Your document has been submitted successfully!</p>
//                     <Button onClick={closeModal} className="mt-4">Close</Button>
//                 </div>
//             </Modal>

//             <Modal isOpen={queryModal} onClose={closeModal}>
//                 <div className="p-4 bg-white rounded-lg shadow-md text-center">
//                     <h2 className="text-lg font-semibold">
//                         <FaCheckCircle className="inline mr-2 text-blue-600"/> Query Submitted
//                     </h2>
//                     <p>Thank you for your query. We will get back to you shortly.</p>
//                     <Button onClick={closeModal} className="mt-4">Close</Button>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default JobDetails;



// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Button } from './ui/button';
// import Modal from './ui/modal';
// import { FaArrowRight, FaFileUpload, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
// import Navbar from './shared/Navbar';

// const JobDetails = () => {
//     const { id } = useParams();
    
//     const jobDetailsData = {
//         id: "1",
//         title: "Software Engineer",
//         company: "Tech Solutions",
//         statusUpdates: [
//             "Application received",
//             "Interview scheduled on October 30",
//             "Waiting for final decision",
//         ],
//         needsDocument: true,
//         educationalRemarks: "Latest educational certificate is required for this position.",
//     };

//     const [additionalDocument, setAdditionalDocument] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [query, setQuery] = useState("");
//     const [queryModal, setQueryModal] = useState(false);

//     const handleFileChange = (e) => {
//         setAdditionalDocument(e.target.files[0]);
//     };

//     const handleUploadDocument = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//         setQueryModal(false);
//     };

//     const handleQuerySubmit = () => {
//         // Add query submission logic here if needed
//         setQueryModal(true);
//     };

//     return (
//         <div className="p-8 bg-gradient-to-r from-green-200 via-white to-blue-200 rounded-lg shadow-lg max-w-3xl mx-auto text-gray-800">
//             <Navbar />
//             <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-900">{jobDetailsData.title}</h2>
//             <p className="text-xl mb-6 text-center text-gray-700"><strong>Company:</strong> {jobDetailsData.company}</p>

//             <div className="my-4 bg-white rounded-lg p-4 shadow-md" style={{ maxHeight: '250px', overflowY: 'auto' }}>
//                 <h3 className="font-semibold text-lg mb-2">Application Progress</h3>
//                 <ul className="list-none pl-0">
//                     {jobDetailsData.statusUpdates.map((update, index) => (
//                         <li key={index} className="flex items-center my-2 text-gray-700">
//                             <FaArrowRight className="text-blue-600 mr-2" />
//                             <span>{update}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                 <h3 className="font-semibold text-lg mb-2">Remarks</h3>
//                 <p className="text-gray-700">{jobDetailsData.educationalRemarks}</p>
//             </div>

//             {jobDetailsData.needsDocument && (
//                 <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                     <h3 className="font-semibold text-lg mb-2">Additional Document Upload</h3>
//                     <p className="text-gray-600 mb-2">
//                         <FaFileUpload className="inline mr-1"/> Please upload the required document.
//                     </p>
//                     <input 
//                         type="file" 
//                         onChange={handleFileChange} 
//                         className="mt-2 border border-gray-300 rounded p-2 bg-white text-gray-800" 
//                     />
//                     <Button onClick={handleUploadDocument} className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">Upload Document</Button>
//                 </div>
//             )}

//             <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                 <h3 className="font-semibold text-lg mb-2">Have a Query?</h3>
//                 <p className="text-gray-600 mb-2">
//                     <FaEnvelope className="inline mr-1"/> Feel free to ask any questions regarding the application process.
//                 </p>
//                 <textarea 
//                     value={query} 
//                     onChange={(e) => setQuery(e.target.value)} 
//                     className="w-full p-2 border border-gray-300 rounded text-gray-800" 
//                     placeholder="Type your query here..."
//                     rows="3"
//                 />
//                 <Button onClick={handleQuerySubmit} className="mt-4 bg-green-600 text-white hover:bg-green-700 transition duration-200">Submit Query</Button>
//             </div>

//             <Modal isOpen={showModal} onClose={closeModal}>
//                 <div className="p-4 bg-white rounded-lg shadow-md text-center">
//                     <h2 className="text-lg font-semibold">
//                         <FaCheckCircle className="inline mr-2 text-green-600"/> Success
//                     </h2>
//                     <p>Your document has been submitted successfully!</p>
//                     <Button onClick={closeModal} className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">Close</Button>
//                 </div>
//             </Modal>

//             <Modal isOpen={queryModal} onClose={closeModal}>
//                 <div className="p-4 bg-white rounded-lg shadow-md text-center">
//                     <h2 className="text-lg font-semibold">
//                         <FaCheckCircle className="inline mr-2 text-blue-600"/> Query Submitted
//                     </h2>
//                     <p>Thank you for your query. We will get back to you shortly.</p>
//                     <Button onClick={closeModal} className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">Close</Button>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default JobDetails;








// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Button } from './ui/button';
// import Modal from './ui/modal';
// import { FaArrowRight, FaFileUpload, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
// import Navbar from './shared/Navbar';

// const JobDetails = () => {
//     const { id } = useParams();
    
//     const jobDetailsData = {
//         id: "1",
//         title: "Software Engineer",
//         company: "Tech Solutions",
//         statusUpdates: [
//             "Application received",
//             "Interview scheduled on October 30",
//             "Waiting for final decision",
//         ],
//         needsDocument: true,
//         educationalRemarks: "Latest educational certificate is required for this position.",
//     };

//     const [additionalDocument, setAdditionalDocument] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [query, setQuery] = useState("");
//     const [queryModal, setQueryModal] = useState(false);

//     const handleFileChange = (e) => {
//         setAdditionalDocument(e.target.files[0]);
//     };

//     const handleUploadDocument = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//         setQueryModal(false);
//     };

//     const handleQuerySubmit = () => {
//         // Add query submission logic here if needed
//         setQueryModal(true);
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="p-8 bg-gradient-to-r from-green-200 via-white to-blue-200 rounded-lg shadow-lg max-w-3xl mx-auto text-gray-800">
//                 <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-900">{jobDetailsData.title}</h2>
//                 <p className="text-xl mb-6 text-center text-gray-700"><strong>Company:</strong> {jobDetailsData.company}</p>

//                 <div className="my-4 bg-white rounded-lg p-4 shadow-md" style={{ maxHeight: '250px', overflowY: 'auto' }}>
//                     <h3 className="font-semibold text-lg mb-2">Application Progress</h3>
//                     <ul className="list-none pl-0">
//                         {jobDetailsData.statusUpdates.map((update, index) => (
//                             <li key={index} className="flex items-center my-2 text-gray-700">
//                                 <FaArrowRight className="text-blue-600 mr-2" />
//                                 <span>{update}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                     <h3 className="font-semibold text-lg mb-2">Remarks</h3>
//                     <p className="text-gray-700">{jobDetailsData.educationalRemarks}</p>
//                 </div>

//                 {jobDetailsData.needsDocument && (
//                     <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                         <h3 className="font-semibold text-lg mb-2">Additional Document Upload</h3>
//                         <p className="text-gray-600 mb-2">
//                             <FaFileUpload className="inline mr-1"/> Please upload the required document.
//                         </p>
//                         <input 
//                             type="file" 
//                             onChange={handleFileChange} 
//                             className="mt-2 border border-gray-300 rounded p-2 bg-white text-gray-800" 
//                         />
//                         <Button onClick={handleUploadDocument} className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">Upload Document</Button>
//                     </div>
//                 )}

//                 <div className="my-4 bg-white rounded-lg p-4 shadow-md">
//                     <h3 className="font-semibold text-lg mb-2">Have a Query?</h3>
//                     <p className="text-gray-600 mb-2">
//                         <FaEnvelope className="inline mr-1"/> Feel free to ask any questions regarding the application process.
//                     </p>
//                     <textarea 
//                         value={query} 
//                         onChange={(e) => setQuery(e.target.value)} 
//                         className="w-full p-2 border border-gray-300 rounded text-gray-800" 
//                         placeholder="Type your query here..."
//                         rows="3"
//                     />
//                     <Button onClick={handleQuerySubmit} className="mt-4 bg-green-600 text-white hover:bg-green-700 transition duration-200">Submit Query</Button>
//                 </div>

//                 <Modal isOpen={showModal} onClose={closeModal}>
//                     <div className="p-4 bg-white rounded-lg shadow-md text-center">
//                         <h2 className="text-lg font-semibold">
//                             <FaCheckCircle className="inline mr-2 text-green-600"/> Success
//                         </h2>
//                         <p>Your document has been submitted successfully!</p>
//                         <Button onClick={closeModal} className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">Close</Button>
//                     </div>
//                 </Modal>

//                 <Modal isOpen={queryModal} onClose={closeModal}>
//                     <div className="p-4 bg-white rounded-lg shadow-md text-center">
//                         <h2 className="text-lg font-semibold">
//                             <FaCheckCircle className="inline mr-2 text-blue-600"/> Query Submitted
//                         </h2>
//                         <p>Thank you for your query. We will get back to you shortly.</p>
//                         <Button onClick={closeModal} className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">Close</Button>
//                     </div>
//                 </Modal>
//             </div>
//         </>
//     );
// };

// export default JobDetails;






import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import Modal from './ui/modal';
import { FaArrowRight, FaFileUpload, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import Navbar from './shared/Navbar';

const JobDetails = () => {
    const { id } = useParams();
    
    const jobDetailsData = {
        id: "1",
        title: "Software Engineer",
        company: "Tech Solutions",
        statusUpdates: [
            "Application received",
            "Interview scheduled on October 30",
            "Waiting for final decision",
        ],
        needsDocument: true,
        educationalRemarks: "Latest educational certificate is required for this position.",
    };

    const [additionalDocument, setAdditionalDocument] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState("");
    const [queryModal, setQueryModal] = useState(false);

    const handleFileChange = (e) => {
        setAdditionalDocument(e.target.files[0]);
    };

    const handleUploadDocument = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setQueryModal(false);
    };

    const handleQuerySubmit = () => {
        // Add query submission logic here if needed
        setQueryModal(true);
    };

    return (
        <>
            <Navbar />
            <div className="p-8 bg-gradient-to-r from-green-200 via-white to-blue-200 rounded-lg shadow-lg max-w-3xl mx-auto text-gray-800">
                <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-900">{jobDetailsData.title}</h2>
                <p className="text-xl mb-6 text-center text-gray-700"><strong>Company:</strong> {jobDetailsData.company}</p>

                <div className="my-4 bg-white rounded-lg p-4 shadow-md" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    <h3 className="font-semibold text-lg mb-2">Application Progress</h3>
                    <ul className="list-none pl-0">
                        {jobDetailsData.statusUpdates.map((update, index) => (
                            <li key={index} className="flex items-center my-2 text-gray-700">
                                <FaArrowRight className="text-blue-600 mr-2" />
                                <span>{update}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="my-4 bg-white rounded-lg p-4 shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Remarks</h3>
                    <p className="text-gray-700">{jobDetailsData.educationalRemarks}</p>
                </div>

                {jobDetailsData.needsDocument && (
                    <div className="my-4 bg-white rounded-lg p-4 shadow-md">
                        <h3 className="font-semibold text-lg mb-2">Additional Document Upload</h3>
                        <p className="text-gray-600 mb-2">
                            <FaFileUpload className="inline mr-1"/> Please upload the required document.
                        </p>
                        <input 
                            type="file" 
                            onChange={handleFileChange} 
                            className="mt-2 border border-gray-300 rounded p-2 bg-white text-gray-800" 
                        />
                        <Button 
                            onClick={handleUploadDocument} 
                            className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition duration-200"
                        >
                            Upload Document
                        </Button>
                    </div>
                )}

                <div className="my-4 bg-white rounded-lg p-4 shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Have a Query?</h3>
                    <p className="text-gray-600 mb-2">
                        <FaEnvelope className="inline mr-1"/> Feel free to ask any questions regarding the application process.
                    </p>
                    <textarea 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded text-gray-800" 
                        placeholder="Type your query here..."
                        rows="3"
                    />
                    <Button 
                        onClick={handleQuerySubmit} 
                        className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition duration-200"
                    >
                        Submit Query
                    </Button>
                </div>

                <Modal isOpen={showModal} onClose={closeModal}>
                    <div className="p-4 bg-white rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold">
                            <FaCheckCircle className="inline mr-2 text-green-600"/> Success
                        </h2>
                        <p>Your document has been submitted successfully!</p>
                        <Button 
                            onClick={closeModal} 
                            className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition duration-200"
                        >
                            Close
                        </Button>
                    </div>
                </Modal>

                <Modal isOpen={queryModal} onClose={closeModal}>
                    <div className="p-4 bg-white rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold">
                            <FaCheckCircle className="inline mr-2 text-blue-600"/> Query Submitted
                        </h2>
                        <p>Thank you for your query. We will get back to you shortly.</p>
                        <Button 
                            onClick={closeModal} 
                            className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition duration-200"
                        >
                            Close
                        </Button>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default JobDetails;











