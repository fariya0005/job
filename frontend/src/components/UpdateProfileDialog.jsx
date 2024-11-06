// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify'; // Ensure you've installed 'react-toastify'
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
// import { Label } from './ui/label';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import { Loader2 } from 'lucide-react';
// import { setUser } from '../redux/authSlice'; // Adjust the import according to your actual redux slice



// const UpdateProfileDialog = ({ open, setOpen }) => {
//     const [loading, setLoading] = useState(false);
//     const dispatch = useDispatch();
//     const { user } = useSelector(store => store.auth);

//     const [input, setInput] = useState({
//         fullname: user?.fullname || "",
//         email: user?.email || "",
//         phoneNumber: user?.phoneNumber || "",
//         bio: user?.profile?.bio || "",
//         skills: user?.profile?.skills?.join(', ') || "",
//         file: null // Initialize file as null
//     });

//     // Handle input changes
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     // Handle file changes
//     const fileChangeHandler = (e) => {
//         const file = e.target.files?.[0];
//         setInput({ ...input, file });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("bio", input.bio);
//         formData.append("skills", input.skills);
//         if (input.file) {
//             formData.append("file", input.file); // Append file if selected
//         }

//         try {
//             setLoading(true);
//             const res = await axios.post("http://localhost:8000/api/v1/user/profile/update", formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 },
//                 withCredentials: true
//             });

//             // Check if the request was successful
//             if (res.data.success) {
//                 dispatch(setUser(res.data.user)); // Update user state in your Redux store
//                 toast.success(res.data.message); // Show success message
//             } else {
//                 toast.error('Profile update failed: ' + res.data.message); // Show error message from API
//             }
//         } catch (error) {
//             console.error('Error:', error); // Log the full error for debugging
//             if (error.response) {
//                 console.error('Error response data:', error.response.data); // Log response data
//                 toast.error('Profile update failed: ' + error.response.data.message);
//             } else {
//                 toast.error('Profile update failed: Network or server error');
//             }
//         } finally {
//             setLoading(false); // Ensure loading state is stopped after request
//         }
//         setOpen(false); // Close the dialog after submission
//     };

//     return (
//         <div>
//             <Dialog open={open} onOpenChange={setOpen}>
//                 <DialogContent className="sm:max-w-[425px] bg-green-50 border border-green-300">
//                     <DialogHeader>
//                         <DialogTitle className="text-green-700">Update Profile</DialogTitle>
//                     </DialogHeader>
//                     <form onSubmit={submitHandler}>
//                         <div className='grid gap-4 py-4'>
//                             {/* Full Name Input */}
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="fullname" className="text-right text-green-600">Name</Label>
//                                 <Input
//                                     id="fullname"
//                                     name="fullname"
//                                     type="text"
//                                     value={input.fullname}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3 border border-green-300"
//                                 />
//                             </div>

//                             {/* Email Input */}
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="email" className="text-right text-green-600">Email</Label>
//                                 <Input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     value={input.email}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3 border border-green-300"
//                                 />
//                             </div>

//                             {/* Phone Number Input */}
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="phoneNumber" className="text-right text-green-600">Number</Label>
//                                 <Input
//                                     id="phoneNumber"
//                                     name="phoneNumber"
//                                     value={input.phoneNumber}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3 border border-green-300"
//                                 />
//                             </div>

//                             {/* Bio Input */}
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="bio" className="text-right text-green-600">Bio</Label>
//                                 <Input
//                                     id="bio"
//                                     name="bio"
//                                     value={input.bio}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3 border border-green-300"
//                                 />
//                             </div>

//                             {/* Skills Input */}
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="skills" className="text-right text-green-600">Skills</Label>
//                                 <Input
//                                     id="skills"
//                                     name="skills"
//                                     value={input.skills}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3 border border-green-300"
//                                 />
//                             </div>

//                             {/* Resume File Input */}
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="file" className="text-right text-green-600">Resume</Label>
//                                 <Input
//                                     id="file"
//                                     name="file"
//                                     type="file"
//                                     accept="application/pdf"
//                                     onChange={fileChangeHandler}
//                                     className="col-span-3 border border-green-300"
//                                 />
//                             </div>
//                         </div>

//                         <DialogFooter>
//                             {loading ? (
//                                 <Button className="w-full my-4 bg-green-600 text-white hover:bg-green-700" disabled>
//                                     <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
//                                 </Button>
//                             ) : (
//                                 <Button type="submit" className="w-full my-4 bg-green-600 text-white hover:bg-green-700">
//                                     Update
//                                 </Button>
//                             )}
//                         </DialogFooter>
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

// export default UpdateProfileDialog;









import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { setUser } from '../redux/authSlice';

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(', ') || "",
        file: null // Initialize file as null
    });

    // Handle input changes
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // Handle file changes
    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check if the file is a PDF
            if (file.type === 'application/pdf') {
                setInput({ ...input, file });
            } else {
                toast.error('Please upload a valid PDF file.'); // Show error message for invalid file type
                setInput({ ...input, file: null }); // Reset file input
            }
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file); // Append file if selected
        }

        try {
            setLoading(true);
            const res = await axios.post("http://localhost:8000/api/v1/user/profile/update", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });

            // Check if the request was successful
            if (res.data.success) {
                dispatch(setUser(res.data.user)); // Update user state in your Redux store
                toast.success(res.data.message); // Show success message
            } else {
                toast.error('Profile update failed: ' + res.data.message); // Show error message from API
            }
        } catch (error) {
            console.error('Error:', error); // Log the full error for debugging
            if (error.response) {
                console.error('Error response data:', error.response.data); // Log response data
                toast.error('Profile update failed: ' + error.response.data.message);
            } else {
                toast.error('Profile update failed: Network or server error');
            }
        } finally {
            setLoading(false); // Ensure loading state is stopped after request
        }
        setOpen(false); // Close the dialog after submission
    };

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px] bg-green-50 border border-green-300">
                    <DialogHeader>
                        <DialogTitle className="text-green-700">Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'>
                            {/* Full Name Input */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="fullname" className="text-right text-green-600">Name</Label>
                                <Input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-green-300"
                                />
                            </div>

                            {/* Email Input */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right text-green-600">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-green-300"
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="phoneNumber" className="text-right text-green-600">Number</Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-green-300"
                                />
                            </div>

                            {/* Bio Input */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className="text-right text-green-600">Bio</Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-green-300"
                                />
                            </div>

                            {/* Skills Input */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className="text-right text-green-600">Skills</Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border border-green-300"
                                />
                            </div>

                            {/* Resume File Input */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className="text-right text-green-600">Resume</Label>
                                <Input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandler}
                                    className="col-span-3 border border-green-300"
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            {loading ? (
                                <Button className="w-full my-4 bg-green-600 text-white hover:bg-green-700" disabled>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full my-4 bg-green-600 text-white hover:bg-green-700">
                                    Update
                                </Button>
                            )}
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateProfileDialog;

