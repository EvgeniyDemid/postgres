
import {Type} from 'class-transformer';
import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

export class PrimaryRowDto {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @CreateDateColumn({type: 'timestamp'})
  @Type(() => Date)
  readonly createdAt: Date;


  @UpdateDateColumn({type: 'timestamp'})
  @Type(() => Date)
  readonly updatedAt: Date;
}

  