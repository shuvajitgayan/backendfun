// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv"
import connectDb from "./db/index.js";


dotenv.config(
    {
        path:"./env"
    })


const sarverPort = process.env.PORT || 8000;
connectDb ()
.then (() => {
    app.on("error", (error) => {
        console.log("error :",error)
        throw error;
    })
    app.listen(sarverPort, () => {
        console.log(`sarver is running on port ${sarverPort}`);
    })
})
.catch ( (error) => {
    console.log("MONGODB connection failed !!", error)
})














// import express from "express";
// const app = express()

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`app is listenning on port ${process.env.PORT}`);
//         })
//     }catch (error) {
//         console.error("ERROR",error);
//         throw error
//     }
// })
// ()
