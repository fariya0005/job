// import React from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// import axios from 'axios'
// import { COMPANY_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch } from 'react-redux'




//             const CompanyCreate = () => {
//                 const navigate = useNavigate();
//                 const [companyName, setCompanyName] = useState();
//                 const dispatch = useDispatch();
//                 const registerNewCompany = async () => {
//                     try {
//                         const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
//                             headers:{
//                                 'Content-Type':'application/json'
//                             },
//                             withCredentials:true
//                         });
//                         if(res?.data?.success){
//                             dispatch(setSingleCompany(res.data.company));
//                             toast.success(res.data.message);
//                             const companyId = res?.data?.company?._id;
//                             navigate(`/admin/companies/${companyId}`);
//                         }
//                     } catch (error) {
//                         console.log(error);
//                     }
//                 }
//     return (
//         <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-white">
//             <Navbar />
//             <div className='max-w-4xl mx-auto mt-12'>
//                 {/* Header section */}
//                 <div className='my-10 text-center'>
//                     <h1 className='font-extrabold text-4xl text-gray-800'>Create Your Company</h1>
//                     <p className='text-gray-500 text-lg mt-2'>
//                         What would you like to name your company? You can change this later.
//                     </p>
//                 </div>

//                 {/* Input section */}
//                 <div className="bg-white shadow-xl rounded-lg p-8">
//                     <div className="mb-8">
//                         <Label className="block text-xl font-semibold text-gray-700 mb-2">Company Name</Label>
//                         <Input
//                             type="text"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 transition-all"
//                             placeholder="e.g., JobHunt, Microsoft"
//                             onChange={(e) => setCompanyName(e.target.value)}
//                         />
//                     </div>

//                     {/* Button section */}
//                     <div className="flex items-center gap-2 my-10">
//                         {/* <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button> */}



//                         <Button
//                             onClick={() => navigate("/admin/companies")}
//                             className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition-all duration-300"
//                         >
//                             Cancel
//                         </Button>


//                         <Button
//                             className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                         >
//                             Continue
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CompanyCreate;



// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { COMPANY_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useDispatch } from 'react-redux';
// import { setSingleCompany } from '@/redux/companySlice'

// const CompanyCreate = () => {
//     const navigate = useNavigate();
//     const [companyName, setCompanyName] = useState('');
//     const dispatch = useDispatch();

//     const registerNewCompany = async () => {
//         try {
//             const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: true
//             });

//             if (res?.data?.success) {
//                 dispatch(setSingleCompany(res.data.company));
//                 toast.success(res.data.message);
//                 const companyId = res?.data?.company?._id;
//                 navigate(`/admin/companies/${companyId}`);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Error creating company");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-white">
//             <Navbar />
//             <div className='max-w-4xl mx-auto mt-12'>
//                 {/* Header section */}
//                 <div className='my-10 text-center'>
//                     <h1 className='font-extrabold text-4xl text-gray-800'>Create Your Company</h1>
//                     <p className='text-gray-500 text-lg mt-2'>
//                         What would you like to name your company? You can change this later.
//                     </p>
//                 </div>

//                 {/* Input section */}
//                 <div className="bg-white shadow-xl rounded-lg p-8">
//                     <div className="mb-8">
//                         <Label className="block text-xl font-semibold text-gray-700 mb-2">Company Name</Label>
//                         <Input
//                             type="text"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 transition-all"
//                             placeholder="e.g., JobHunt, Microsoft"
//                             value={companyName}
//                             onChange={(e) => setCompanyName(e.target.value)}
//                         />
//                     </div>

//                     {/* Button section */}
//                     <div className="flex items-center gap-2 my-10">
//                         <Button
//                             onClick={() => navigate("/admin/companies")}
//                             className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition-all duration-300"
//                         >
//                             Cancel
//                         </Button>

//                         <Button
//                             onClick={registerNewCompany}
//                             className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                         >
//                             Continue
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CompanyCreate;




// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { COMPANY_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useDispatch } from 'react-redux';
// import { setSingleCompany } from '@/redux/companySlice';

// const CompanyCreate = () => {
//     const navigate = useNavigate();
//     const [companyName, setCompanyName] = useState('');
//     const dispatch = useDispatch();

//     // Log the API endpoint to ensure it's correct
//     console.log("API Endpoint:", COMPANY_API_END_POINT);

//     const registerNewCompany = async () => {
//         // Check if companyName is valid before making the API call
//         if (!companyName) {
//             toast.error("Company Name cannot be empty");
//             return;
//         }

//         try {
//             // Making the API call to register the company
//             const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: true
//             });

//             // Check if the response is successful
//             if (res?.data?.success) {
//                 // Dispatch the company details to Redux
//                 dispatch(setSingleCompany(res.data.company));

//                 // Show a success message
//                 toast.success(res.data.message);

//                 // Get the company ID from the response and navigate to the next page
//                 const companyId = res?.data?.company?._id;
//                 navigate(`/admin/companies/${companyId}`);
//             } else {
//                 // If there's an issue with the response, display an error
//                 toast.error("Failed to create company: " + res?.data?.message);
//             }
//         } catch (error) {
//             // Log any error encountered during the API call
//             console.error("Error in API call:", error);

//             // Display a general error message
//             toast.error("Error creating company");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-white">
//             <Navbar />
//             <div className='max-w-4xl mx-auto mt-12'>
//                 {/* Header section */}
//                 <div className='my-10 text-center'>
//                     <h1 className='font-extrabold text-4xl text-gray-800'>Create Your Company</h1>
//                     <p className='text-gray-500 text-lg mt-2'>
//                         What would you like to name your company? You can change this later.
//                     </p>
//                 </div>

//                 {/* Input section */}
//                 <div className="bg-white shadow-xl rounded-lg p-8">
//                     <div className="mb-8">
//                         <Label className="block text-xl font-semibold text-gray-700 mb-2">Company Name</Label>
//                         <Input
//                             type="text"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 transition-all"
//                             placeholder="e.g., JobHunt, Microsoft"
//                             value={companyName}
//                             onChange={(e) => setCompanyName(e.target.value)}
//                         />
//                     </div>

//                     {/* Button section */}
//                     <div className="flex items-center gap-2 my-10">
//                         <Button
//                             onClick={() => navigate("/admin/companies")}
//                             className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition-all duration-300"
//                         >
//                             Cancel
//                         </Button>

//                         <Button
//                             onClick={registerNewCompany}
//                             className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                         >
//                             Continue
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CompanyCreate;












import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        // Ensure required fields are not empty
        if (!companyName || !email) {
            toast.error("Company name and email are required.");
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/api/v1/company/register', 
                { companyName, email }, // Send only required fields
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            );

            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            } else {
                toast.error("Failed to create company: " + res?.data?.message);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error creating company";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-white">
            <Navbar />
            <div className='max-w-4xl mx-auto mt-12'>
                <div className='my-10 text-center'>
                    <h1 className='font-extrabold text-4xl text-gray-800'>Create Your Company</h1>
                    <p className='text-gray-500 text-lg mt-2'>
                        Fill in the details to register your company.
                    </p>
                </div>

                <div className="bg-white shadow-xl rounded-lg p-8">
                    <div className="mb-8">
                        <Label className="block text-xl font-semibold text-gray-700 mb-2">Company Name</Label>
                        <Input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                            placeholder="e.g., JobHunt, Microsoft"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                    <div className="mb-8">
                        <Label className="block text-xl font-semibold text-gray-700 mb-2">Email</Label>
                        <Input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                            placeholder="Company email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 my-10">
                        <Button
                            onClick={() => navigate("/admin/companies")}
                            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition-all duration-300"
                        >
                            Cancel
                        </Button>

                        <Button
                            onClick={registerNewCompany}
                            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;






