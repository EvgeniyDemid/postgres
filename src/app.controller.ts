import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get()
    status():string{
        return "The server is running"
    }
}
