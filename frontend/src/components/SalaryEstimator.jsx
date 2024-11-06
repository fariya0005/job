





import React, { useState } from 'react';

// Expanded salary data structure for different job titles, experience levels, and locations (including Indian cities)



  const salaryData = {
    "Software Engineer": {
      "Junior": { "New Delhi": 50000, "Hyderabad": 48000, "Bangalore": 52000, "Mumbai": 55000, "Chennai": 48000, "Pune": 47000, "Kolkata": 45000, "Ahmedabad": 42000, "Jaipur": 41000, "Lucknow": 40000 },
      "Mid-Level": { "New Delhi": 80000, "Hyderabad": 75000, "Bangalore": 82000, "Mumbai": 85000, "Chennai": 80000, "Pune": 78000, "Kolkata": 75000, "Ahmedabad": 70000, "Jaipur": 68000, "Lucknow": 67000 },
      "Senior": { "New Delhi": 120000, "Hyderabad": 115000, "Bangalore": 125000, "Mumbai": 130000, "Chennai": 125000, "Pune": 120000, "Kolkata": 115000, "Ahmedabad": 110000, "Jaipur": 105000, "Lucknow": 100000 },
    },
    "Data Scientist": {
      "Junior": { "New Delhi": 65000, "Hyderabad": 63000, "Bangalore": 68000, "Mumbai": 70000, "Chennai": 66000, "Pune": 65000, "Kolkata": 62000, "Ahmedabad": 60000, "Jaipur": 58000, "Lucknow": 57000 },
      "Mid-Level": { "New Delhi": 100000, "Hyderabad": 95000, "Bangalore": 105000, "Mumbai": 110000, "Chennai": 98000, "Pune": 95000, "Kolkata": 90000, "Ahmedabad": 88000, "Jaipur": 85000, "Lucknow": 82000 },
      "Senior": { "New Delhi": 150000, "Hyderabad": 140000, "Bangalore": 155000, "Mumbai": 160000, "Chennai": 150000, "Pune": 148000, "Kolkata": 140000, "Ahmedabad": 135000, "Jaipur": 130000, "Lucknow": 125000 },
    },
    "Product Manager": {
      "Junior": { "New Delhi": 60000, "Hyderabad": 58000, "Bangalore": 65000, "Mumbai": 67000, "Chennai": 62000, "Pune": 60000, "Kolkata": 57000, "Ahmedabad": 55000, "Jaipur": 53000, "Lucknow": 52000 },
      "Mid-Level": { "New Delhi": 90000, "Hyderabad": 85000, "Bangalore": 95000, "Mumbai": 100000, "Chennai": 92000, "Pune": 90000, "Kolkata": 88000, "Ahmedabad": 85000, "Jaipur": 83000, "Lucknow": 80000 },
      "Senior": { "New Delhi": 140000, "Hyderabad": 135000, "Bangalore": 150000, "Mumbai": 155000, "Chennai": 145000, "Pune": 140000, "Kolkata": 130000, "Ahmedabad": 125000, "Jaipur": 120000, "Lucknow": 115000 },
    },
    "UI/UX Designer": {
      "Junior": { "New Delhi": 45000, "Hyderabad": 43000, "Bangalore": 48000, "Mumbai": 50000, "Chennai": 46000, "Pune": 44000, "Kolkata": 42000, "Ahmedabad": 40000, "Jaipur": 39000, "Lucknow": 38000 },
      "Mid-Level": { "New Delhi": 70000, "Hyderabad": 68000, "Bangalore": 75000, "Mumbai": 78000, "Chennai": 72000, "Pune": 70000, "Kolkata": 67000, "Ahmedabad": 65000, "Jaipur": 63000, "Lucknow": 62000 },
      "Senior": { "New Delhi": 100000, "Hyderabad": 95000, "Bangalore": 105000, "Mumbai": 110000, "Chennai": 102000, "Pune": 98000, "Kolkata": 92000, "Ahmedabad": 90000, "Jaipur": 85000, "Lucknow": 83000 },
    },
    "DevOps Engineer": {
      "Junior": { "New Delhi": 55000, "Hyderabad": 53000, "Bangalore": 58000, "Mumbai": 60000, "Chennai": 56000, "Pune": 54000, "Kolkata": 52000, "Ahmedabad": 50000, "Jaipur": 49000, "Lucknow": 48000 },
      "Mid-Level": { "New Delhi": 85000, "Hyderabad": 82000, "Bangalore": 90000, "Mumbai": 95000, "Chennai": 88000, "Pune": 86000, "Kolkata": 83000, "Ahmedabad": 80000, "Jaipur": 78000, "Lucknow": 75000 },
      "Senior": { "New Delhi": 130000, "Hyderabad": 125000, "Bangalore": 135000, "Mumbai": 140000, "Chennai": 132000, "Pune": 128000, "Kolkata": 122000, "Ahmedabad": 120000, "Jaipur": 115000, "Lucknow": 110000 },
    },
    "Business Analyst": {
      "Junior": { "New Delhi": 40000, "Hyderabad": 38000, "Bangalore": 45000, "Mumbai": 47000, "Chennai": 42000, "Pune": 41000, "Kolkata": 38000, "Ahmedabad": 36000, "Jaipur": 35000, "Lucknow": 34000 },
      "Mid-Level": { "New Delhi": 70000, "Hyderabad": 65000, "Bangalore": 72000, "Mumbai": 75000, "Chennai": 68000, "Pune": 66000, "Kolkata": 62000, "Ahmedabad": 60000, "Jaipur": 58000, "Lucknow": 55000 },
      "Senior": { "New Delhi": 120000, "Hyderabad": 115000, "Bangalore": 125000, "Mumbai": 130000, "Chennai": 122000, "Pune": 118000, "Kolkata": 112000, "Ahmedabad": 110000, "Jaipur": 105000, "Lucknow": 100000 },
    },
    "Digital Marketing Manager": {
      "Junior": { "New Delhi": 38000, "Hyderabad": 36000, "Bangalore": 40000, "Mumbai": 42000, "Chennai": 39000, "Pune": 38000, "Kolkata": 35000, "Ahmedabad": 34000, "Jaipur": 32000, "Lucknow": 31000 },
      "Mid-Level": { "New Delhi": 65000, "Hyderabad": 60000, "Bangalore": 68000, "Mumbai": 70000, "Chennai": 66000, "Pune": 64000, "Kolkata": 60000, "Ahmedabad": 58000, "Jaipur": 55000, "Lucknow": 53000 },
      "Senior": { "New Delhi": 100000, "Hyderabad": 95000, "Bangalore": 105000, "Mumbai": 110000, "Chennai": 102000, "Pune": 98000, "Kolkata": 95000, "Ahmedabad": 90000, "Jaipur": 88000, "Lucknow": 85000 },
    },
    "Network Engineer": {
      "Junior": { "New Delhi": 45000, "Hyderabad": 43000, "Bangalore": 48000, "Mumbai": 50000, "Chennai": 46000, "Pune": 44000, "Kolkata": 42000, "Ahmedabad": 40000, "Jaipur": 39000, "Lucknow": 38000 },
      "Mid-Level": { "New Delhi": 70000, "Hyderabad": 68000, "Bangalore": 75000, "Mumbai": 78000, "Chennai": 72000, "Pune": 70000, "Kolkata": 67000, "Ahmedabad": 65000, "Jaipur": 63000, "Lucknow": 62000 },
      "Senior": { "New Delhi": 100000, "Hyderabad": 95000, "Bangalore": 105000, "Mumbai": 110000, "Chennai": 102000, "Pune": 98000, "Kolkata": 92000, "Ahmedabad": 90000, "Jaipur": 85000, "Lucknow": 83000 },
    },
    "Database Administrator": {
      "Junior": { "New Delhi": 55000, "Hyderabad": 53000, "Bangalore": 58000, "Mumbai": 60000, "Chennai": 56000, "Pune": 54000, "Kolkata": 52000, "Ahmedabad": 50000, "Jaipur": 49000, "Lucknow": 48000 },
      "Mid-Level": { "New Delhi": 85000, "Hyderabad": 82000, "Bangalore": 90000, "Mumbai": 95000, "Chennai": 88000, "Pune": 86000, "Kolkata": 83000, "Ahmedabad": 80000, "Jaipur": 78000, "Lucknow": 75000 },
      "Senior": { "New Delhi": 130000, "Hyderabad": 125000, "Bangalore": 135000, "Mumbai": 140000, "Chennai": 132000, "Pune": 128000, "Kolkata": 122000, "Ahmedabad": 120000, "Jaipur": 115000, "Lucknow": 110000 },
    },
    "System Analyst": {
      "Junior": { "New Delhi": 43000, "Hyderabad": 41000, "Bangalore": 47000, "Mumbai": 49000, "Chennai": 45000, "Pune": 44000, "Kolkata": 42000, "Ahmedabad": 40000, "Jaipur": 39000, "Lucknow": 38000 },
      "Mid-Level": { "New Delhi": 70000, "Hyderabad": 67000, "Bangalore": 75000, "Mumbai": 78000, "Chennai": 72000, "Pune": 70000, "Kolkata": 67000, "Ahmedabad": 65000, "Jaipur": 62000, "Lucknow": 60000 },
      "Senior": { "New Delhi": 110000, "Hyderabad": 105000, "Bangalore": 115000, "Mumbai": 120000, "Chennai": 112000, "Pune": 110000, "Kolkata": 105000, "Ahmedabad": 102000, "Jaipur": 98000, "Lucknow": 95000 },
    },
    "Quality Assurance Engineer": {
      "Junior": { "New Delhi": 40000, "Hyderabad": 38000, "Bangalore": 45000, "Mumbai": 47000, "Chennai": 42000, "Pune": 41000, "Kolkata": 38000, "Ahmedabad": 36000, "Jaipur": 35000, "Lucknow": 34000 },
      "Mid-Level": { "New Delhi": 60000, "Hyderabad": 57000, "Bangalore": 65000, "Mumbai": 68000, "Chennai": 62000, "Pune": 60000, "Kolkata": 58000, "Ahmedabad": 55000, "Jaipur": 53000, "Lucknow": 51000 },
      "Senior": { "New Delhi": 95000, "Hyderabad": 90000, "Bangalore": 100000, "Mumbai": 105000, "Chennai": 98000, "Pune": 95000, "Kolkata": 92000, "Ahmedabad": 88000, "Jaipur": 85000, "Lucknow": 82000 },
    },
    "Technical Support Engineer": {
      "Junior": { "New Delhi": 35000, "Hyderabad": 33000, "Bangalore": 40000, "Mumbai": 42000, "Chennai": 38000, "Pune": 37000, "Kolkata": 34000, "Ahmedabad": 32000, "Jaipur": 31000, "Lucknow": 30000 },
      "Mid-Level": { "New Delhi": 55000, "Hyderabad": 52000, "Bangalore": 60000, "Mumbai": 63000, "Chennai": 58000, "Pune": 55000, "Kolkata": 52000, "Ahmedabad": 50000, "Jaipur": 48000, "Lucknow": 46000 },
      "Senior": { "New Delhi": 90000, "Hyderabad": 85000, "Bangalore": 95000, "Mumbai": 98000, "Chennai": 93000, "Pune": 90000, "Kolkata": 87000, "Ahmedabad": 85000, "Jaipur": 82000, "Lucknow": 80000 },
    },
    "Cloud Engineer": {
      "Junior": { "New Delhi": 60000, "Hyderabad": 58000, "Bangalore": 65000, "Mumbai": 67000, "Chennai": 62000, "Pune": 60000, "Kolkata": 57000, "Ahmedabad": 55000, "Jaipur": 53000, "Lucknow": 51000 },
      "Mid-Level": { "New Delhi": 90000, "Hyderabad": 85000, "Bangalore": 95000, "Mumbai": 100000, "Chennai": 92000, "Pune": 90000, "Kolkata": 87000, "Ahmedabad": 85000, "Jaipur": 82000, "Lucknow": 80000 },
      "Senior": { "New Delhi": 140000, "Hyderabad": 135000, "Bangalore": 150000, "Mumbai": 155000, "Chennai": 145000, "Pune": 140000, "Kolkata": 130000, "Ahmedabad": 125000, "Jaipur": 120000, "Lucknow": 115000 },
    }
  };
  
  // More job titles...

const SalaryEstimator = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [location, setLocation] = useState("");
  const [salaryEstimate, setSalaryEstimate] = useState(null);
  const [error, setError] = useState("");

  const handleEstimateSalary = () => {
    setError(""); // Clear previous errors

    // Validation
    if (!jobTitle || !experienceLevel || !location) {
      setError("Please fill in all fields with valid information.");
      return;
    }

    // Salary estimation logic
    const jobData = salaryData[jobTitle];
    if (jobData) {
      const salary = jobData[experienceLevel]?.[location];
      if (salary) {
        setSalaryEstimate(salary);
      } else {
        setError("Salary data not available for the selected location and experience level.");
      }
    } else {
      setError("Invalid job title. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Salary Estimator</h2>

      <div className="mb-5">
        <label className="block text-gray-600 font-medium mb-2">Job Title:</label>
        <select
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring focus:ring-green-200"
        >
          <option value="">Select Job Title...</option>
          {Object.keys(salaryData).map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 font-medium mb-2">Experience Level:</label>
        <select
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring focus:ring-green-200"
        >
          <option value="">Select Experience Level...</option>
          <option value="Junior">Junior(0 to 1 years)</option>
          <option value="Mid-Level">Mid-Level(2 to 5 years)</option>
          <option value="Senior">Senior(5 to 7 years)</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 font-medium mb-2">Location:</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring focus:ring-green-200"
        >
          <option value="">Select Location...</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Pune">Pune</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Lucknow">Lucknow</option>
        </select>
      </div>

      {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

      <button
        onClick={handleEstimateSalary}
        className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition-all"
      >
        Estimate Salary
      </button>

      {salaryEstimate !== null && (
        <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700">
            Estimated Salary: <span className="text-green-600">₹{salaryEstimate}</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default SalaryEstimator;

