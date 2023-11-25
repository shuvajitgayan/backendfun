import {asyincHandelar} from "../utils/asyinsHandelar.js"

const userRegister = asyincHandelar( async (req,res) => {
    res.status(200).json({
        message:"ok"
    })
})

export {userRegister}