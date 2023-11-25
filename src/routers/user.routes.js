import { Router } from "express";
import { userRegister } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewere.js";

const router = Router()
router.route("/register").post(
    upload.fields([
        {
            name:"avtar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    userRegister)

export default router