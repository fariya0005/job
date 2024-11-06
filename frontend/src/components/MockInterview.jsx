











// import React, { useState, useEffect } from 'react';

// const questions = [
//   "Tell me about yourself.",
//   "What are your strengths and weaknesses?",
//   "Why do you want to work here?",
//   "Describe a challenge you faced and how you overcame it.",
//   "Where do you see yourself in five years?",
// ];

// const hints = [
//   "Briefly introduce your background and current status.",
//   "Mention a few strengths relevant to the job and a weakness with a positive angle.",
//   "Research the company’s values, goals, or projects to tailor your answer.",
//   "Describe a specific example, focusing on your problem-solving skills.",
//   "Outline your career aspirations aligned with the role."
// ];

// const MockInterview = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [response, setResponse] = useState('');
//   const [responses, setResponses] = useState(Array(questions.length).fill(''));
//   const [timer, setTimer] = useState(60);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isReviewMode, setIsReviewMode] = useState(false);
//   const [isInterviewComplete, setIsInterviewComplete] = useState(false);
//   const [adjustableTime, setAdjustableTime] = useState(60);
//   const [feedback, setFeedback] = useState(Array(questions.length).fill(''));
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     if (timer > 0 && !isPaused && !isReviewMode) {
//       const interval = setInterval(() => setTimer(timer - 1), 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0 && !isInterviewComplete) {
//       handleNextQuestion();
//     }
//   }, [timer, isPaused, isReviewMode, isInterviewComplete]);

//   const handleResponseChange = (e) => {
//     setResponse(e.target.value);
//   };

//   const handleNextQuestion = () => {
//     const updatedResponses = [...responses];
//     updatedResponses[currentQuestion] = response;
//     setResponses(updatedResponses);
//     setFeedback(generateFeedback(response));
//     setScore((prev) => prev + calculateScore(response));
//     setResponse('');
//     setTimer(adjustableTime);

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setIsInterviewComplete(true);
//       setIsReviewMode(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestion((prev) => (prev - 1 + questions.length) % questions.length);
//     setResponse(responses[currentQuestion - 1] || '');
//     setTimer(adjustableTime);
//   };

//   const handlePauseResume = () => {
//     setIsPaused(!isPaused);
//   };

//   const handleReview = () => {
//     setIsReviewMode(true);
//   };

//   const handleExitReview = () => {
//     setIsReviewMode(false);
//     setIsInterviewComplete(false);
//     setCurrentQuestion(0);
//     setTimer(adjustableTime);
//   };

//   const handleRetryQuestion = (index) => {
//     setIsReviewMode(false);
//     setIsInterviewComplete(false);
//     setCurrentQuestion(index);
//     setResponse(responses[index] || '');
//     setTimer(adjustableTime);
//   };

//   const handleAdjustableTimeChange = (e) => {
//     setAdjustableTime(Number(e.target.value));
//     setTimer(Number(e.target.value));
//   };

//   const generateFeedback = (response) => {
//     const words = response.trim().split(" ").length;
//     if (words < 5) return "Try to add more detail.";
//     if (words < 20) return "Good, but you can expand a bit.";
//     return "Great response!";
//   };

//   const calculateScore = (response) => {
//     const words = response.trim().split(" ").length;
//     if (words < 5) return 1;
//     if (words < 20) return 3;
//     return 5;
//   };

//   return (
//     <div className="container mx-auto p-8 max-w-3xl">
//       <h1 className="text-5xl font-bold text-gray-800 mb-8">Mock Interview</h1>
      
//       {!isReviewMode ? (
//         <>
//           {!isInterviewComplete && (
//             <div className="mb-6">
//               <label className="block text-lg font-medium text-gray-700 mb-2">
//                 Set time per question (in seconds):
//               </label>
//               <input
//                 type="number"
//                 value={adjustableTime}
//                 onChange={handleAdjustableTimeChange}
//                 className="p-2 border rounded-lg shadow-sm w-full max-w-xs"
//                 min={10}
//               />
//             </div>
//           )}

//           <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold text-gray-700">
//                 Question {currentQuestion + 1} of {questions.length}
//               </h2>
//               <span className="text-red-500 text-lg font-semibold">
//                 {`Time: ${timer}s`}
//               </span>
//             </div>
//             <p className="text-lg text-gray-600 mb-2">{questions[currentQuestion]}</p>
//             <p className="text-sm text-gray-500 mb-6">Hint: {hints[currentQuestion]}</p>
            
//             <textarea
//               value={response}
//               onChange={handleResponseChange}
//               placeholder="Type your response here..."
//               className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-lg mb-4"
//               rows={5}
//             />

//             <div className="flex justify-between">
//               <button
//                 onClick={handlePreviousQuestion}
//                 className="py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-200"
//                 disabled={currentQuestion === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={handlePauseResume}
//                 className="py-2 px-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-200"
//               >
//                 {isPaused ? 'Resume' : 'Pause'}
//               </button>
//               <button
//                 onClick={handleNextQuestion}
//                 className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
//               >
//                 {currentQuestion + 1 < questions.length ? 'Next' : 'Finish'}
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-between mb-8">
//             <button
//               onClick={handleReview}
//               className="py-2 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
//             >
//               Review Answers
//             </button>
//             <span className="text-gray-600 text-lg">
//               Progress: {responses.filter((res) => res !== '').length}/{questions.length} answered
//             </span>
//           </div>
//         </>
//       ) : (
//         <div className="bg-gray-100 rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Responses & Score</h2>
//           <ul className="space-y-6">
//             {responses.map((res, index) => (
//               <li key={index} className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="text-lg font-medium text-gray-700">Question {index + 1}:</h3>
//                 <p className="text-gray-600 mt-2">{res || 'No response given.'}</p>
//                 <p className="text-sm text-blue-500 mt-2">Feedback: {generateFeedback(res)}</p>
//                 <button
//                   onClick={() => handleRetryQuestion(index)}
//                   className="mt-2 py-1 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
//                 >
//                   Retry
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <p className="text-xl font-semibold text-gray-700 mt-6">Total Score: {score} / {questions.length * 5}</p>
//           <button
//             onClick={handleExitReview}
//             className="mt-6 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Back to Questions
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MockInterview;











// import React, { useState, useEffect } from 'react';

// const questions = [
//   "Tell me about yourself.",
//   "What are your strengths and weaknesses?",
//   "Why do you want to work here?",
//   "Describe a challenge you faced and how you overcame it.",
//   "Where do you see yourself in five years?",
// ];

// const hints = [
//   "Briefly introduce your background and current status.",
//   "Mention a few strengths relevant to the job and a weakness with a positive angle.",
//   "Research the company’s values, goals, or projects to tailor your answer.",
//   "Describe a specific example, focusing on your problem-solving skills.",
//   "Outline your career aspirations aligned with the role."
// ];

// const MockInterview = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [response, setResponse] = useState('');
//   const [responses, setResponses] = useState(Array(questions.length).fill(''));
//   const [timer, setTimer] = useState(60);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isReviewMode, setIsReviewMode] = useState(false);
//   const [isInterviewComplete, setIsInterviewComplete] = useState(false);
//   const [adjustableTime, setAdjustableTime] = useState(60);
//   const [feedback, setFeedback] = useState(Array(questions.length).fill(''));
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     if (timer > 0 && !isPaused && !isReviewMode) {
//       const interval = setInterval(() => setTimer(timer - 1), 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0 && !isInterviewComplete) {
//       handleNextQuestion();
//     }
//   }, [timer, isPaused, isReviewMode, isInterviewComplete]);

//   const handleResponseChange = (e) => {
//     setResponse(e.target.value);
//   };

//   const handleNextQuestion = () => {
//     const updatedResponses = [...responses];
//     updatedResponses[currentQuestion] = response;
//     setResponses(updatedResponses);
//     setFeedback(generateFeedback(response));
//     setScore((prev) => prev + calculateScore(response));
//     setResponse('');
//     setTimer(adjustableTime);

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setIsInterviewComplete(true);
//       setIsReviewMode(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestion((prev) => (prev - 1 + questions.length) % questions.length);
//     setResponse(responses[currentQuestion - 1] || '');
//     setTimer(adjustableTime);
//   };

//   const handlePauseResume = () => {
//     setIsPaused(!isPaused);
//   };

//   const handleReview = () => {
//     setIsReviewMode(true);
//   };

//   const handleExitReview = () => {
//     setIsReviewMode(false);
//     setIsInterviewComplete(false);
//     setCurrentQuestion(0);
//     setTimer(adjustableTime);
//   };

//   const handleRetryQuestion = (index) => {
//     setIsReviewMode(false);
//     setIsInterviewComplete(false);
//     setCurrentQuestion(index);
//     setResponse(responses[index] || '');
//     setTimer(adjustableTime);
//   };

//   const handleAdjustableTimeChange = (e) => {
//     setAdjustableTime(Number(e.target.value));
//     setTimer(Number(e.target.value));
//   };

//   const generateFeedback = (response) => {
//     const words = response.trim().split(" ").length;
//     if (words < 5) return "Try to add more detail.";
//     if (words < 20) return "Good, but you can expand a bit.";
//     return "Great response!";
//   };

//   const calculateScore = (response) => {
//     const words = response.trim().split(" ").length;
//     if (words < 5) return 1;
//     if (words < 20) return 3;
//     return 5;
//   };

//   return (
//     <div className="container mx-auto p-8 max-w-3xl">
//       <h1 className="text-5xl font-bold text-gray-800 mb-8">Mock Interview</h1>
      
//       {!isReviewMode ? (
//         <>
//           {!isInterviewComplete && (
//             <div className="mb-6">
//               <label className="block text-lg font-medium text-gray-700 mb-2">
//                 Set time per question (in seconds):
//               </label>
//               <input
//                 type="number"
//                 value={adjustableTime}
//                 onChange={handleAdjustableTimeChange}
//                 className="p-2 border rounded-lg shadow-sm w-full max-w-xs"
//                 min={10}
//               />
//             </div>
//           )}

//           <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold text-gray-700">
//                 Question {currentQuestion + 1} of {questions.length}
//               </h2>
//               <div className="flex items-center space-x-4">
//                 <span className="text-red-500 text-lg font-semibold">
//                   {`Time: ${timer}s`}
//                 </span>
//                 <button
//                   onClick={handlePauseResume}
//                   className="py-1 px-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-200"
//                 >
//                   {isPaused ? 'Resume' : 'Pause'}
//                 </button>
//               </div>
//             </div>
//             <p className="text-lg text-gray-600 mb-2">{questions[currentQuestion]}</p>
//             <p className="text-sm text-gray-500 mb-6">Hint: {hints[currentQuestion]}</p>
            
//             <textarea
//               value={response}
//               onChange={handleResponseChange}
//               placeholder="Type your response here..."
//               className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-lg mb-4"
//               rows={5}
//             />

//             <div className="flex justify-between">
//               <button
//                 onClick={handlePreviousQuestion}
//                 className="py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-200"
//                 disabled={currentQuestion === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={handleNextQuestion}
//                 className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
//               >
//                 {currentQuestion + 1 < questions.length ? 'Next' : 'Finish'}
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-between mb-8">
//             <button
//               onClick={handleReview}
//               className="py-2 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
//             >
//               Review Answers
//             </button>
//             <span className="text-gray-600 text-lg">
//               Progress: {responses.filter((res) => res !== '').length}/{questions.length} answered
//             </span>
//           </div>
//         </>
//       ) : (
//         <div className="bg-gray-100 rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Responses & Score</h2>
//           <ul className="space-y-6">
//             {responses.map((res, index) => (
//               <li key={index} className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="text-lg font-medium text-gray-700">Question {index + 1}:</h3>
//                 <p className="text-gray-600 mt-2">{res || 'No response given.'}</p>
//                 <p className="text-sm text-blue-500 mt-2">Feedback: {generateFeedback(res)}</p>
//                 <button
//                   onClick={() => handleRetryQuestion(index)}
//                   className="mt-2 py-1 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
//                 >
//                   Retry
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <p className="text-xl font-semibold text-gray-700 mt-6">Total Score: {score} / {questions.length * 5}</p>
//           <button
//             onClick={handleExitReview}
//             className="mt-6 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Back to Questions
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MockInterview;














import React, { useState, useEffect } from 'react';

const questions = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Why do you want to work here?",
  "Describe a challenge you faced and how you overcame it.",
  "Where do you see yourself in five years?",
];

const hints = [
  "Briefly introduce your background and current status.",
  "Mention a few strengths relevant to the job and a weakness with a positive angle.",
  "Research the company’s values, goals, or projects to tailor your answer.",
  "Describe a specific example, focusing on your problem-solving skills.",
  "Outline your career aspirations aligned with the role."
];

const MockInterview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState('');
  const [responses, setResponses] = useState(Array(questions.length).fill(''));
  const [timer, setTimer] = useState(60);
  const [isPaused, setIsPaused] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isInterviewComplete, setIsInterviewComplete] = useState(false);
  const [adjustableTime, setAdjustableTime] = useState(60);
  const [feedback, setFeedback] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timer > 0 && !isPaused && !isReviewMode) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !isInterviewComplete) {
      handleNextQuestion();
    }
  }, [timer, isPaused, isReviewMode, isInterviewComplete]);

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleNextQuestion = () => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestion] = response;
    setResponses(updatedResponses);
    setFeedback(generateFeedback(response));
    setScore((prev) => prev + calculateScore(response));
    setResponse('');
    setTimer(adjustableTime);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsInterviewComplete(true);
      setIsReviewMode(true);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => (prev - 1 + questions.length) % questions.length);
    setResponse(responses[currentQuestion - 1] || '');
    setTimer(adjustableTime);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReview = () => {
    setIsReviewMode(true);
  };

  const handleExitReview = () => {
    setIsReviewMode(false);
    setIsInterviewComplete(false);
    setCurrentQuestion(0);
    setTimer(adjustableTime);
  };

  const handleRetryQuestion = (index) => {
    setIsReviewMode(false);
    setIsInterviewComplete(false);
    setCurrentQuestion(index);
    setResponse(responses[index] || '');
    setTimer(adjustableTime);
  };

  const handleAdjustableTimeChange = (e) => {
    setAdjustableTime(Number(e.target.value));
    setTimer(Number(e.target.value));
  };

  const generateFeedback = (response) => {
    const words = response.trim().split(" ").length;
    if (words < 5) return "Try to add more detail.";
    if (words < 20) return "Good, but you can expand a bit.";
    return "Great response!";
  };

  const calculateScore = (response) => {
    const words = response.trim().split(" ").length;
    if (words < 5) return 1;
    if (words < 20) return 3;
    return 5;
  };

  return (
    <div className="container mx-auto p-8 max-w-3xl bg-white rounded-lg shadow-md">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Mock Interview</h1>
      
      {!isReviewMode ? (
        <>
          {!isInterviewComplete && (
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Set time per question (in seconds):
              </label>
              <input
                type="number"
                value={adjustableTime}
                onChange={handleAdjustableTimeChange}
                className="p-2 border border-gray-300 rounded-lg shadow-sm w-full max-w-xs"
                min={10}
              />
            </div>
          )}

          <div className="bg-gray-50 shadow-md rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-red-500 text-lg font-semibold">
                  {`Time: ${timer}s`}
                </span>
                <button
                  onClick={handlePauseResume}
                  className={`py-1 px-3 ${isPaused ? 'bg-green-600' : 'bg-yellow-400'} text-white font-semibold rounded-lg hover:bg-opacity-80 transition duration-200`}
                >
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-2">{questions[currentQuestion]}</p>
            <p className="text-sm text-gray-500 mb-6">Hint: {hints[currentQuestion]}</p>
            
            <textarea
              value={response}
              onChange={handleResponseChange}
              placeholder="Type your response here..."
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-lg mb-4"
              rows={5}
            />

            <div className="flex justify-between">
              <button
                onClick={handlePreviousQuestion}
                className="py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-200"
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextQuestion}
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
              >
                {currentQuestion + 1 < questions.length ? 'Next' : 'Finish'}
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-8">
            <button
              onClick={handleReview}
              className="py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
            >
              Review Answers
            </button>
            <span className="text-gray-600 text-lg">
              Progress: {responses.filter((res) => res !== '').length}/{questions.length} answered
            </span>
          </div>
        </>
      ) : (
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Responses & Score</h2>
          <ul className="space-y-6">
            {responses.map((res, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-700">Question {index + 1}:</h3>
                <p className="text-gray-600 mt-2">{res || 'No response given.'}</p>
                <p className="text-sm text-blue-500 mt-2">Feedback: {generateFeedback(res)}</p>
                <button
                  onClick={() => handleRetryQuestion(index)}
                  className="mt-2 py-1 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
                >
                  Retry
                </button>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold text-gray-700 mt-6">Total Score: {score} / {questions.length * 5}</p>
          <button
            onClick={handleExitReview}
            className="mt-6 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Back to Questions
          </button>
        </div>
      )}
    </div>
  );
};

export default MockInterview;












