// import React, { useEffect } from 'react';
// import Navbar from '../shared/Navbar';
// import ApplicantsTable from './ApplicantsTable';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAllApplicants } from '@/redux/applicationSlice';

// const Applicants = () => {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const { applicants } = useSelector(store => store.application);

//     useEffect(() => {
//         const fetchAllApplicants = async () => {
//             try {
//                 const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
//                 dispatch(setAllApplicants(res.data.job)); // Ensure that `res.data.job` contains the expected structure
//             } catch (error) {
//                 console.error("Error fetching applicants:", error.response?.data?.message || error.message);
//                 // You can also handle showing a toast message here if needed
//             }
//         };

//         fetchAllApplicants();
//     }, [params.id, dispatch]); // Add `params.id` and `dispatch` to the dependency array

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto'>
//                 <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length || 0}</h1>
//                 <ApplicantsTable applicants={applicants?.applications || []} /> {/* Pass applicants to ApplicantsTable */}
//             </div>
//         </div>
//     );
// };

// export default Applicants;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApplicantsTable from './ApplicantsTable'; // Adjust the path as necessary
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to get URL parameters
import { setAllApplicants } from '@/redux/applicationSlice';

const Applicants = () => {
    const { id: jobId } = useParams(); // Get the job ID from the URL parameters
    const dispatch = useDispatch();
    const applicants = useSelector((state) => state.application.applicants.applications); // Accessing the applications array from Redux

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const APPLICATION_API_END_POINT = `http://localhost:8000/api/v1/application/${jobId}/applicants`; // Use the dynamic job ID
                const res = await axios.get(APPLICATION_API_END_POINT, { withCredentials: true });
                console.log('API Response:', res.data); // Log the API response
                dispatch(setAllApplicants(res.data.applicants || [])); // Ensure this correctly matches the API response structure
            } catch (error) {
                console.error('Error fetching applicants:', error); // Log any errors
            }
        };

        fetchAllApplicants();
    }, [dispatch, jobId]); // Add jobId to the dependency array

    return (
        <div>
            <h1>Applicants List</h1>
            {applicants && applicants.length > 0 ? (
                <ApplicantsTable applicants={applicants} />
            ) : (
                <div>No applicants found.</div> // Fallback message
            )}
        </div>
    );
};

export default Applicants;











