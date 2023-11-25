const asyincHandelar = (requestHandelar) => {
    return (req,res,next) =>{
        Promise.resolve(requestHandelar(req,res,next)).catch((err)=>next(err))
    }
}
export {asyincHandelar}