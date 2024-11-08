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
import CareerTools from './components/CareerTools';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';
import Chatbot from './components/Chatbot';
import SalaryEstimator from './components/SalaryEstimator';
import JobStressRatings from './components/JobStressRatings';
import CareerEventsCalendar from './components/CareerEventsCalendar';
import JobDetails from './components/JobDetails';
import Notes from './components/Notes';
import InterviewResources from './components/InterviewResources';
import MockInterview from './components/MockInterview';
import ResumeFeedback from './components/ResumeFeedback';
import PlacementRecords from './components/PlacementRecords';
import AlumniNetwork from './components/AlumniNetwork'; // Import Alumni Network component

// Define your app routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/career-tools",
    element: <CareerTools />
  },
  {
    path: "/alumni-network", // New route for Alumni Network
    element: <AlumniNetwork /> // Add the Alumni Network route here
  },
  {
    path: "/job-stress-ratings",
    element: <JobStressRatings />
  },
  {
    path: "/career-events",
    element: <CareerEventsCalendar />
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
    path: "/salary-estimator",
    element: <SalaryEstimator />
  },
  {
    path: "/job-details/:id",
    element: <JobDetails />
  },
  {
    path: "/notes",
    element: <Notes />
  },
  {
    path: "/interview-resources",
    element: <InterviewResources />
  },
  {
    path: "/mock-interview",
    element: <MockInterview />
  },
  {
    path: "/resume-feedback",
    element: <ResumeFeedback />
  },
  {
    path: '/placement-records',
    element: <PlacementRecords />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
      <ToastContainer />
      <Chatbot />
    </div>
  );
}

export default App;






















