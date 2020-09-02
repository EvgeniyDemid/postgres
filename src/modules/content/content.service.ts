import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ContentEntity } from './entities.ts/comtent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContentDto } from './Dto/create-content.dto';
import {merge} from 'lodash'

@Injectable()
export class ContentService {
    constructor (@InjectRepository(ContentEntity) private contentRepository: Repository<ContentEntity>){}
    
    async showAllContent(){
        return await this.contentRepository.find();
    }

    async showOneContent(id: number){
        return await this.contentRepository.findOne({where:{id}});
    }

    async create(data: CreateContentDto){
        return this.contentRepository.save(data)
    }

    async update(id:number, data: CreateContentDto){
       const content = await this.contentRepository.findOne({where:{id}});
       merge(content, data) ;
       return this.contentRepository.save(content)
    }

    async delete(id: number){
        await this.contentRepository.delete({ id })
         return { delete : true}
    }

}
