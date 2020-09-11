import { Type, Expose } from 'class-transformer';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class PrimaryRowDto {
  @Expose()
  @PrimaryGeneratedColumn()
  readonly id?: number;
  @Expose()
  @CreateDateColumn({ type: 'timestamp' })
  @Type(() => Date)
  readonly createdAt?: Date;
  @Expose()
  @UpdateDateColumn({ type: 'timestamp' })
  @Type(() => Date)
  readonly updatedAt?: Date;
}
