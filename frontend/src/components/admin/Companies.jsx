



import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
    useGetAllCompanies();
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input]);

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10 px-4'>
                {/* Header section */}
                <div className='flex items-center justify-between my-8 bg-white shadow-md p-6 rounded-lg'>
                    <h1 className='text-2xl font-semibold text-gray-800'>Companies</h1>
                    <Button 
                        onClick={() => navigate("/admin/companies/create")} 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                        New Company
                    </Button>
                </div>
                
                {/* Companies Table */}
                <CompaniesTable />
            </div>
        </div>
    );
};

export default Companies;


