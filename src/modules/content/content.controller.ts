import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './Dto/create-content.dto';
import { ResponsContentDto } from './Dto/response-content.dto';
import { UpdateContentDto } from './Dto/update-content.dto';

@Controller('content')
export class ContentController {
  private logger = new Logger('ContentController')
  constructor(private contentservice: ContentService) {}
  @Get()
  showAllContent(): Promise<ResponsContentDto[]> {
    return this.contentservice.showAllContent();
  }
  @Get(':id')
  showOneContent(@Param('id',ParseIntPipe) id:number): Promise<ResponsContentDto> {
    return this.contentservice.showOneContent(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createContent(
    @Body() data: CreateContentDto ): Promise<ResponsContentDto> {
      this.logger.log(JSON.stringify(data))
      
    return this.contentservice.create(data);
  }

  @Put(':id')
  updateContent(@Param('id',ParseIntPipe) id:number, @Body() data: UpdateContentDto ) {
      return this.contentservice.update(id,data)
  }

  @Delete(':id')
  deleteContent(@Param('id',ParseIntPipe) id:number) {
      return this.contentservice.delete(id)
  }
}
