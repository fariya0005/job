





import React, { useState } from 'react';

const ResumeFeedback = () => {
  const [resume, setResume] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedbackHistory, setFeedbackHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrorMessage('Invalid file type. Please upload a PDF or Word document.');
        setResume(null);
        return;
      }
      setResume(file);
      setFeedback([]); // Clear feedback on new upload
      setErrorMessage(''); // Clear error message on valid file upload
    }
  };

  const getRandomFeedback = () => {
    const hardcodedFeedbacks = [
      { text: 'Consider adding more keywords related to your target job.', sentiment: 'positive' },
      { text: 'Try to highlight your achievements more effectively.', sentiment: 'neutral' },
      { text: 'Make sure your contact information is up to date.', sentiment: 'neutral' },
      { text: 'Consider using a more professional email address.', sentiment: 'neutral' },
      { text: 'Your layout is clear, but you might want to use more bullet points for readability.', sentiment: 'neutral' },
      { text: 'Tailor your resume for each application by emphasizing relevant experiences.', sentiment: 'positive' },
      { text: 'Consider using a summary statement to quickly convey your qualifications.', sentiment: 'neutral' },
      { text: 'Remove outdated skills or experiences to keep your resume concise.', sentiment: 'negative' },
    ];
    
    const feedbackCount = 3; // Number of feedback items to return
    const randomFeedbacks = [];
    
    // Generate random feedback items
    while (randomFeedbacks.length < feedbackCount) {
      const randomFeedback = hardcodedFeedbacks[Math.floor(Math.random() * hardcodedFeedbacks.length)];
      if (!randomFeedbacks.includes(randomFeedback.text)) { // Avoid duplicates
        randomFeedbacks.push(randomFeedback.text);
      }
    }

    return randomFeedbacks;
  };

  const handleFeedbackRequest = () => {
    if (resume) {
      setLoading(true);
      setTimeout(() => {
        const feedbackList = getRandomFeedback(); // Get multiple feedbacks
        setFeedback(feedbackList); // Set feedback
        setFeedbackHistory((prevHistory) => [...prevHistory, ...feedbackList]); // Add feedback to history
        setLoading(false);
      }, 1000); // Simulate a delay for feedback generation
    } else {
      setFeedback(['Please upload your resume first.']);
    }
  };

  const handleCopyFeedback = () => {
    if (feedback.length > 0) {
      navigator.clipboard.writeText(feedback.join('\n'));
      alert('Feedback copied to clipboard!');
    }
  };

  const handleDeleteResume = () => {
    setResume(null);
    setFeedback([]);
    setFeedbackHistory([]);
  };

  const handleDeleteFeedback = () => {
    setFeedback([]);
  };

  const handleOpenResume = () => {
    if (resume) {
      const url = URL.createObjectURL(resume);
      window.open(url, '_blank');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4">Resume Feedback</h2>

      {/* Upload Resume Section */}
      <input
        type="file"
        onChange={handleResumeUpload}
        accept=".pdf,.doc,.docx"
        className="mb-4 border border-gray-300 rounded-lg p-2 w-full"
      />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {!resume && !errorMessage && (
        <p className="text-gray-500">Please upload your resume</p>
      )}
      {resume && (
        <div className="mb-4">
          <p className="text-green-600">Uploaded: {resume.name}</p>
          <button
            onClick={handleOpenResume}
            className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Open Resume
          </button>
          <button
            onClick={handleDeleteResume}
            className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Delete Resume
          </button>
        </div>
      )}

      {/* Get Feedback Button */}
      <button
        onClick={handleFeedbackRequest}
        className={`mt-4 w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Generating Feedback...' : 'Get Feedback'}
      </button>

      {/* Copy Feedback Button */}
      {feedback.length > 0 && (
        <button
          onClick={handleCopyFeedback}
          className="mt-2 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Copy Feedback
        </button>
      )}

      {/* Delete Feedback Button */}
      {feedback.length > 0 && (
        <button
          onClick={handleDeleteFeedback}
          className="mt-2 w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
        >
          Delete Feedback
        </button>
      )}

      {/* Feedback Display */}
      {feedback.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Feedback:</h3>
          {feedback.map((item, index) => (
            <p key={index} className="text-gray-700">{item}</p>
          ))}
        </div>
      )}

      {/* Feedback History */}
      {feedbackHistory.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Feedback History:</h3>
          <ul className="list-disc list-inside mt-2">
            {feedbackHistory.map((item, index) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeFeedback;



