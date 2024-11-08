import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApplicantsTable from './ApplicantsTable';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { setAllApplicants } from '@/redux/applicationSlice';

const Applicants = () => {
    const { id: jobId } = useParams();
    const dispatch = useDispatch();
    const applicants = useSelector((state) => state.application.applicants.applications);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                setLoading(true);
                const APPLICATION_API_END_POINT = `http://localhost:8000/api/v1/application/${jobId}/applicants`;
                const res = await axios.get(APPLICATION_API_END_POINT, { withCredentials: true });
                console.log('API Response:', res.data);
                dispatch(setAllApplicants(res.data.applicants || []));
                setError(null);
            } catch (error) {
                console.error('Error fetching applicants:', error);
                setError('Failed to load applicants. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchAllApplicants();
    }, [dispatch, jobId]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Applicants List</h2>

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <svg className="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    </svg>
                    <span className="ml-4 text-lg text-blue-600">Loading applicants...</span>
                </div>
            ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            ) : applicants && applicants.length > 0 ? (
                <ApplicantsTable applicants={applicants} />
            ) : (
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative text-center" role="alert">
                    <span>No applicants found.</span>
                </div>
            )}
        </div>
    );
};

export default Applicants;
