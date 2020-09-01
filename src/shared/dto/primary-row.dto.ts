import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

export class PrimaryRowDto {
  @PrimaryGeneratedColumn()
  @ApiModelProperty({type: Number, description: 'Идентификатор'})
  readonly id: number;

  @CreateDateColumn({type: 'timestamp'})
  @ApiModelProperty({type: String, format: 'date-time', description: 'Дата создания записи'})
  @Type(() => Date)
  readonly createdAt: Date;

  @ApiModelProperty({type: String, format: 'date-time', description: 'Дата последнего обновления записи'})
  @UpdateDateColumn({type: 'timestamp'})
  @Type(() => Date)
  readonly updatedAt: Date;
}

  