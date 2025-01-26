import React, { useState } from 'react';
import { FaCheckCircle, FaDollarSign, FaBriefcase, FaBookmark, FaSearch, FaMoon, FaSun, FaInfoCircle } from 'react-icons/fa';

const Recommendation = () => {
    const [recommendations] = useState([
        { _id: "1", title: "Software Engineer", company: { name: "TechCorp" }, salary: "$80,000 - $120,000", experience: "2+ years" },
        { _id: "2", title: "Data Scientist", company: { name: "DataPro" }, salary: "$90,000 - $130,000", experience: "3+ years" },
        { _id: "3", title: "Product Manager", company: { name: "ProductX" }, salary: "$100,000 - $150,000", experience: "5+ years" },
        { _id: "4", title: "UX/UI Designer", company: { name: "DesignCo" }, salary: "$70,000 - $100,000", experience: "3+ years" },
        { _id: "5", title: "Marketing Manager", company: { name: "MarketX" }, salary: "$85,000 - $120,000", experience: "4+ years" },
        { _id: "6", title: "Machine Learning Engineer", company: { name: "AI Innovations" }, salary: "$110,000 - $160,000", experience: "2+ years" }
    ]);

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSavedJobs, setShowSavedJobs] = useState(false);  // State to toggle between all jobs and saved jobs
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleApply = (id) => {
        setAppliedJobs((prev) => [...prev, id]);
    };

    const handleBookmark = (id) => {
        if (bookmarkedJobs.includes(id)) {
            setBookmarkedJobs(bookmarkedJobs.filter(job => job !== id));
        } else {
            setBookmarkedJobs((prev) => [...prev, id]);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    const filteredRecommendations = recommendations.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const jobsToDisplay = showSavedJobs ? recommendations.filter(job => bookmarkedJobs.includes(job._id)) : filteredRecommendations;

    return (
        <div className={darkMode ? 'bg-gray-900 text-white transition-all' : 'bg-white text-gray-800 transition-all'}>
            {/* Dark Mode Toggle */}
            <div className="absolute top-4 right-4">
                <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all ease-in-out duration-300">
                    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
            </div>

            <div className="max-w-7xl mx-auto p-8">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Job Recommendations</h2>

                {/* Search Bar */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-2/3 md:w-1/2 lg:w-1/3">
                        <input
                            type="text"
                            placeholder="Search for jobs..."
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch className="absolute right-4 top-3 text-green-600" />
                    </div>
                </div>

                {/* Job View Toggle Buttons */}
                <div className="flex justify-center mb-8 space-x-4">
                    <button 
                        onClick={() => setShowSavedJobs(false)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${!showSavedJobs ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        All Jobs
                    </button>
                    <button 
                        onClick={() => setShowSavedJobs(true)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${showSavedJobs ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Saved Jobs
                    </button>
                </div>

                {/* Job List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobsToDisplay.map((job) => (
                        <div key={job._id} className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-300 transform transition-all hover:scale-105 hover:shadow-2xl text-gray-800">
                            <div className="relative mb-4">
                                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                                <p>{job.company.name}</p>
                            </div>

                            <p className="mb-2">
                                <FaDollarSign className="inline mr-2 text-green-600" />
                                {job.salary}
                            </p>
                            <p className="mb-4">
                                <FaBriefcase className="inline mr-2 text-green-600" />
                                {job.experience}
                            </p>

                            <div className="flex justify-between mt-4">
                                <button onClick={() => handleApply(job._id)} className={`w-28 py-2 rounded-lg font-semibold text-white transition-all ${appliedJobs.includes(job._id) ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} hover:scale-105`} disabled={appliedJobs.includes(job._id)}>
                                    {appliedJobs.includes(job._id) ? 'Applied' : 'Apply Now'}
                                </button>

                                <button onClick={() => handleBookmark(job._id)} className="p-2 text-gray-800 hover:bg-green-200 hover:text-green-600 rounded-full transition-all transform hover:scale-110">
                                    {bookmarkedJobs.includes(job._id) ? <FaCheckCircle size={20} /> : <FaBookmark size={20} />}
                                </button>

                                {/* View Details Button */}
                                <button onClick={() => openModal(job)} className="p-2 text-gray-800 hover:bg-green-200 hover:text-green-600 rounded-full transition-all transform hover:scale-110">
                                    <FaInfoCircle size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Job Detail Modal */}
            {isModalOpen && selectedJob && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl max-w-lg w-full">
                        <h3 className="text-2xl font-semibold">{selectedJob.title}</h3>
                        <p className="mb-4">{selectedJob.company.name}</p>
                        <p className="mb-2">{selectedJob.salary}</p>
                        <p className="mb-2">{selectedJob.experience}</p>

                        <button onClick={closeModal} className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recommendation;







