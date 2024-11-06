










import React from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Jobs from './components/Jobs';
import CareerTools from './components/CareerTools'; // Keep the import for CareerTools
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';
import Chatbot from './components/Chatbot'; // Import the Chatbot component
import SalaryEstimator from './components/SalaryEstimator'; // Import the SalaryEstimator component
import JobStressRatings from './components/JobStressRatings'; // Import the JobStressRatings component
import CareerEventsCalendar from './components/CareerEventsCalendar'; // Import the CareerEventsCalendar component
import JobDetails from './components/JobDetails'; // Import the JobDetails component
import Notes from './components/Notes'; // Import the Notes component
import InterviewResources from './components/InterviewResources'; // Import InterviewResources component
import MockInterview from './components/MockInterview'; // Import MockInterview component
import ResumeFeedback from './components/ResumeFeedback'; 
import PlacementRecords from './components/PlacementRecords';

// Define your app routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // This route will display the Home component without Navbar
  },
  {
    path: '/login',
    element: <Login />, // This route will display the Login component without Navbar
  },
  {
    path: '/signup',
    element: <Signup />, // This route will display the Signup component without Navbar
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/career-tools", // Ensure this is still the same route
    element: <CareerTools /> // Use the renamed component here
  },
  {
    path: "/job-stress-ratings", // New route for Job Stress Ratings
    element: <JobStressRatings />
  },
  {
    path: "/career-events", // New route for Career Events Calendar
    element: <CareerEventsCalendar /> // Add the Career Events Calendar here
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/admin/companies",
    element: <Companies />
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />
  },
  {
    path: "/admin/jobs",
    element: <AdminJobs />
  },
  {
    path: "/admin/jobs/create",
    element: <PostJob />
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Applicants />
  },
  {
    path: "/salary-estimator", // New route for Salary Estimator
    element: <SalaryEstimator />
  },
  {
    path: "/job-details/:id", // New route for Job Details
    element: <JobDetails />
  },
  {
    path: "/notes", // New route for Notes component
    element: <Notes />
  },
  {
    path: "/interview-resources", // New route for Interview Resources
    element: <InterviewResources />
  },
  {
    path: "/mock-interview", // New route for Mock Interview
    element: <MockInterview />
  },
  {
    path: "/resume-feedback", // New route for Resume Feedback
    element: <ResumeFeedback />
  },
  {
    path: '/placement-records', // New route for Placement Records
    element: <PlacementRecords />,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
      <ToastContainer />
      {/* Add the chatbot component here so it's available on all pages */}
      <Chatbot />
    </div>
  );
}

export default App;





















