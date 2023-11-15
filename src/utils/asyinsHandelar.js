const asyincHandelar = (requestHandelar) => {
    (req,res,next) =>{
        process.resolve(requestHandelar(req,res,next)).catch((err)=>next(err))
    }
}