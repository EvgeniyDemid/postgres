import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentEntity } from './entities.ts/comtent.entity';
import { AppGeteway } from './geteway';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContentEntity
    ])
  ],
  controllers: [ContentController],
  providers: [ContentService,AppGeteway]
})
export class ContentModule {}
