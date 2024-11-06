// import multer from 'multer';
// import path from 'path';

// // Setup storage for multer
// const storage = multer.memoryStorage(); // This stores the file in memory, which is needed for Cloudinary

// // Initialize multer
// const singleUpload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png/; // Allowed file types
//         const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//         const mimetype = fileTypes.test(file.mimetype);

//         if (extname && mimetype) {
//             return cb(null, true);
//         } else {
//             cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."));
//         }
//     }
// }).single("file"); // Expecting the file to be sent under the key 'file'

// // Export the multer middleware
// export {singleUpload};



// import multer from 'multer';
// import path from 'path';

// // Setup storage for multer
// const storage = multer.memoryStorage(); // This stores the file in memory, which is needed for Cloudinary

// // Initialize multer
// const singleUpload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//         // Allowed file types for images and PDF
//         const fileTypes = /jpeg|jpg|png|pdf/; // Include 'pdf' here
//         const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//         const mimetype = fileTypes.test(file.mimetype);

//         if (extname && mimetype) {
//             return cb(null, true);
//         } else {
//             cb(new Error("Invalid file type. Only JPEG, JPG, PNG, and PDF are allowed.")); // Updated error message
//         }
//     }
// }).single("file"); // Expecting the file to be sent under the key 'file'

// // Export the multer middleware
// export { singleUpload };





import multer from 'multer';
import path from 'path';

// Setup storage for multer
const storage = multer.memoryStorage(); // This stores the file in memory, which is needed for Cloudinary

// Initialize multer
const singleUpload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        // Allowed file types for profile photos (images) and PDF
        const fileTypes = /jpeg|jpg|png|pdf/; // Include 'pdf' along with image types
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error("Invalid file type. Only JPEG, JPG, PNG, and PDF are allowed.")); // Updated error message
        }
    }
}).single("file"); // Expecting the file to be sent under the key 'file'

// Initialize multer for handling both profile photo and other files (e.g., PDF)
const uploadMultiple = multer({
    storage,
    fileFilter: (req, file, cb) => {
        // Allowed file types for profile photos (images)
        const profilePhotoTypes = /jpeg|jpg|png/;
        const extname = profilePhotoTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = profilePhotoTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error("Invalid profile photo type. Only JPEG, JPG, and PNG are allowed."));
        }
    }
}).fields([
    { name: 'profilePhoto', maxCount: 1 }, // Profile photo field
    { name: 'document', maxCount: 1 }      // PDF or other document field
]);

// Export the multer middleware
export { singleUpload, uploadMultiple };

