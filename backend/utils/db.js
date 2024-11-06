


// import mongoose from "mongoose";

// const connectDB =  () => {
//   try {
//     const conn = mongoose.connect(process.env.MONGO_URI);
//     console.log(conn);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1); // Exit the process with failure
//   }
// };

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;





