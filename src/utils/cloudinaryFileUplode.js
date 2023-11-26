import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"; // fs = file system

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET 
});

const uploadOnCloudinary = async (localPath) => {
    try {
        if (!localPath) return null;
        // upload file on cloudinary
        const upload = await cloudinary.uploader.upload(localPath,{
            resource_type:'auto'
        });
        // file uploaded succesfully
        // console.log("file uploaded on cloudinary ", upload.url);
        fs.unlinkSync(localPath)
        return upload;
    } 
    catch (error) {
        fs.unlinkSync(localPath) // remove the localy save temurary file as the operation failed
        return null;
    }
}
export {uploadOnCloudinary}
