// import React from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Edit2, MoreHorizontal } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const CompaniesTable = () => {
//     const navigate = useNavigate();
//     const { companies, searchCompanyByText } = useSelector(store => store.company);




//     return (
//         <div className="bg-gradient-to-r from-green-50 via-blue-100 to-white shadow-xl rounded-lg p-6">
//             <Table className="table-auto w-full border-collapse">
//                 <TableCaption className="text-gray-700 text-xl font-semibold mb-4">Recent Registered Companies</TableCaption>
//                 <TableHeader className="bg-gradient-to-r from-green-200 to-blue-300 rounded-t-lg">
//                     <TableRow>
//                         <TableHead className="text-left py-4 px-6 text-gray-900 font-bold text-lg">Name</TableHead>
//                         <TableHead className="text-left py-4 px-6 text-gray-900 font-bold text-lg">Date</TableHead>
//                         <TableHead className="text-right py-4 px-6 text-gray-900 font-bold text-lg">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {companies.map((company) => (
//                         <TableRow 
//                             key={company._id} 
//                             className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//                         >
//                             <TableCell className="py-4 px-6 text-gray-800">{company.name}</TableCell>
//                             <TableCell className="py-4 px-6 text-gray-600">{company.createdAt}</TableCell>
//                             <TableCell className="py-4 px-6 text-right">
//                                 <Popover>
//                                     <PopoverTrigger>
//                                         <MoreHorizontal className="cursor-pointer text-gray-500 hover:text-blue-700 transition-colors text-xl" />
//                                     </PopoverTrigger>
//                                     <PopoverContent className="w-36 bg-white shadow-lg rounded-lg p-3">
//                                         <div 
//                                             onClick={() => navigate(`/admin/companies/${company._id}`)} 
//                                             className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-100 rounded-md transition-colors"
//                                         >
//                                             <Edit2 className="w-5 text-blue-600 transition-transform hover:scale-110" />
//                                             <span className="text-blue-800 font-medium">Edit</span>
//                                         </div>
//                                     </PopoverContent>
//                                 </Popover>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default CompaniesTable;












import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CompaniesTable = () => {
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-r from-green-50 via-blue-100 to-white shadow-xl rounded-lg p-6">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search Companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
            </div>
            <Table className="table-auto w-full border-collapse">



                <TableCaption className="text-gray-500 text-xl font-semibold mt-4 text-left">
                    Current Registered Companies Overview
                </TableCaption>
                <TableHeader className="bg-gradient-to-r from-green-200 to-blue-300 rounded-t-lg">
                    <TableRow>
                        <TableHead className="text-left py-4 px-6 text-gray-900 font-bold text-lg">Name</TableHead>
                        <TableHead className="text-center py-4 px-6 text-gray-900 font-bold text-lg">Date</TableHead>
                        <TableHead className="text-right py-4 px-6 text-gray-900 font-bold text-lg">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredCompanies.length > 0 ? (
                        filteredCompanies.map((company) => (
                            <TableRow
                                key={company._id}
                                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            >
                                <TableCell className="py-4 px-6 text-gray-800">{company.name}</TableCell>
                                <TableCell className="py-4 px-6 text-gray-600 text-center">{new Date(company.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell className="py-4 px-6 text-right">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal className="cursor-pointer text-gray-500 hover:text-blue-700 transition-colors text-xl" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-36 bg-white shadow-lg rounded-lg p-3">
                                            <div
                                                onClick={() => navigate(`/admin/companies/${company._id}`)}
                                                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-100 rounded-md transition-colors"
                                            >
                                                <Edit2 className="w-5 text-blue-600 transition-transform hover:scale-110" />
                                                <span className="text-blue-800 font-medium">Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center py-4 text-gray-600">No companies found</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </div>
    );
};

export default CompaniesTable;

















