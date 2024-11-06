// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name:"job",
//     initialState:{
//         allJobs:[],
//         allAdminJobs:[],
//         singleJob:null, 
//         searchJobByText:"",
//         allAppliedJobs:[],
//         searchedQuery:"",
//     },
//     reducers:{
//         // actions
//         setAllJobs:(state,action) => {
//             state.allJobs = action.payload;
//         },
//         setSingleJob:(state,action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs:(state,action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText:(state,action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs:(state,action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setSearchedQuery:(state,action) => {
//             state.searchedQuery = action.payload;
//         }
//     }
// });
// export const {
//     setAllJobs, 
//     setSingleJob, 
//     setAllAdminJobs,
//     setSearchJobByText, 
//     setAllAppliedJobs,
//     setSearchedQuery
// } = jobSlice.actions;
// export default jobSlice.reducer;










// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name: "job",
//     initialState: {
//         allJobs: [],
//         allAdminJobs: [],
//         singleJob: null, 
//         searchJobByText: "",
//         allAppliedJobs: [],
//         searchedQuery: [], // Changed to an array
//     },
//     reducers: {
//         // actions
//         setAllJobs: (state, action) => {
//             state.allJobs = action.payload;
//         },
//         setSingleJob: (state, action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs: (state, action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText: (state, action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs: (state, action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setSearchedQuery: (state, action) => {
//             state.searchedQuery = action.payload; // Store array of selected filters
//         }
//     }
// });

// export const {
//     setAllJobs, 
//     setSingleJob, 
//     setAllAdminJobs,
//     setSearchJobByText, 
//     setAllAppliedJobs,
//     setSearchedQuery
// } = jobSlice.actions;

// export default jobSlice.reducer;









// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name: "job",
//     initialState: {
//         allJobs: [],
//         allAdminJobs: [],
//         singleJob: null,
//         searchJobByText: "",
//         allAppliedJobs: [],
//         searchedQuery: "",
//         filteredJobs: [] // New property to store filtered jobs
//     },
//     reducers: {
//         setAllJobs: (state, action) => {
//             state.allJobs = action.payload;
//             state.filteredJobs = action.payload; // Initialize filteredJobs with all jobs
//         },
//         setSingleJob: (state, action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs: (state, action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText: (state, action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs: (state, action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setSearchedQuery: (state, action) => {
//             state.searchedQuery = action.payload;
//         },
//         searchJobs: (state, action) => {
//             const searchTerm = action.payload.toLowerCase();
//             state.filteredJobs = state.allJobs.filter(job =>
//                 job.title.toLowerCase().includes(searchTerm) ||
//                 job.company.toLowerCase().includes(searchTerm) ||
//                 job.location.toLowerCase().includes(searchTerm)
//             );
//         }
//     }
// });

// export const {
//     setAllJobs,
//     setSingleJob,
//     setAllAdminJobs,
//     setSearchJobByText,
//     setAllAppliedJobs,
//     setSearchedQuery,
//     searchJobs // Export searchJobs action
// } = jobSlice.actions;

// export default jobSlice.reducer;






// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name: "job",
//     initialState: {
//         allJobs: [],
//         allAdminJobs: [],
//         singleJob: null,
//         searchJobByText: "",
//         allAppliedJobs: [],
//         searchedQuery: "",
//         filteredJobs: [], // Added filteredJobs to hold search results
//     },
//     reducers: {
//         // actions
//         setAllJobs: (state, action) => {
//             state.allJobs = action.payload;
//             state.filteredJobs = action.payload; // Initialize filteredJobs with all jobs
//         },
//         setSingleJob: (state, action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs: (state, action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText: (state, action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs: (state, action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setSearchedQuery: (state, action) => {
//             state.searchedQuery = action.payload;
//         },
//         searchJobs: (state, action) => {
//             const searchTerm = action.payload.toLowerCase();
//             state.filteredJobs = state.allJobs.filter(job =>
//                 job.location.toLowerCase().includes(searchTerm) // Filter by location field
//             );
//         },
//     },
// });

// export const {
//     setAllJobs,
//     setSingleJob,
//     setAllAdminJobs,
//     setSearchJobByText,
//     setAllAppliedJobs,
//     setSearchedQuery,
//     searchJobs, // Export searchJobs action
// } = jobSlice.actions;
// export default jobSlice.reducer;









// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name: "job",
//     initialState: {
//         allJobs: [],
//         allAdminJobs: [],
//         singleJob: null,
//         searchJobByText: "",
//         allAppliedJobs: [],
//         searchedQuery: "",
//         filteredJobs: [], // Holds search results
//     },
//     reducers: {
//         setAllJobs: (state, action) => {
//             state.allJobs = action.payload;
//             state.filteredJobs = action.payload; // Initialize filteredJobs with all jobs
//         },
//         setSingleJob: (state, action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs: (state, action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText: (state, action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs: (state, action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setSearchedQuery: (state, action) => {
//             state.searchedQuery = action.payload;
//         },
//         searchJobs: (state, action) => {
//             const searchTerm = action.payload.toLowerCase();
//             state.filteredJobs = state.allJobs.filter(job =>
//                 job.title.toLowerCase().includes(searchTerm) || // Search in title
//                 job.location.toLowerCase().includes(searchTerm) || // Search in location
//                 job.description.toLowerCase().includes(searchTerm) // Search in description
//             );
//         },
//     },
// });

// export const {
//     setAllJobs,
//     setSingleJob,
//     setAllAdminJobs,
//     setSearchJobByText,
//     setAllAppliedJobs,
//     setSearchedQuery,
//     searchJobs, // Export searchJobs action
// } = jobSlice.actions;
// export default jobSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        searchJobByText: "",
        allAppliedJobs: [],
        searchedQuery: "",
        filteredJobs: [], // Holds search results
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
            state.filteredJobs = action.payload; // Initialize filteredJobs with all jobs
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchedQuery: (state, action) => {
            state.searchedQuery = action.payload;
        },
        searchJobs: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredJobs = state.allJobs.filter(job =>
                job.title.toLowerCase().includes(searchTerm) ||
                job.location.toLowerCase().includes(searchTerm) ||
                job.description.toLowerCase().includes(searchTerm)
            );
        },
        filterJobs: (state, action) => {
            const { locationFilters, titleFilters, salaryFilters } = action.payload;

            state.filteredJobs = state.allJobs.filter(job => {
                const locationMatch = locationFilters.length === 0 || locationFilters.includes(job.location);
                const titleMatch = titleFilters.length === 0 || titleFilters.includes(job.title);
                const salaryMatch = salaryFilters.length === 0 || salaryFilters.includes(job.salaryRange);

                return locationMatch && titleMatch && salaryMatch;
            });
        },
    },
});

export const {
    setAllJobs,
    setSingleJob,
    setAllAdminJobs,
    setSearchJobByText,
    setAllAppliedJobs,
    setSearchedQuery,
    searchJobs,
    filterJobs, // Export filterJobs action
} = jobSlice.actions;

export default jobSlice.reducer;

