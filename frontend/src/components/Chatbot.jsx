import React, { useState } from 'react';

// Predefined responses for the chatbot based on different intents
const botResponses = {
  greeting: ["Hi there! How can I assist you today?", "Hello! What can I help you with today?"],
  farewell: ["Goodbye! Have a great day!", "See you later! Take care!"],
  help: [
    "I can help you with job searches, resume building, and interview tips. How can I assist you today?",
    "Looking for job search tips or resume advice? Let me know how I can assist!",
  ],
  jobSearch: [
    "You can start a job search by typing in your preferred job title and location.",
    "I'm here to help you find the best jobs! What kind of job are you looking for?",
  ],
  resumeTips: [
    "Make sure your resume highlights your relevant skills and experience. Would you like some templates?",
    "A strong resume is crucial. Would you like me to help you build one?",
  ],
  interviewTips: [
    "Prepare for interviews by researching the company and practicing common questions. Need more advice?",
    "I can offer tips for handling tough interview questions. Just let me know!",
  ],
  applyJob: [
    "You can apply for jobs directly through our platform. Need help with the application process?",
    "To apply for a job, click on the 'Apply' button next to the job listing. Need further assistance?",
  ],
  jobOpenings: [
    "We have various job openings available. Please tell me your preferred job title or field.",
    "Looking for job openings? Let me know your skills or preferred industries, and I can help!",
  ],
  careerAdvice: [
    "Consider networking and reaching out to professionals in your desired field. Would you like tips on networking?",
    "Explore different career paths based on your skills. What are your interests?",
  ],
  salaryNegotiation: [
    "Research the average salary for your position in your area to prepare for negotiations.",
    "Would you like tips on how to negotiate your salary effectively?",
  ],
  skillsDevelopment: [
    "Consider taking online courses or attending workshops to enhance your skills. What skills are you looking to improve?",
    "Continuous learning is key to career advancement. Are you interested in specific training programs?",
  ],
  jobTrends: [
    "Staying updated with industry trends can help you in your job search. What industry are you interested in?",
    "Understanding the current job market trends is crucial. Would you like insights on specific sectors?",
  ],
  unknown: ["I'm not sure about that. Could you clarify?", "Sorry, I don't understand that yet."],
};

// Function to detect user intent based on input using regex and keywords
const getBotResponse = (input) => {
  const lowercaseInput = input.toLowerCase();

  // Match user input to intents using regex and keywords
  if (/(hello|hi|hey)/.test(lowercaseInput)) {
    return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
  }
  if (/(bye|goodbye|see you)/.test(lowercaseInput)) {
    return botResponses.farewell[Math.floor(Math.random() * botResponses.farewell.length)];
  }
  if (/(help|assist|what can you do)/.test(lowercaseInput)) {
    return botResponses.help[Math.floor(Math.random() * botResponses.help.length)];
  }
  if (/(job search|find job|search job|job openings)/.test(lowercaseInput)) {
    return botResponses.jobSearch[Math.floor(Math.random() * botResponses.jobSearch.length)];
  }
  if (/(resume|cv|build resume|resume tips)/.test(lowercaseInput)) {
    return botResponses.resumeTips[Math.floor(Math.random() * botResponses.resumeTips.length)];
  }
  if (/(interview|interview tips|prepare interview)/.test(lowercaseInput)) {
    return botResponses.interviewTips[Math.floor(Math.random() * botResponses.interviewTips.length)];
  }
  if (/(apply job|how to apply|application process)/.test(lowercaseInput)) {
    return botResponses.applyJob[Math.floor(Math.random() * botResponses.applyJob.length)];
  }
  if (/(job openings|available jobs|job listings)/.test(lowercaseInput)) {
    return botResponses.jobOpenings[Math.floor(Math.random() * botResponses.jobOpenings.length)];
  }
  if (/(career advice|career tips|how to advance my career)/.test(lowercaseInput)) {
    return botResponses.careerAdvice[Math.floor(Math.random() * botResponses.careerAdvice.length)];
  }
  if (/(salary negotiation|negotiating salary|salary tips)/.test(lowercaseInput)) {
    return botResponses.salaryNegotiation[Math.floor(Math.random() * botResponses.salaryNegotiation.length)];
  }
  if (/(skills development|improve skills|learning opportunities)/.test(lowercaseInput)) {
    return botResponses.skillsDevelopment[Math.floor(Math.random() * botResponses.skillsDevelopment.length)];
  }
  if (/(job trends|current job market|industry trends)/.test(lowercaseInput)) {
    return botResponses.jobTrends[Math.floor(Math.random() * botResponses.jobTrends.length)];
  }

  // Default response for unknown inputs
  return botResponses.unknown[Math.floor(Math.random() * botResponses.unknown.length)];
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Handles user input and bot response
  const handleSendMessage = () => {
    if (!input) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Get bot's response based on user input using the getBotResponse function
    const botMessageText = getBotResponse(input);
    const botMessage = { text: botMessageText, sender: "bot" };

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput(""); // Clear input
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot Icon, Clicking it opens the chat */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <img
          src="https://img.icons8.com/ios-filled/50/008000/chat.png"
          alt="Chat Icon"
          className="w-12 h-12"
        />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col animate-fade-in">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-t-lg flex justify-between items-center shadow">
            <h4 className="font-semibold text-lg">Jobify</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              ✕
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-green-100 text-right self-end'
                    : 'bg-gray-200 text-left self-start'
                }`}
              >
                <strong className="block mb-1 text-sm">
                  {message.sender === 'user' ? "You" : "Bot"}:
                </strong>
                <span className="text-base">{message.text}</span>
              </div>
            ))}
          </div>

          {/* Input and send button */}
          <div className="flex items-center p-3 border-t border-gray-300 bg-white rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-3 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;















