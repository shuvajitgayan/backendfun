class apiError extends error {
    constructor(
        statusCode,
        message = "some think went wrong",
        error = [],
        stack=""
    ){
        super(message),
        this.statusCode = statusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.error = error
        if (stack) {
            this.stack = stack
        }else{
            error.captureStackTrace(this, this.constructor)
        }
    }
}
export {apiError}