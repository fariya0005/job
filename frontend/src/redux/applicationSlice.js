// import { createSlice } from "@reduxjs/toolkit";

// const applicationSlice = createSlice({
//     name: 'application',
//     initialState: {
//         applicants: { applications: [] }, // Initialize applicants as an object with an empty applications array
//     },
//     reducers: {
//         setAllApplicants: (state, action) => {
//             state.applicants.applications = action.payload; // Set the applications directly
//         }
//     }
// });

// export const { setAllApplicants } = applicationSlice.actions;
// export default applicationSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

// Create the application slice
const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        applicants: { applications: [] }, // Initialize applicants as an object with an empty applications array
    },
    reducers: {
        // Reducer to set all applicants
        setAllApplicants: (state, action) => {
            state.applicants.applications = action.payload; // Set the applications directly
        },
        // You can add other reducers here if needed
    },
});

// Export the action creator to set all applicants
export const { setAllApplicants } = applicationSlice.actions;

// Export the reducer to be used in the store
export default applicationSlice.reducer;
