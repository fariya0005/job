


// import React, { useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { useSelector } from 'react-redux'
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
// import axios from 'axios'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useNavigate } from 'react-router-dom'
// import { Loader2 } from 'lucide-react'

// const companyArray = [];

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         vacancy: 0,
//         companyId: ""
//     });
//     const [loading, setLoading]= useState(false);
//     const navigate = useNavigate();

//     const { companies } = useSelector(store => store.company);
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company)=> company.name.toLowerCase() === value);
//         setInput({...input, companyId:selectedCompany._id});
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input,{
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 withCredentials:true
//             });
//             if(res.data.success){
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally{
//             setLoading(false);
//         }
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center w-screen my-5'>
//                 <form onSubmit = {submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
//                     <div className='grid grid-cols-2 gap-2'>
//                         <div>
//                             <Label>Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Description</Label>
//                             <Input
//                                 type="text"
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Requirements</Label>
//                             <Input
//                                 type="text"
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Salary</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Job Type</Label>
//                             <Input
//                                 type="text"
//                                 name="jobType"
//                                 value={input.jobType}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Experience Level</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Vacancy</Label>
//                             <Input
//                                 type="number"
//                                 name="vacancy"
//                                 value={input.vacancy}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         {
//                             companies.length > 0 && (
//                                 <Select onValueChange={selectChangeHandler}>
//                                     <SelectTrigger className="w-[180px]">
//                                         <SelectValue placeholder="Select a Company" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {
//                                                 companies.map((company) => {
//                                                     return (
//                                                         <SelectItem value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
//                                                     )
//                                                 })
//                                             }

//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             )
//                         }
//                     </div> 
//                     {
//                         loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Post New Job</Button>
//                     }
//                     {
//                         companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>*Please register a company first, before posting a jobs</p>
//                     }
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default PostJob





// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { useSelector } from 'react-redux';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import axios from 'axios';
// import { JOB_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         vacancy: 0,
//         companyId: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { companies } = useSelector(store => store.company);

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
//         setInput({ ...input, companyId: selectedCompany._id });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             {/* Main Container with Gradient Background */}
//             <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-green-200 via-blue-200 to-white py-10">
//                 <form onSubmit={submitHandler} className="bg-white p-10 max-w-4xl shadow-xl rounded-3xl border border-gray-200">
//                     <h2 className="text-3xl font-light text-gray-700 text-center mb-8">Create Job Post</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Job Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Description</Label>
//                             <Input
//                                 type="text"
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Requirements</Label>
//                             <Input
//                                 type="text"
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Salary</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Job Type</Label>
//                             <Input
//                                 type="text"
//                                 name="jobType"
//                                 value={input.jobType}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Experience</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Vacancy</Label>
//                             <Input
//                                 type="number"
//                                 name="vacancy"
//                                 value={input.vacancy}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         {companies.length > 0 && (
//                             <div className="col-span-2">
//                                 <Label className="text-sm font-semibold text-gray-600">Company</Label>
//                                 <Select onValueChange={selectChangeHandler}>
//                                     <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
//                                         <SelectValue placeholder="Select a Company" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {companies.map((company) => (
//                                                 <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
//                                                     {company.name}
//                                                 </SelectItem>
//                                             ))}
//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             </div>
//                         )}
//                     </div>
//                     {loading ? (
//                         <Button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 text-white flex justify-center items-center shadow-sm hover:bg-blue-500 transition ease-in-out rounded-lg">
//                             <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
//                         </Button>
//                     ) : (
//                         <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white shadow-sm transition ease-in-out rounded-lg">
//                             Post Job
//                         </Button>
//                     )}
//                     {companies.length === 0 && (
//                         <p className="text-xs text-red-600 font-semibold text-center mt-4">*Please register a company before posting a job</p>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PostJob;









// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input, Textarea } from '../ui/input'; // Include Textarea for larger input fields
// import { Button } from '../ui/button';
// import { useSelector } from 'react-redux';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import axios from 'axios';
// import { JOB_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         vacancy: 0,
//         companyId: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { companies } = useSelector(store => store.company);

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
//         setInput({ ...input, companyId: selectedCompany._id });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             {/* Main Container with Gradient Background */}
//             <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-green-200 via-blue-200 to-white py-10">
//                 <form onSubmit={submitHandler} className="bg-white p-10 max-w-4xl shadow-xl rounded-3xl border border-gray-200">
//                     <h2 className="text-3xl font-light text-gray-700 text-center mb-8">Create Job Post</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Job Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div className="col-span-2">
//                             <Label className="text-sm font-semibold text-gray-600">Description</Label>
//                             <Textarea
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 rows={4} // Set a larger text area
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div className="col-span-2">
//                             <Label className="text-sm font-semibold text-gray-600">Requirements</Label>
//                             <Textarea
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 rows={4} // Set a larger text area
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Salary (in LPA)</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 placeholder="e.g., 6 LPA"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Job Type</Label>
//                             <Select onValueChange={(value) => setInput({ ...input, jobType: value })}>
//                                 <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
//                                     <SelectValue placeholder="Select Job Type" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectGroup>
//                                         <SelectItem value="on-site full-time">On-site Full Time</SelectItem>
//                                         <SelectItem value="on-site internship">On-site Internship</SelectItem>
//                                         <SelectItem value="remote full-time">Remote Full Time</SelectItem>
//                                         <SelectItem value="remote internship">Remote Internship</SelectItem>
//                                     </SelectGroup>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Experience (in Years)</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 placeholder="e.g., 3 Years"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Vacancy</Label>
//                             <Input
//                                 type="number"
//                                 name="vacancy"
//                                 value={input.vacancy}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         {companies.length > 0 && (
//                             <div className="col-span-2">
//                                 <Label className="text-sm font-semibold text-gray-600">Company</Label>
//                                 <Select onValueChange={selectChangeHandler}>
//                                     <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
//                                         <SelectValue placeholder="Select a Company" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {companies.map((company) => (
//                                                 <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
//                                                     {company.name}
//                                                 </SelectItem>
//                                             ))}
//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             </div>
//                         )}
//                     </div>
//                     {loading ? (
//                         <Button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 text-white flex justify-center items-center shadow-sm hover:bg-blue-500 transition ease-in-out rounded-lg">
//                             <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
//                         </Button>
//                     ) : (
//                         <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white shadow-sm transition ease-in-out rounded-lg">
//                             Post Job
//                         </Button>
//                     )}
//                     {companies.length === 0 && (
//                         <p className="text-xs text-red-600 font-semibold text-center mt-4">*Please register a company before posting a job</p>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PostJob;








// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { useSelector } from 'react-redux';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import axios from 'axios';
// import { JOB_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';

// // Define Textarea component inline
// const Textarea = ({ name, value, onChange, rows, className }) => (
//     <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         rows={rows}
//         className={className}
//     />
// );

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         vacancy: 0,
//         companyId: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { companies } = useSelector(store => store.company);

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
//         setInput({ ...input, companyId: selectedCompany._id });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-green-200 via-blue-200 to-white py-10">
//                 <form onSubmit={submitHandler} className="bg-white p-10 max-w-4xl shadow-xl rounded-3xl border border-gray-200">
//                     <h2 className="text-3xl font-light text-gray-700 text-center mb-8">Create Job Post</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Job Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div className="col-span-2">
//                             <Label className="text-sm font-semibold text-gray-600">Description</Label>
//                             <Textarea
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 rows={4}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div className="col-span-2">
//                             <Label className="text-sm font-semibold text-gray-600">Requirements</Label>
//                             <Textarea
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 rows={4}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Salary (in LPA)</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Job Type</Label>
//                             <Select onValueChange={(value) => setInput({ ...input, jobType: value })}>
//                                 <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
//                                     <SelectValue placeholder="Select Job Type" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectGroup>
//                                         <SelectItem value="on-site full-time">On-site Full Time</SelectItem>
//                                         <SelectItem value="on-site internship">On-site Internship</SelectItem>
//                                         <SelectItem value="remote full-time">Remote Full Time</SelectItem>
//                                         <SelectItem value="remote internship">Remote Internship</SelectItem>
//                                     </SelectGroup>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Experience (Years)</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         <div>
//                             <Label className="text-sm font-semibold text-gray-600">Vacancy</Label>
//                             <Input
//                                 type="number"
//                                 name="vacancy"
//                                 value={input.vacancy}
//                                 onChange={changeEventHandler}
//                                 className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                             />
//                         </div>
//                         {companies.length > 0 && (
//                             <div className="col-span-2">
//                                 <Label className="text-sm font-semibold text-gray-600">Company</Label>
//                                 <Select onValueChange={selectChangeHandler}>
//                                     <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
//                                         <SelectValue placeholder="Select a Company" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {companies.map((company) => (
//                                                 <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
//                                                     {company.name}
//                                                 </SelectItem>
//                                             ))}
//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             </div>
//                         )}
//                     </div>
//                     {loading ? (
//                         <Button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 text-white flex justify-center items-center shadow-sm hover:bg-blue-500 transition ease-in-out rounded-lg">
//                             <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
//                         </Button>
//                     ) : (
//                         <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white shadow-sm transition ease-in-out rounded-lg">
//                             Post Job
//                         </Button>
//                     )}
//                     {companies.length === 0 && (
//                         <p className="text-xs text-red-600 font-semibold text-center mt-4">*Please register a company before posting a job</p>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PostJob;










// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { useSelector } from 'react-redux';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import axios from 'axios';
// import { JOB_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';

// // Define Textarea component inline
// const Textarea = ({ name, value, onChange, rows, className }) => (
//     <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         rows={rows}
//         className={className}
//     />
// );

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         vacancy: 0,
//         companyId: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { companies } = useSelector(store => store.company);

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
//         setInput({ ...input, companyId: selectedCompany._id });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-green-200 via-blue-200 to-white py-20">
//                 <div className="max-w-5xl w-full">
//                     <form onSubmit={submitHandler} className="bg-white p-10 max-w-4xl mx-auto shadow-xl rounded-xl border border-gray-200">
//                         <h2 className="text-3xl font-light text-gray-700 text-center mb-8">Create Job Post</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <Label className="text-sm font-semibold text-gray-600">Job Title</Label>
//                                 <Input
//                                     type="text"
//                                     name="title"
//                                     value={input.title}
//                                     onChange={changeEventHandler}
//                                     className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                                 />
//                             </div>
//                             <div className="col-span-2">
//                                 <Label className="text-sm font-semibold text-gray-600">Description</Label>
//                                 <Textarea
//                                     name="description"
//                                     value={input.description}
//                                     onChange={changeEventHandler}
//                                     rows={4}
//                                     className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                                 />
//                             </div>
//                             <div className="col-span-2">
//                                 <Label className="text-sm font-semibold text-gray-600">Requirements</Label>
//                                 <Textarea
//                                     name="requirements"
//                                     value={input.requirements}
//                                     onChange={changeEventHandler}
//                                     rows={4}
//                                     className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                                 />
//                             </div>
//                             <div>
//                                 <Label className="text-sm font-semibold text-gray-600">Salary (in LPA)</Label>
//                                 <Input
//                                     type="text"
//                                     name="salary"
//                                     value={input.salary}
//                                     onChange={changeEventHandler}
//                                     className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                                 />
//                             </div>
//                             <div>
//                                 <Label className="text-sm font-semibold text-gray-600">Location</Label>
//                                 <Input
//                                     type="text"
//                                     name="location"
//                                     value={input.location}
//                                     onChange={changeEventHandler}
//                                     className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                                 />
//                             </div>
//                             <div>
//                                 <Label className="text-sm font-semibold text-gray-600">Job Type</Label>
//                                 <Select onValueChange={(value) => setInput({ ...input, jobType: value })}>
//                                     <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
//                                         <SelectValue placeholder="Select Job Type" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             <SelectItem value="on-site full-time">On-site Full Time</SelectItem>
//                                             <SelectItem value="on-site internship">On-site Internship</SelectItem>
//                                             <SelectItem value="remote full-time">Remote Full Time</SelectItem>
//                                             <SelectItem value="remote internship">Remote Internship</SelectItem>
//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             </div>
//                             <div>
//                                 <Label className="text-sm font-semibold text-gray-600">Experience (Years)</Label>
//                                 <Input
//                                     type="text"
//                                     name="experience"
//                                     value={input.experience}
//                                     onChange={changeEventHandler}
//                                     className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                                 />
//                             </div>
//                             <div>
//                                 <Label className="text-sm font-semibold text-gray-600">Vacancy</Label>
//                                 <Input
//                                     type="number"
//                                     name="vacancy"
//                                     value={input.vacancy}
//                                     onChange={changeEventHandler}
//                                     className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
//                                 />
//                             </div>
//                             {companies.length > 0 && (
//                                 <div className="col-span-2">
//                                     <Label className="text-sm font-semibold text-gray-600">Company</Label>
//                                     <Select onValueChange={selectChangeHandler}>
//                                         <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
//                                             <SelectValue placeholder="Select a Company" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                             <SelectGroup>
//                                                 {companies.map((company) => (
//                                                     <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
//                                                         {company.name}
//                                                     </SelectItem>
//                                                 ))}
//                                             </SelectGroup>
//                                         </SelectContent>
//                                     </Select>
//                                 </div>
//                             )}
//                         </div>
//                         {loading ? (
//                             <Button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 text-white flex justify-center items-center shadow-sm hover:bg-blue-500 transition ease-in-out rounded-lg">
//                                 <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
//                             </Button>
//                         ) : (
//                             <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white shadow-sm transition ease-in-out rounded-lg">
//                                 Post Job
//                             </Button>
//                         )}
//                         {companies.length === 0 && (
//                             <p className="text-xs text-red-600 font-semibold text-center mt-4">*Please register a company before posting a job</p>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PostJob;









import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        vacancy: 0,
        companyId: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-green-200 via-blue-200 to-white py-10">
                <form onSubmit={submitHandler} className="bg-white p-10 max-w-4xl shadow-xl rounded-3xl border border-gray-200">
                    <h2 className="text-3xl font-light text-gray-700 text-center mb-8">Create Job Post</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Job Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
                            />
                        </div>
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
                            />
                        </div>
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
                            />
                        </div>
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Salary (in LPA)</Label>
                            <Input
                                type="number"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                placeholder="e.g., 5 LPA"
                                className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
                            />
                        </div>
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
                            />
                        </div>
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Job Type</Label>
                            <Select onValueChange={(value) => setInput({ ...input, jobType: value })}>
                                <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
                                    <SelectValue placeholder="Select Job Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="full-time">Full-Time</SelectItem>
                                        <SelectItem value="part-time">Part-Time</SelectItem>
                                        <SelectItem value="freelance">Freelance</SelectItem>
                                        <SelectItem value="internship">Internship</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Experience (Years)</Label>
                            <Input
                                type="number"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                placeholder="e.g., 2 Years"
                                className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
                            />
                        </div>
                        <div>
                            <Label className="text-sm font-semibold text-gray-600">Vacancy</Label>
                            <Input
                                type="number"
                                name="vacancy"
                                value={input.vacancy}
                                onChange={changeEventHandler}
                                className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out"
                            />
                        </div>
                        {companies.length > 0 && (
                            <div className="col-span-2">
                                <Label className="text-sm font-semibold text-gray-600">Company</Label>
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-400 transition ease-in-out">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {companies.map((company) => (
                                                <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
                                                    {company.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    </div>
                    {loading ? (
                        <Button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 text-white flex justify-center items-center shadow-sm hover:bg-blue-500 transition ease-in-out rounded-lg">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white shadow-sm transition ease-in-out rounded-lg">
                            Post Job
                        </Button>
                    )}
                    {companies.length === 0 && (
                        <p className="text-xs text-red-600 font-semibold text-center mt-4">*Please register a company before posting a job</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default PostJob;







