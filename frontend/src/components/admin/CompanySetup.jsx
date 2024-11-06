import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import useGetCompanyById from '@/hooks/useGetCompanyById';
import { Home, Info, Globe, Phone, Link2 } from 'lucide-react';

const CompanySetup = () => {
    const params = useParams();
    useGetCompanyById(params.id);
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        phone: ""
    });
    const { singleCompany } = useSelector(store => store.company);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);
        formData.append("phone", input.phone);
        
        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/companies");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setInput({
            name: singleCompany.name || "",
            description: singleCompany.description || "",
            website: singleCompany.website || "",
            location: singleCompany.location || "",
            phone: singleCompany.phone || ""
        });
    }, [singleCompany]);

    return (
        <div className='min-h-screen bg-gradient-to-br from-green-200 to-blue-200 flex flex-col'>
            <Navbar />
            <div className='flex-grow flex items-center justify-center py-8'>
                <div className='max-w-md w-full mx-4 p-6 bg-white rounded-lg shadow-lg border border-gray-300'>
                    <div className='flex justify-between items-center mb-6'>
                        <h1 className='text-2xl font-bold text-gray-800'>Company Setup</h1>
                        <Button 
                            onClick={() => navigate("/admin/companies")} 
                            variant="outline" 
                            className="text-sm p-2 border border-gray-300 hover:bg-gray-200 rounded-md"
                        >
                            Back
                        </Button>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className='space-y-4'>
                            <div>
                                <Label className="text-gray-700 flex items-center">
                                    <Home className="mr-2" /> Company Name
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={changeEventHandler}
                                    className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                                    placeholder="Enter company name"
                                    required
                                />
                            </div>
                            <div>
                                <Label className="text-gray-700 flex items-center">
                                    <Info className="mr-2" /> Description
                                </Label>
                                <Input
                                    type="text"
                                    name="description"
                                    value={input.description}
                                    onChange={changeEventHandler}
                                    className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                                    placeholder="Enter description"
                                    required
                                />
                            </div>
                            <div>
                                <Label className="text-gray-700 flex items-center">
                                    <Link2 className="mr-2" /> Website
                                </Label>
                                <Input
                                    type="text"
                                    name="website"
                                    value={input.website}
                                    onChange={changeEventHandler}
                                    className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                                    placeholder="Enter website URL"
                                    required
                                />
                            </div>
                            <div>
                                <Label className="text-gray-700 flex items-center">
                                    <Globe className="mr-2" /> Location
                                </Label>
                                <Input
                                    type="text"
                                    name="location"
                                    value={input.location}
                                    onChange={changeEventHandler}
                                    className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                                    placeholder="Enter location"
                                    required
                                />
                            </div>
                            <div>
                                <Label className="text-gray-700 flex items-center">
                                    <Phone className="mr-2" /> Phone Number
                                </Label>
                                <Input
                                    type="text"
                                    name="phone"
                                    value={input.phone}
                                    onChange={changeEventHandler}
                                    className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>
                        </div>
                        <div className='mt-6'>
                            {loading ? (
                                <Button className="w-full bg-green-500 text-white hover:bg-green-400 rounded-md">
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait 
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-400 rounded-md">Update</Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CompanySetup;
