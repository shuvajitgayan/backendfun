import { apiError } from "../utils/apiError.js";
import {asyincHandelar} from "../utils/asyinsHandelar.js"
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinaryFileUplode.js";
import { apiResponce } from "../utils/apiResponce.js";

const userRegister = asyincHandelar( async (req,res) => {
    const {username,email,fullname,avater,coverImage,password} = req.body
    // console.log("email:",email);
    // if (fullname === ""){
    //     throw new apiError(400,"full name is required")
    // }
    if (
        [username,email,fullname,avater,coverImage,password].some( (field) => field?.trim() === "" )
    ) {
        throw new apiError(400,"all filds are required")
    }
    const existedUser = await User.findOne({
        $or: [ { username },{ email } ]
    })
    if (existedUser) {
        throw new apiError (409,"user name or email already exists")
    }
    const avtaralocalapath = req.files?.avtar[0]?.path
    if (!avtaralocalapath) {
        throw new apiError (400,"avtar file is required")
    }
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    const avtar = await uploadOnCloudinary(avtaralocalapath)
    const coverPhoto = await uploadOnCloudinary(coverImageLocalPath)

    if (!avtar) {
        throw new apiError (400,"avtar file is required")
    }

    const user = await User.create({
        fullname,
        avatar:avtar.url,
        coverImage:coverPhoto?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new apiError(500,"some think went wrong while user registering")
    }

    return res.status(201).json(
        new apiResponce(200, createdUser, "user registered succesfully")
    )

})

export {userRegister}