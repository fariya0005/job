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
      <li onClick={() => navigate('/alumni-network')} className="hover:text-green-600 cursor-pointer transition duration-300">Alumni Network</li>
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















