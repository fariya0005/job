import React, { useState } from 'react';
import { format, isAfter, isBefore } from 'date-fns';
import { FaBuilding, FaUserFriends, FaFileAlt, FaClipboardList, FaCalendarAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const events = [
  
  {
    id: 1,
    title: 'Tech Career Fair',
    date: new Date(2024, 10, 1), // November 1, 2024
    location: 'KIIT Campus 6 Convention Hall',
    description: 'Join us for a day of networking with top tech companies.',
    icon: <FaBuilding />,
  },
  {
    id: 2,
    title: 'Networking Workshop',
    date: new Date(2024, 10, 10), // November 10, 2024
    location: 'Campus-17',
    description: 'Learn effective networking strategies to boost your career.',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    title: 'Resume Building Session',
    date: new Date(2024, 10, 15), // November 15, 2024
    location: 'KIIT Central Library',
    description: 'Get expert tips on creating an effective resume.',
    icon: <FaFileAlt />,
  },
  {
    id: 4,
    title: 'Interview Preparation',
    date: new Date(2024, 10, 16), // November 16, 2024
    location: 'KIIT Career Center',
    description: 'Prepare for your upcoming job interviews with expert advice.',
    icon: <FaClipboardList />,
  },
  {
    id: 5,
    title: 'Career Development Seminar',
    date: new Date(2024, 10, 22), // November 22, 2024
    location: 'Online',
    description: 'Participate in a seminar on career growth strategies.',
    icon: <FaCalendarAlt />,
  },
  {
    id: 6,
    title: 'Job Fair',
    date: new Date(2024, 10, 25), // November 25, 2024
    location: 'KIIT Campus 6 Convention Hall',
    description: 'Meet with employers looking for new talent.',
    icon: <FaBuilding />,
  },
  {
    id: 7,
    title: 'Resume Review',
    date: new Date(2024, 11, 1), // December 1, 2024
    location: 'Campus 15 Block A Room no 102',
    description: 'Get feedback on your resume from professionals.',
    icon: <FaFileAlt />,
  },
];

const CareerEventsCalendar = () => {
  const currentDate = new Date();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState(Array(events.length).fill(false));
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (startDate === '' || isAfter(event.date, new Date(startDate) - 1)) &&
    (endDate === '' || isBefore(event.date, new Date(endDate) + 1))
  );

  const handleRegisterClick = (index) => {
    setSelectedEventIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedEventIndex(null);
  };

  const handleConfirmRegistration = () => {
    setRegistrationStatus(prev => {
      const newStatus = [...prev];
      newStatus[selectedEventIndex] = true;
      return newStatus;
    });
  };

  const currentEvent = selectedEventIndex !== null ? filteredEvents[selectedEventIndex] : null;

  const handlePreviousEvent = () => {
    if (selectedEventIndex > 0) {
      setSelectedEventIndex(selectedEventIndex - 1);
    }
  };

  const handleNextEvent = () => {
    if (selectedEventIndex < filteredEvents.length - 1) {
      setSelectedEventIndex(selectedEventIndex + 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Upcoming Career Events</h1>

      <div className="mb-8 flex flex-col md:flex-row md:justify-between md:space-x-4">
        <input
          type="text"
          placeholder="Search events..."
          className="border border-gray-300 rounded-md p-3 w-full md:w-1/2 mb-4 md:mb-0"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="flex space-x-4">
          <input
            type="date"
            className="border border-gray-300 rounded-md p-3"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="border border-gray-300 rounded-md p-3"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <ul className="space-y-6">
        {filteredEvents
          .filter(event => isAfter(event.date, currentDate))
          .sort((a, b) => a.date - b.date)
          .map((event, index) => (
            <li key={event.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white mr-6">
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>
                  <span className="text-sm text-gray-500">{format(event.date, 'MMMM d, yyyy')}</span>
                </div>
              </div>
              <p className="text-gray-700 font-medium">{event.location}</p>
              <p className="text-gray-800 mt-2">{event.description}</p>
              <button
                onClick={() => handleRegisterClick(index)}
                className={`rounded-md px-5 py-3 mt-4 transition-colors duration-300 font-medium ${
                  registrationStatus[index] ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
                }`}
                disabled={registrationStatus[index]}
              >
                {registrationStatus[index] ? 'Registered' : 'Register Now'}
              </button>
            </li>
          ))}

        {filteredEvents.every(event => isAfter(currentDate, event.date)) && (
          <p className="text-gray-500 text-center mt-4">No upcoming events.</p>
        )}
      </ul>

      {currentEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Register for {currentEvent.title}</h2>
            <p className="text-gray-700 mb-4">
              <strong>Location:</strong> {currentEvent.location}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Date:</strong> {format(currentEvent.date, 'MMMM d, yyyy')}
            </p>
            <p className="text-gray-700 mb-4">{currentEvent.description}</p>

            {!registrationStatus[selectedEventIndex] && (
              <button
                onClick={handleConfirmRegistration}
                className="w-full bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700"
              >
                Confirm Registration
              </button>
            )}

            {registrationStatus[selectedEventIndex] && (
              <p className="text-center text-green-600 font-bold">You are registered for this event.</p>
            )}

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePreviousEvent}
                disabled={selectedEventIndex === 0}
                className="flex items-center bg-gray-300 text-gray-600 rounded-md px-4 py-2 disabled:opacity-50"
              >
                <FaArrowLeft className="mr-2" /> Previous
              </button>
              <button
                onClick={handleNextEvent}
                disabled={selectedEventIndex === filteredEvents.length - 1}
                className="flex items-center bg-gray-300 text-gray-600 rounded-md px-4 py-2 disabled:opacity-50"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            </div>

            <button
              onClick={handleCloseModal}
              className="mt-6 w-full bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerEventsCalendar;










