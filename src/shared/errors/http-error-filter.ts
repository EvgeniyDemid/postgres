import { Catch, ExceptionFilter, HttpException, ArgumentsHost, Logger } from "@nestjs/common";

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception:HttpException, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const error:any= exception.getResponse();
        
        console.log(ctx.getRequest())
        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: error.message            
        }
        Logger.error(
            `${request.method} ${request.url}`,
            JSON.stringify(errorResponse),
            'ExceptionFilter'
        );

        response.status(status).json(errorResponse)
    }
}