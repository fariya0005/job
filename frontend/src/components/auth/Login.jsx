import React, { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading, user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'An error occurred');
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-white to-blue-300">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Welcome Back!</h1>
                <form onSubmit={submitHandler} className='space-y-6'>
                    <div>
                        <Label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="you@example.com"
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <Label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="********"
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div className="my-4">
                        <Label className="block text-sm font-semibold text-gray-700 mb-2">Select Role</Label>
                        <RadioGroup className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer focus:ring-blue-500 h-4 w-4"
                                />
                                <Label htmlFor="r1" className="text-sm text-gray-700">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="admin"
                                    checked={input.role === 'admin'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer focus:ring-blue-500 h-4 w-4"
                                />
                                <Label htmlFor="r2" className="text-sm text-gray-700">Admin</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {loading ? (
                        <Button className="w-full flex justify-center items-center py-2 mt-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Login
                        </Button>
                    )}
                    <div className='text-center mt-4'>
                        <span className='text-sm text-gray-600'>
                            Don't have an account? <Link to="/signup" className='text-blue-600 hover:text-blue-800 font-semibold'>Signup</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;