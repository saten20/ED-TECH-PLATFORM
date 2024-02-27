// it is important to write the version i.e v2 while importing the cloudinary
const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async(file,folder, height, quality )=>{
        const options = {folder};
        if(height){
            options.height = height;
        }
        if(quality){
            options.quality = quality;
        }
        options.resource_type = "auto";

        return await cloudinary.uploader.upload(file.tempFilePath,options)
}