import React, { useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal, CheckCircle, XCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';

const shortlistingStatus = [
    { status: "Accepted", icon: <CheckCircle className="mr-2 text-green-500" /> },
    { status: "Rejected", icon: <XCircle className="mr-2 text-red-500" /> }
];

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        console.log("Applicants Data:", applicants);
    }, [applicants]);

    const statusHandler = async (status, id) => {
        console.log("Updating status for ID:", id);
        console.log("Sending status:", status);

        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });

            console.log("Response from server:", res);
            if (res.data.success) {
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message || 'Failed to update status');
            }
        } catch (error) {
            console.error("Error updating status:", error.response || error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-8 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-2xl shadow-lg">
            <Table className="min-w-full bg-transparent rounded-xl overflow-hidden shadow-sm">
                <TableCaption className="text-2xl font-semibold text-gray-800 mb-4">Recent Applicants</TableCaption>
                <TableHeader className="bg-gradient-to-r from-green-50 via-blue-50 to-white text-gray-700 rounded-t-xl">
                    <TableRow>
                        <TableHead className="px-4 py-3 text-left text-gray-600 font-medium text-sm">Full Name</TableHead>
                        <TableHead className="px-4 py-3 text-left text-gray-600 font-medium text-sm">Email</TableHead>
                        <TableHead className="px-4 py-3 text-left text-gray-600 font-medium text-sm">Contact</TableHead>
                        <TableHead className="px-4 py-3 text-left text-gray-600 font-medium text-sm">Resume</TableHead>
                        <TableHead className="px-4 py-3 text-left text-gray-600 font-medium text-sm">Date</TableHead>
                        <TableHead className="px-4 py-3 text-right text-gray-600 font-medium text-sm">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applicants?.applications?.length > 0 ? (
                        applicants.applications.map((item) => {
                            const createdAt = new Date(item?.createdAt).toLocaleDateString() || 'N/A';
                            return (
                                <TableRow key={item._id} className="hover:bg-blue-100 transition-all duration-300 ease-in-out rounded-lg">
                                    <TableCell className="px-4 py-3 text-gray-800">{item?.fullname || 'N/A'}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-800">{item?.email || 'N/A'}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-800">{item?.phoneNumber || 'N/A'}</TableCell>
                                    <TableCell className="px-4 py-3 text-blue-600">
                                        {item.profile?.resume ? (
                                            <a
                                                href={item.profile.resume}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline text-blue-600"
                                            >
                                                {item.profile.resumeOriginalName || "View Resume"}
                                            </a>
                                        ) : <span className="text-gray-500">N/A</span>}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-700">{createdAt}</TableCell>
                                    <TableCell className="px-4 py-3 text-right">
                                        <Popover>
                                            <PopoverTrigger className="text-gray-500 hover:text-gray-700 cursor-pointer">
                                                <MoreHorizontal className="h-5 w-5" />
                                            </PopoverTrigger>
                                            <PopoverContent className="w-48 p-3 bg-white rounded-xl shadow-lg border border-gray-200">
                                                {shortlistingStatus.map(({ status, icon }, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => statusHandler(status, item._id)}
                                                        className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-200"
                                                    >
                                                        {icon}
                                                        <span className="text-gray-800 font-medium">{status}</span>
                                                    </div>
                                                ))}
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan="6" className="text-center py-4 text-gray-500">
                                No applicants found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ApplicantsTable;
