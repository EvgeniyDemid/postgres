import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ContentEntity } from './entities.ts/comtent.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContentService {
    constructor (@InjectRepository(ContentEntity) private contentRepository: Repository<ContentEntity>){}
    
    async showAllContent(){
        return await this.contentRepository.find();
    }

    async showOneContent(id: string){
        return await this.contentRepository.find({where:{id}});
    }

    async create(param:CreateContentDto){
        return this.contentRepository.
    }


}
