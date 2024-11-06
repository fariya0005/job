// import { createSlice } from '@reduxjs/toolkit';

// export const companySlice = createSlice({
//     name: 'company',
//     initialState: {
//         company: null,  // Initial state for company
//     },
//     reducers: {
//         setSingleCompany: (state, action) => {
//             state.company = action.payload;  // Update the state with the new company data
//         },
//     },
// });

// export const { setSingleCompany } = companySlice.actions;
// export default companySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompanyByText:"",
    },
    reducers:{
        // actions
        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setCompanies:(state,action) => {
            state.companies = action.payload;
        },
        setSearchCompanyByText:(state,action) => {
            state.searchCompanyByText = action.payload;
        }
    }
});
export const {setSingleCompany, setCompanies,setSearchCompanyByText} = companySlice.actions;
export default companySlice.reducer;
