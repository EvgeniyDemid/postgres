import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ContentEntity } from './entities.ts/comtent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContentDto } from './Dto/create-content.dto';
import {merge} from 'lodash';
import { AppGeteway } from './geteway';

@Injectable()
export class ContentService {
    constructor (@InjectRepository(ContentEntity) private contentRepository: Repository<ContentEntity>,
    private readonly appGeteway: AppGeteway ){}
    
    async showAllContent(){
        return await this.contentRepository.find(
            {select:['id', "avtor"]}
        );
    }
    async showOneContent(id: number){
    const content= await this.contentRepository.findOne({where:{id}},);
    if(!content){
        throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
    return content;
    }

    async create(data: CreateContentDto){
        const content = await this.contentRepository.save(data);
        const {discription, ...result } = content;
        this.appGeteway.wss.emit('newcontent', discription)
        return result;
    }

    async update(id:number, data: CreateContentDto){
       const content = await this.contentRepository.findOne({where:{id}});
       if(!content){
        throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }   merge(content, data) ;
       await this.contentRepository.save(content);
       return content 
    }

    async delete(id: number){
        const content = await this.contentRepository.findOne({where:{id}});
        if(!content){
         throw new HttpException('Not found', HttpStatus.NOT_FOUND)
        }
        await this.contentRepository.delete({ id })
         return { delete : true}
    }

}
