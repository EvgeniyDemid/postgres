import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {

    constructor(private contentservice: ContentService){}
    @Get()
    showAllContent(){}

    @Get(':id')
    showOneContent(){}

    @Post()
    createContent(){}

    @Put(':id')
    updateContent(){}

    @Delete('id')
    deleteContent(){}

}
